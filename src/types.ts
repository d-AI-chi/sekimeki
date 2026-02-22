export type Mode = 'goukon' | 'free';

export type SeatLayout = 'facing-long' | 'facing-short' | 'alternate' | 'round' | 'l-shape' | 'counter';

export type Gender = 'male' | 'female';

export type Axis = 'E' | 'C' | 'V' | 'L' | 'H';

export const AXIS_LABELS: Record<Axis, string> = {
  E: 'テンション波長',
  C: '会話スタイル',
  V: '価値観ベクトル',
  L: '恋愛スタンス',
  H: 'ユーモア相性',
};

export interface Participant {
  id: string;
  name: string;
  gender?: Gender;
  avatar: string;
  answers: number[];
  vector?: number[];
  personalType?: string;
  personalTypeEmoji?: string;
  completed?: boolean;
}

export interface CompatibilityResult {
  id1: string;
  id2: string;
  axisScores: Record<Axis, number>;
  rawScore: number;
  displayScore: number;
  typeName: string;
  topAxis: Axis;
  visible?: boolean;
}

export interface Award {
  emoji: string;
  title: string;
  description: string;
  targetIds: string[];
}

export interface SeatAssignment {
  participantId: string;
  seatIndex: number;
}

export type RoomState = 'waiting' | 'diagnosing' | 'admin-review' | 'results';

export type Role = 'admin' | 'participant';

export type Screen =
  | 'loading'
  | 'top'
  | 'setup'
  | 'join'
  | 'profile'
  | 'waiting'
  | 'diagnosis'
  | 'waiting-results'
  | 'admin-review'
  | 'result'
  | 'matrix';

export interface RoomData {
  config: {
    mode: Mode;
    layout: SeatLayout;
    adminId: string;
    state: RoomState;
    createdAt: number;
  };
  participants: Record<string, {
    name: string;
    gender: string | null;
    avatar: string;
    answers: number[] | null;
    completed: boolean;
    vector?: number[];
    personalType?: string;
    personalTypeEmoji?: string;
  }>;
  results?: {
    compatibility: Record<string, CompatibilityResult & { visible: boolean }>;
    seatAssignments: Record<string, SeatAssignment>;
    awards: Record<string, Award>;
    revealed: boolean;
    participantTypes?: Record<string, { vector: number[]; personalType: string; personalTypeEmoji: string }>;
  };
}
