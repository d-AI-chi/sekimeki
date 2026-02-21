import React, { useState, useCallback } from 'react';
import type { GameState, Mode, SeatLayout, Participant, Screen } from './types';
import { computeVector, computeAllCompatibility } from './logic/scoring';
import { optimizeSeating, reshuffleSeating } from './logic/optimization';
import { computeAwards } from './logic/awards';
import { getPersonalType } from './data/typeNames';
import { TopScreen } from './components/TopScreen';
import { SetupScreen } from './components/SetupScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { DiagnosisScreen } from './components/DiagnosisScreen';
import { ResultScreen } from './components/ResultScreen';
import { MatrixScreen } from './components/MatrixScreen';

const initialState: GameState = {
  screen: 'top',
  mode: 'goukon',
  layout: 'facing-long',
  participants: [],
  currentDiagnosisIndex: 0,
  compatibilityResults: [],
  seatAssignments: [],
  awards: [],
  reshuffleCount: 0,
};

export const App: React.FC = () => {
  const [state, setState] = useState<GameState>(initialState);

  const setScreen = (screen: Screen) => setState((s) => ({ ...s, screen }));

  const handleSetup = useCallback((mode: Mode, layout: SeatLayout) => {
    setState((s) => ({ ...s, mode, layout, screen: 'register' }));
  }, []);

  const handleAddParticipant = useCallback((p: Participant) => {
    setState((s) => ({
      ...s,
      participants: [...s.participants, p],
    }));
  }, []);

  const handleRemoveParticipant = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      participants: s.participants.filter((p) => p.id !== id),
    }));
  }, []);

  const handleStartDiagnosis = useCallback(() => {
    setState((s) => ({
      ...s,
      screen: 'diagnosis-intro',
      currentDiagnosisIndex: 0,
    }));
  }, []);

  const handleDiagnosisComplete = useCallback((answers: number[]) => {
    setState((s) => {
      const vector = computeVector(answers);
      const personalType = getPersonalType(vector);

      const updatedParticipants = [...s.participants];
      updatedParticipants[s.currentDiagnosisIndex] = {
        ...updatedParticipants[s.currentDiagnosisIndex],
        answers,
        vector,
        personalType: personalType.name,
        personalTypeEmoji: personalType.emoji,
      };

      const nextIndex = s.currentDiagnosisIndex + 1;

      if (nextIndex >= updatedParticipants.length) {
        // All done - calculate results
        const results = computeAllCompatibility(updatedParticipants);
        const seats = optimizeSeating(updatedParticipants, results, s.layout, s.mode);
        const awards = computeAwards(updatedParticipants, results, seats);

        return {
          ...s,
          participants: updatedParticipants,
          compatibilityResults: results,
          seatAssignments: seats,
          awards,
          reshuffleCount: 1,
          screen: 'calculating',
          currentDiagnosisIndex: nextIndex,
        };
      }

      return {
        ...s,
        participants: updatedParticipants,
        currentDiagnosisIndex: nextIndex,
        screen: 'diagnosis',
      };
    });
  }, []);

  const handleReshuffle = useCallback(() => {
    setState((s) => {
      const newCount = s.reshuffleCount + 1;
      const newSeats = reshuffleSeating(
        s.participants,
        s.compatibilityResults,
        s.layout,
        s.mode,
        newCount,
        s.seatAssignments
      );
      const awards = computeAwards(s.participants, s.compatibilityResults, newSeats);

      return {
        ...s,
        seatAssignments: newSeats,
        awards,
        reshuffleCount: newCount,
      };
    });
  }, []);

  // Calculating screen with transition
  React.useEffect(() => {
    if (state.screen === 'calculating') {
      const timer = setTimeout(() => setScreen('result'), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.screen]);

  return (
    <div className="max-w-lg mx-auto">
      {state.screen === 'top' && (
        <TopScreen onStart={() => setScreen('setup')} />
      )}

      {state.screen === 'setup' && (
        <SetupScreen
          onComplete={handleSetup}
          onBack={() => setScreen('top')}
        />
      )}

      {state.screen === 'register' && (
        <RegisterScreen
          mode={state.mode}
          participants={state.participants}
          onAddParticipant={handleAddParticipant}
          onRemoveParticipant={handleRemoveParticipant}
          onStartDiagnosis={handleStartDiagnosis}
          onBack={() => setScreen('setup')}
        />
      )}

      {state.screen === 'diagnosis-intro' && (
        <DiagnosisScreen
          participant={state.participants[0]}
          currentIndex={0}
          totalParticipants={state.participants.length}
          onComplete={handleDiagnosisComplete}
        />
      )}

      {state.screen === 'diagnosis' && (
        <DiagnosisScreen
          key={state.currentDiagnosisIndex}
          participant={state.participants[state.currentDiagnosisIndex]}
          currentIndex={state.currentDiagnosisIndex}
          totalParticipants={state.participants.length}
          onComplete={handleDiagnosisComplete}
        />
      )}

      {state.screen === 'calculating' && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center animate-pulse-slow">
            <div className="text-6xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold mb-2">運命を計算中...</h2>
            <p className="text-gray-400">最適な席順を導き出しています</p>
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

      {state.screen === 'result' && (
        <ResultScreen
          participants={state.participants}
          results={state.compatibilityResults}
          seatAssignments={state.seatAssignments}
          awards={state.awards}
          layout={state.layout}
          onReshuffle={handleReshuffle}
          onShowMatrix={() => setScreen('matrix')}
          reshuffleCount={state.reshuffleCount}
        />
      )}

      {state.screen === 'matrix' && (
        <MatrixScreen
          participants={state.participants}
          results={state.compatibilityResults}
          onBack={() => setScreen('result')}
        />
      )}
    </div>
  );
};
