import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, browserSessionPersistence, setPersistence } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
  push,
  remove,
  off,
} from 'firebase/database';
import type {
  Mode,
  SeatLayout,
  Participant,
  CompatibilityResult,
  SeatAssignment,
  Award,
  RoomState,
} from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// --- Auth ---

let currentUid: string | null = null;

export function initAuth(): Promise<string> {
  return new Promise((resolve, reject) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            currentUid = user.uid;
            resolve(user.uid);
          }
        });
        signInAnonymously(auth).catch(reject);
      })
      .catch(reject);
  });
}

export function getUid(): string {
  return currentUid ?? '';
}

// --- Room Code Generation ---

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // ambiguous chars removed
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// --- Room Operations ---

export async function createRoom(
  mode: Mode,
  layout: SeatLayout
): Promise<string> {
  const adminId = getUid();
  let roomCode = generateRoomCode();

  // Check for collision (unlikely but safe)
  let existing = await get(ref(db, `rooms/${roomCode}`));
  let attempts = 0;
  while (existing.exists() && attempts < 10) {
    roomCode = generateRoomCode();
    existing = await get(ref(db, `rooms/${roomCode}`));
    attempts++;
  }

  await set(ref(db, `rooms/${roomCode}/config`), {
    mode,
    layout,
    adminId,
    state: 'waiting' as RoomState,
    createdAt: Date.now(),
  });

  return roomCode;
}

export async function checkRoomExists(roomCode: string): Promise<boolean> {
  const snapshot = await get(ref(db, `rooms/${roomCode}/config`));
  return snapshot.exists();
}

export async function getRoomConfig(
  roomCode: string
): Promise<{ mode: Mode; layout: SeatLayout; adminId: string; state: RoomState } | null> {
  const snapshot = await get(ref(db, `rooms/${roomCode}/config`));
  return snapshot.exists() ? snapshot.val() : null;
}

export async function joinRoom(
  roomCode: string,
  participant: {
    name: string;
    gender?: string;
    avatar: string;
  }
): Promise<string> {
  const participantId = getUid();
  await set(ref(db, `rooms/${roomCode}/participants/${participantId}`), {
    name: participant.name,
    gender: participant.gender ?? null,
    avatar: participant.avatar,
    answers: null,
    completed: false,
  });
  return participantId;
}

export async function leaveRoom(roomCode: string): Promise<void> {
  const participantId = getUid();
  await remove(ref(db, `rooms/${roomCode}/participants/${participantId}`));
}

// --- State Transitions ---

export async function startDiagnosis(roomCode: string): Promise<void> {
  await update(ref(db, `rooms/${roomCode}/config`), {
    state: 'diagnosing',
  });
}

export async function submitAnswers(
  roomCode: string,
  answers: number[]
): Promise<void> {
  const participantId = getUid();
  await update(ref(db, `rooms/${roomCode}/participants/${participantId}`), {
    answers,
    completed: true,
  });
}

export async function publishResults(
  roomCode: string,
  compatibilityResults: CompatibilityResult[],
  seatAssignments: SeatAssignment[],
  awards: Award[],
  participantTypes: Record<string, { vector: number[]; personalType: string; personalTypeEmoji: string }>
): Promise<void> {
  // Store compatibility results with visibility flag
  const compatibility: Record<string, any> = {};
  for (const r of compatibilityResults) {
    const key = [r.id1, r.id2].sort().join('_');
    compatibility[key] = { ...r, visible: true };
  }

  // Store seat assignments
  const seats: Record<string, any> = {};
  seatAssignments.forEach((s, i) => {
    seats[String(i)] = s;
  });

  // Store awards
  const awardData: Record<string, any> = {};
  awards.forEach((a, i) => {
    awardData[String(i)] = a;
  });

  // Store everything in results path (admin has write access here)
  await set(ref(db, `rooms/${roomCode}/results`), {
    compatibility,
    seatAssignments: seats,
    awards: awardData,
    revealed: false,
    participantTypes,
  });
  await update(ref(db, `rooms/${roomCode}/config`), {
    state: 'admin-review',
  });
}

export async function togglePairVisibility(
  roomCode: string,
  pairKey: string,
  visible: boolean
): Promise<void> {
  await update(ref(db, `rooms/${roomCode}/results/compatibility/${pairKey}`), {
    visible,
  });
}

export async function revealResults(roomCode: string): Promise<void> {
  await update(ref(db, `rooms/${roomCode}/results`), {
    revealed: true,
  });
  await update(ref(db, `rooms/${roomCode}/config`), {
    state: 'results',
  });
}

export async function updateSeatAssignments(
  roomCode: string,
  seatAssignments: SeatAssignment[],
  awards: Award[]
): Promise<void> {
  const seats: Record<string, any> = {};
  seatAssignments.forEach((s, i) => {
    seats[String(i)] = s;
  });
  const awardData: Record<string, any> = {};
  awards.forEach((a, i) => {
    awardData[String(i)] = a;
  });
  await update(ref(db, `rooms/${roomCode}/results`), {
    seatAssignments: seats,
    awards: awardData,
  });
}

// --- Real-time Listeners ---

export function onRoomChange(
  roomCode: string,
  callback: (data: any) => void
): () => void {
  const roomRef = ref(db, `rooms/${roomCode}`);
  onValue(roomRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(roomRef);
}

export function onParticipantsChange(
  roomCode: string,
  callback: (participants: Record<string, any>) => void
): () => void {
  const partRef = ref(db, `rooms/${roomCode}/participants`);
  onValue(partRef, (snapshot) => {
    callback(snapshot.val() ?? {});
  });
  return () => off(partRef);
}

export function onConfigChange(
  roomCode: string,
  callback: (config: any) => void
): () => void {
  const configRef = ref(db, `rooms/${roomCode}/config`);
  onValue(configRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(configRef);
}

export function onResultsChange(
  roomCode: string,
  callback: (results: any) => void
): () => void {
  const resultsRef = ref(db, `rooms/${roomCode}/results`);
  onValue(resultsRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(resultsRef);
}
