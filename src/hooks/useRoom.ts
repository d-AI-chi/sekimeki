import { useState, useEffect, useCallback } from 'react';
import type { RoomData, Participant, CompatibilityResult, SeatAssignment, Award, Role } from '../types';
import {
  initAuth,
  getUid,
  onRoomChange,
} from '../lib/firebase';

interface UseRoomReturn {
  uid: string;
  roomCode: string | null;
  roomData: RoomData | null;
  role: Role | null;
  participants: Participant[];
  myParticipant: Participant | null;
  compatibilityResults: CompatibilityResult[];
  visibleResults: CompatibilityResult[];
  seatAssignments: SeatAssignment[];
  awards: Award[];
  revealed: boolean;
  allCompleted: boolean;
  isReady: boolean;
  setRoomCode: (code: string) => void;
}

export function useRoom(): UseRoomReturn {
  const [uid, setUid] = useState('');
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [roomData, setRoomData] = useState<RoomData | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Initialize auth
  useEffect(() => {
    initAuth().then((id) => {
      setUid(id);
      setIsReady(true);
    });
  }, []);

  // Subscribe to room changes
  useEffect(() => {
    if (!roomCode) {
      setRoomData(null);
      return;
    }
    const unsub = onRoomChange(roomCode, (data) => {
      setRoomData(data);
    });
    return unsub;
  }, [roomCode]);

  // Derived state
  const role: Role | null =
    roomData && uid ? (roomData.config.adminId === uid ? 'admin' : 'participant') : null;

  // Merge participant types from results (stored there because admin can't write to participant paths)
  const participantTypes: Record<string, any> = roomData?.results?.participantTypes ?? {};

  const participants: Participant[] = roomData?.participants
    ? Object.entries(roomData.participants).map(([id, p]) => ({
        id,
        name: p.name,
        gender: p.gender as any,
        avatar: p.avatar,
        answers: p.answers ?? [],
        completed: p.completed,
        vector: participantTypes[id]?.vector ?? p.vector,
        personalType: participantTypes[id]?.personalType ?? p.personalType,
        personalTypeEmoji: participantTypes[id]?.personalTypeEmoji ?? p.personalTypeEmoji,
      }))
    : [];

  const myParticipant = participants.find((p) => p.id === uid) ?? null;

  const compatibilityResults: CompatibilityResult[] = roomData?.results?.compatibility
    ? Object.values(roomData.results.compatibility)
    : [];

  const visibleResults = compatibilityResults.filter((r) => r.visible !== false);

  const seatAssignments: SeatAssignment[] = roomData?.results?.seatAssignments
    ? Object.values(roomData.results.seatAssignments)
    : [];

  const awards: Award[] = roomData?.results?.awards
    ? Object.values(roomData.results.awards)
    : [];

  const revealed = roomData?.results?.revealed ?? false;

  const allCompleted = participants.length > 0 && participants.every((p) => p.completed);

  return {
    uid,
    roomCode,
    roomData,
    role,
    participants,
    myParticipant,
    compatibilityResults,
    visibleResults,
    seatAssignments,
    awards,
    revealed,
    allCompleted,
    isReady,
    setRoomCode,
  };
}
