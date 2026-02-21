import type { SeatLayout, Participant, CompatibilityResult, SeatAssignment, Mode } from '../types';
import { getCompatibility } from './scoring';

/** 配置パターンごとの隣接重みを生成 */
function getAdjacencyWeights(
  layout: SeatLayout,
  totalSeats: number
): number[][] {
  const w: number[][] = Array.from({ length: totalSeats }, () =>
    Array(totalSeats).fill(0)
  );

  switch (layout) {
    case 'facing-long':
    case 'facing-short': {
      // 対面型: 上半分と下半分
      const half = Math.ceil(totalSeats / 2);
      for (let i = 0; i < half; i++) {
        for (let j = half; j < totalSeats; j++) {
          const mi = i;
          const fj = j - half;
          const diff = Math.abs(mi - fj);
          if (diff === 0) {
            w[i][j] = w[j][i] = 1.0; // 正面
          } else if (diff === 1) {
            w[i][j] = w[j][i] = 0.5; // 斜め前
          }
        }
        // 同列の横（同性側）
        if (i + 1 < half) {
          w[i][i + 1] = w[i + 1][i] = 0.3;
        }
      }
      for (let i = half; i < totalSeats - 1; i++) {
        w[i][i + 1] = w[i + 1][i] = 0.3;
      }
      break;
    }
    case 'round': {
      for (let i = 0; i < totalSeats; i++) {
        for (let j = i + 1; j < totalSeats; j++) {
          const dist = Math.min(
            Math.abs(i - j),
            totalSeats - Math.abs(i - j)
          );
          if (dist === 1) w[i][j] = w[j][i] = 1.0;
          else if (dist === 2) w[i][j] = w[j][i] = 0.4;
          else if (dist === Math.floor(totalSeats / 2))
            w[i][j] = w[j][i] = 0.3;
          else if (dist === 3) w[i][j] = w[j][i] = 0.1;
        }
      }
      break;
    }
    case 'counter': {
      for (let i = 0; i < totalSeats; i++) {
        for (let j = i + 1; j < totalSeats; j++) {
          const dist = Math.abs(i - j);
          if (dist === 1) w[i][j] = w[j][i] = 1.0;
          else if (dist === 2) w[i][j] = w[j][i] = 0.2;
        }
      }
      break;
    }
    case 'alternate': {
      // 交互型: 上下交互に座る
      for (let i = 0; i < totalSeats; i++) {
        for (let j = i + 1; j < totalSeats; j++) {
          const rowI = i < Math.ceil(totalSeats / 2) ? 0 : 1;
          const rowJ = j < Math.ceil(totalSeats / 2) ? 0 : 1;
          const posI = rowI === 0 ? i : i - Math.ceil(totalSeats / 2);
          const posJ = rowJ === 0 ? j : j - Math.ceil(totalSeats / 2);

          if (rowI !== rowJ) {
            const diff = Math.abs(posI - posJ);
            if (diff === 0) w[i][j] = w[j][i] = 1.0;
            else if (diff === 1) w[i][j] = w[j][i] = 0.5;
          } else {
            if (Math.abs(posI - posJ) === 1) w[i][j] = w[j][i] = 0.3;
          }
        }
      }
      break;
    }
    case 'l-shape': {
      // L字: 最初の半分が一列、残りがL字の別側
      for (let i = 0; i < totalSeats; i++) {
        for (let j = i + 1; j < totalSeats; j++) {
          const dist = Math.abs(i - j);
          if (dist === 1) w[i][j] = w[j][i] = 1.0;
          else if (dist === 2) w[i][j] = w[j][i] = 0.3;
        }
      }
      break;
    }
  }

  return w;
}

/** ペアの重み (異性ペア優先 in goukon mode) */
function pairWeight(
  p1: Participant,
  p2: Participant,
  adjacencyWeight: number,
  mode: Mode
): number {
  if (mode === 'free') return adjacencyWeight;
  const crossGender = p1.gender !== p2.gender;
  return adjacencyWeight * (crossGender ? 1.0 : 0.2);
}

/** 目的関数: 加重相性スコアの合計 */
function objective(
  assignment: number[],
  participants: Participant[],
  results: CompatibilityResult[],
  adjacency: number[][],
  mode: Mode
): number {
  let total = 0;
  for (let i = 0; i < participants.length; i++) {
    for (let j = i + 1; j < participants.length; j++) {
      const compat = getCompatibility(results, participants[i].id, participants[j].id);
      if (!compat) continue;
      const adjW = adjacency[assignment[i]][assignment[j]];
      const pw = pairWeight(participants[i], participants[j], adjW, mode);
      total += compat.rawScore * pw;
    }
  }
  return total;
}

/** 公平性スコア: 隣接異性ペアの最小相性 */
function fairnessScore(
  assignment: number[],
  participants: Participant[],
  results: CompatibilityResult[],
  adjacency: number[][],
  mode: Mode
): number {
  let minScore = Infinity;
  for (let i = 0; i < participants.length; i++) {
    for (let j = i + 1; j < participants.length; j++) {
      if (mode === 'goukon' && participants[i].gender === participants[j].gender) continue;
      if (adjacency[assignment[i]][assignment[j]] < 0.5) continue;
      const compat = getCompatibility(results, participants[i].id, participants[j].id);
      if (compat && compat.rawScore < minScore) {
        minScore = compat.rawScore;
      }
    }
  }
  return minScore === Infinity ? 0 : minScore;
}

