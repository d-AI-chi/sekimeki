import React, { useState, useCallback, useEffect } from 'react';
import type { Screen, Mode, SeatLayout } from './types';
import { useRoom } from './hooks/useRoom';
import { computeVector, computeAllCompatibility } from './logic/scoring';
import { optimizeSeating, reshuffleSeating } from './logic/optimization';
import { computeAwards } from './logic/awards';
import { getPersonalType } from './data/typeNames';
import {
  createRoom,
  joinRoom,
  submitAnswers,
  publishResults,
  togglePairVisibility,
  revealResults,
  updateSeatAssignments,
  getRoomConfig,
  leaveRoom,
  verifyAdminPassword,
  updateAdminId,
  checkResultsExist,
} from './lib/firebase';

import { TopScreen } from './components/TopScreen';
import { SetupScreen } from './components/SetupScreen';
import { JoinScreen } from './components/JoinScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { WaitingScreen } from './components/WaitingScreen';
import { DiagnosisScreen } from './components/DiagnosisScreen';
import { AdminResultScreen } from './components/AdminResultScreen';
import { ResultScreen } from './components/ResultScreen';
import { MatrixScreen } from './components/MatrixScreen';
import { AdminLoginScreen } from './components/AdminLoginScreen';

export const App: React.FC = () => {
  const room = useRoom();
  const [screen, setScreen] = useState<Screen>('loading');
  const [reshuffleCount, setReshuffleCount] = useState(1);
  const [localRole, setLocalRole] = useState<'admin' | 'participant' | null>(null);

  // Wait for auth to be ready
  useEffect(() => {
    if (room.isReady && screen === 'loading') {
      setScreen('top');
    }
  }, [room.isReady, screen]);

  // React to room state changes
  useEffect(() => {
    if (!room.roomData || !localRole) return;

    const state = room.roomData.config.state;

    if (localRole === 'participant') {
      // Use room.revealed as the primary signal (config.state may not update if admin used password login)
      if (room.revealed) {
        setScreen('result');
      }
    }
  }, [room.roomData?.config.state, room.allCompleted, room.revealed, room.myParticipant?.completed]);

  // --- Admin Actions ---

  const handleCreateRoom = useCallback(async (mode: Mode, layout: SeatLayout, password: string) => {
    const code = await createRoom(mode, layout, password);
    room.setRoomCode(code);
    setLocalRole('admin');
    setScreen('waiting');
  }, [room]);

  const handleCalculateResults = useCallback(async () => {
    if (!room.roomCode || !room.roomData) return;

    try {
      // Use only completed participants for calculation
      const completedParticipants = room.participants.filter((p) => p.completed);
      if (completedParticipants.length < 2) return;

      // Build participants with vectors
      const participantsWithVectors = completedParticipants.map((p) => {
        const vector = computeVector(p.answers);
        const pt = getPersonalType(vector);
        return { ...p, vector, personalType: pt.name, personalTypeEmoji: pt.emoji };
      });

      const results = computeAllCompatibility(participantsWithVectors);
      const mode = room.roomData.config.mode;
      const layout = room.roomData.config.layout;
      const seats = optimizeSeating(participantsWithVectors, results, layout, mode);
      const awards = computeAwards(participantsWithVectors, results, seats);

      // Build participant updates for Firebase
      const participantUpdates: Record<string, any> = {};
      for (const p of participantsWithVectors) {
        participantUpdates[p.id] = {
          vector: p.vector,
          personalType: p.personalType,
          personalTypeEmoji: p.personalTypeEmoji,
        };
      }

      await publishResults(room.roomCode, results, seats, awards, participantUpdates);
      setScreen('admin-review');
    } catch (err) {
      console.error('結果の計算に失敗しました:', err);
      alert('結果の計算に失敗しました。もう一度お試しください。');
    }
  }, [room.roomCode, room.roomData, room.participants]);

  const handleTogglePair = useCallback(async (pairKey: string, visible: boolean) => {
    if (!room.roomCode) return;
    await togglePairVisibility(room.roomCode, pairKey, visible);
  }, [room.roomCode]);

  const handleReveal = useCallback(async () => {
    if (!room.roomCode) return;
    await revealResults(room.roomCode);
  }, [room.roomCode]);

  const handleReshuffle = useCallback(async () => {
    if (!room.roomCode || !room.roomData) return;

    const newCount = reshuffleCount + 1;
    const mode = room.roomData.config.mode;
    const layout = room.roomData.config.layout;

    const newSeats = reshuffleSeating(
      room.participants,
      room.compatibilityResults,
      layout,
      mode,
      newCount,
      room.seatAssignments
    );
    const awards = computeAwards(room.participants, room.compatibilityResults, newSeats);

    await updateSeatAssignments(room.roomCode, newSeats, awards);
    setReshuffleCount(newCount);
  }, [room.roomCode, room.roomData, room.participants, room.compatibilityResults, room.seatAssignments, reshuffleCount]);

  // --- Participant Actions ---

  const handleAdminLogin = useCallback(async (code: string) => {
    const config = await getRoomConfig(code);
    if (!config) return;
    // Try to update adminId to current session (allows write access if security rules check adminId)
    // Non-fatal: continue login flow even if this fails
    try {
      await updateAdminId(code);
    } catch (err) {
      console.warn('Could not update adminId, write access may be limited:', err);
    }
    room.setRoomCode(code);
    setLocalRole('admin');
    // Route to appropriate admin screen based on room state
    if (config.state === 'admin-review') {
      setScreen('admin-review');
    } else if (config.state === 'results') {
      setScreen('result');
    } else {
      // Check if results already exist even when state is 'waiting'
      // (happens when results were saved but config state update failed)
      const hasResults = await checkResultsExist(code);
      if (hasResults) {
        setScreen('admin-review');
      } else {
        setScreen('waiting');
      }
    }
  }, [room]);

  const handleJoinRoom = useCallback(async (code: string) => {
    const config = await getRoomConfig(code);
    if (!config) return;
    room.setRoomCode(code);
    setLocalRole('participant');
    setScreen('profile');
  }, [room]);

  const handleProfileSubmit = useCallback(async (profile: { name: string; gender?: string; avatar: string }) => {
    if (!room.roomCode) return;
    await joinRoom(room.roomCode, {
      name: profile.name,
      gender: profile.gender,
      avatar: profile.avatar,
    });
    // Participants go directly to diagnosis after profile
    setScreen('diagnosis');
  }, [room.roomCode]);

  const handleDiagnosisComplete = useCallback(async (answers: number[]) => {
    if (!room.roomCode) return;
    await submitAnswers(room.roomCode, answers);
    if (localRole === 'admin') {
      setScreen('waiting');
    } else {
      setScreen('waiting-results');
    }
  }, [room.roomCode, localRole]);

  const handleBack = useCallback(async () => {
    if (room.roomCode && screen === 'waiting' && localRole === 'participant') {
      await leaveRoom(room.roomCode);
    }
    room.setRoomCode('');
    setLocalRole(null);
    setScreen('top');
  }, [room, screen, localRole]);

  // --- Render ---

  if (screen === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse-slow">
          <div className="text-4xl mb-4">🍻</div>
          <p className="text-gray-400">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {screen === 'top' && (
        <TopScreen
          onStart={() => setScreen('setup')}
          onJoin={() => setScreen('join')}
          onAdminLogin={() => setScreen('admin-login')}
        />
      )}

      {screen === 'admin-login' && (
        <AdminLoginScreen
          onLogin={handleAdminLogin}
          onBack={() => setScreen('top')}
        />
      )}

      {screen === 'setup' && (
        <SetupScreen
          onComplete={handleCreateRoom}
          onBack={() => setScreen('top')}
        />
      )}

      {screen === 'join' && (
        <JoinScreen
          onJoin={handleJoinRoom}
          onBack={() => setScreen('top')}
        />
      )}

      {screen === 'profile' && room.roomData && (
        <ProfileScreen
          mode={room.roomData.config.mode}
          usedAvatars={room.participants.map((p) => p.avatar)}
          onSubmit={handleProfileSubmit}
          onBack={handleBack}
        />
      )}

      {screen === 'waiting' && room.roomCode && localRole && (
        <WaitingScreen
          roomCode={room.roomCode}
          participants={room.participants}
          role={localRole}
          onCalculateResults={handleCalculateResults}
          onBack={handleBack}
        />
      )}

      {screen === 'diagnosis' && room.myParticipant && (
        <DiagnosisScreen
          participant={room.myParticipant}
          onComplete={handleDiagnosisComplete}
        />
      )}

      {screen === 'waiting-results' && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center animate-pulse-slow">
            <div className="text-6xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold mb-2">結果を待っています...</h2>
            <p className="text-gray-400">
              {room.allCompleted
                ? '幹事が結果を準備中です'
                : `${room.participants.filter((p) => p.completed).length} / ${room.participants.length} 人回答済み`}
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {screen === 'admin-review' && room.roomData && (
        <AdminResultScreen
          participants={room.participants}
          results={room.compatibilityResults}
          seatAssignments={room.seatAssignments}
          awards={room.awards}
          layout={room.roomData.config.layout}
          onTogglePair={handleTogglePair}
          onReveal={handleReveal}
          onReshuffle={handleReshuffle}
          revealed={room.revealed}
        />
      )}

      {screen === 'result' && room.roomData && (
        <ResultScreen
          participants={room.participants}
          results={localRole === 'admin' ? room.compatibilityResults : room.visibleResults}
          seatAssignments={room.seatAssignments}
          awards={room.awards}
          layout={room.roomData.config.layout}
          onReshuffle={localRole === 'admin' ? handleReshuffle : undefined}
          onShowMatrix={() => setScreen('matrix')}
          reshuffleCount={reshuffleCount}
        />
      )}

      {screen === 'matrix' && (
        <MatrixScreen
          participants={room.participants}
          results={localRole === 'admin' ? room.compatibilityResults : room.visibleResults}
          onBack={() => setScreen('result')}
        />
      )}
    </div>
  );
};
