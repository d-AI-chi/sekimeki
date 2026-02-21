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
  vector?: number[]; // [E, C, V, L, H]
  personalType?: string;
  personalTypeEmoji?: string;
}

export interface CompatibilityResult {
  id1: string;
  id2: string;
  axisScores: Record<Axis, number>;
  rawScore: number;
  displayScore: number;
  typeName: string;
  topAxis: Axis;
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

export interface GameState {
  screen: Screen;
  mode: Mode;
  layout: SeatLayout;
  participants: Participant[];
  currentDiagnosisIndex: number;
  compatibilityResults: CompatibilityResult[];
  seatAssignments: SeatAssignment[];
  awards: Award[];
  reshuffleCount: number;
}

export type Screen =
  | 'top'
  | 'setup'
  | 'register'
  | 'diagnosis-intro'
  | 'diagnosis'
  | 'calculating'
  | 'result'
  | 'matrix';