/** 全順列を生成 */
function permutations(arr: number[]): number[][] {
  if (arr.length <= 1) return [arr];
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const perm of permutations(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

/** 全探索による最適化 (小人数) */
function bruteForceOptimize(
  participants: Participant[],
  results: CompatibilityResult[],
  adjacency: number[][],
  mode: Mode
): number[] {
  const n = participants.length;
  const indices = Array.from({ length: n }, (_, i) => i);
  const allPerms = permutations(indices);

  let bestScore = -Infinity;
  let bestFairness = -Infinity;
  let bestAssignment = indices;
  const threshold = 0.95;

  // Phase 1: 最適スコアを見つける
  let maxObjective = -Infinity;
  for (const perm of allPerms) {
    const score = objective(perm, participants, results, adjacency, mode);
    if (score > maxObjective) maxObjective = score;
  }

  // Phase 2: 95%以上のスコアを持つ解から最も公平なものを選択
  for (const perm of allPerms) {
    const score = objective(perm, participants, results, adjacency, mode);
    if (score >= maxObjective * threshold) {
      const fair = fairnessScore(perm, participants, results, adjacency, mode);
      if (fair > bestFairness || (fair === bestFairness && score > bestScore)) {
        bestFairness = fair;
        bestScore = score;
        bestAssignment = [...perm];
      }
    }
  }

  return bestAssignment;
}

/** 焼きなまし法 (大人数) */
function simulatedAnnealingOptimize(
  participants: Participant[],
  results: CompatibilityResult[],
  adjacency: number[][],
  mode: Mode
): number[] {
  const n = participants.length;
  let current = Array.from({ length: n }, (_, i) => i);

  // シャッフル
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [current[i], current[j]] = [current[j], current[i]];
  }

  let currentScore = objective(current, participants, results, adjacency, mode);
  let best = [...current];
  let bestScore = currentScore;

  const T0 = 100;
  const alpha = 0.995;
  const Tend = 0.01;
  const maxIter = 10000;

  for (let restart = 0; restart < 3; restart++) {
    let T = T0;
    let iter = 0;

    while (T > Tend && iter < maxIter) {
      // 近傍操作: 2名の席をランダム交換
      const i = Math.floor(Math.random() * n);
      let j = Math.floor(Math.random() * (n - 1));
      if (j >= i) j++;

      const next = [...current];
      [next[i], next[j]] = [next[j], next[i]];

      const nextScore = objective(next, participants, results, adjacency, mode);
      const delta = nextScore - currentScore;

      if (delta > 0 || Math.random() < Math.exp(delta / T)) {
        current = next;
        currentScore = nextScore;
        if (currentScore > bestScore) {
          best = [...current];
          bestScore = currentScore;
        }
      }

      T *= alpha;
      iter++;
    }
  }

  return best;
}

/** メイン: 最適な席順を計算 */
export function optimizeSeating(
  participants: Participant[],
  results: CompatibilityResult[],
  layout: SeatLayout,
  mode: Mode
): SeatAssignment[] {
  const n = participants.length;
  if (n <= 1) {
    return participants.map((p, i) => ({ participantId: p.id, seatIndex: i }));
  }

  const adjacency = getAdjacencyWeights(layout, n);

  const assignment =
    n <= 10
      ? bruteForceOptimize(participants, results, adjacency, mode)
      : simulatedAnnealingOptimize(participants, results, adjacency, mode);

  return participants.map((p, i) => ({
    participantId: p.id,
    seatIndex: assignment[i],
  }));
}

/** 席替え */
export function reshuffleSeating(
  participants: Participant[],
  results: CompatibilityResult[],
  layout: SeatLayout,
  mode: Mode,
  count: number,
  currentAssignments: SeatAssignment[]
): SeatAssignment[] {
  if (count <= 1) {
    return optimizeSeating(participants, results, layout, mode);
  }

  const n = participants.length;
  const adjacency = getAdjacencyWeights(layout, n);

  if (count === 2) {
    // 最適解から同性2名swap → 最良のswap
    let bestSwap = currentAssignments;
    let bestScore = -Infinity;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (mode === 'goukon' && participants[i].gender !== participants[j].gender) continue;
        const swapped = [...currentAssignments];
        const temp = swapped[i].seatIndex;
        swapped[i] = { ...swapped[i], seatIndex: swapped[j].seatIndex };
        swapped[j] = { ...swapped[j], seatIndex: temp };

        const assignment = swapped.map((s) => s.seatIndex);
        const score = objective(assignment, participants, results, adjacency, mode);
        if (score > bestScore) {
          bestScore = score;
          bestSwap = swapped;
        }
      }
    }
    return bestSwap;
  }

  if (count === 3) {
    // 2番目に良い解
    return optimizeSeating(participants, results, layout, mode);
  }

  // 4回目以降: ランダム要素50%
  const optimal = optimizeSeating(participants, results, layout, mode);
  for (let i = n - 1; i > 0; i--) {
    if (Math.random() < 0.5) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = optimal[i].seatIndex;
      optimal[i] = { ...optimal[i], seatIndex: optimal[j].seatIndex };
      optimal[j] = { ...optimal[j], seatIndex: temp };
    }
  }
  return optimal;
}
