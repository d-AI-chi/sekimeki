import type { Axis, Participant, CompatibilityResult } from '../types';
import { COMPATIBILITY_TYPE_NAMES, getScoreTier } from '../data/typeNames';
import { QUESTIONS } from '../data/questions';

const WEIGHTS: Record<Axis, number> = {
  E: 0.25,
  C: 0.20,
  V: 0.20,
  L: 0.20,
  H: 0.15,
};

const SIMILAR_AXES: Axis[] = ['E', 'V', 'H'];
const COMPLEMENT_AXES: Axis[] = ['C', 'L'];

// ガウシアン補完関数のパラメータ
const MU = 1.5;
const SIGMA = 1.2;

/** 各ユーザーの5軸ベクトルを計算 */
export function computeVector(answers: number[]): number[] {
  const axes: Axis[] = ['E', 'C', 'V', 'L', 'H'];
  return axes.map((axis) => {
    const qs = QUESTIONS.filter((q) => q.axis === axis);
    const indices = qs.map((q) => q.id - 1);
    const vals = indices.map((i) => answers[i] ?? 3);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  });
}

/** 類似型スコア (E, V, H) */
function similarityScore(a: number, b: number): number {
  return 1 - Math.abs(a - b) / 4;
}

/** 補完型スコア (C, L) - ガウシアン */
function complementScore(a: number, b: number): number {
  const diff = Math.abs(a - b);
  return Math.exp(-((diff - MU) ** 2) / (2 * SIGMA ** 2));
}

/** ペアの軸別スコアを計算 */
function computeAxisScores(v1: number[], v2: number[]): Record<Axis, number> {
  const axes: Axis[] = ['E', 'C', 'V', 'L', 'H'];
  const result: Record<string, number> = {};

  axes.forEach((axis, i) => {
    if (SIMILAR_AXES.includes(axis)) {
      result[axis] = similarityScore(v1[i], v2[i]);
    } else if (COMPLEMENT_AXES.includes(axis)) {
      result[axis] = complementScore(v1[i], v2[i]);
    }
  });

  return result as Record<Axis, number>;
}

/** 総合スコア (raw: 0-1) */
function computeRawScore(axisScores: Record<Axis, number>): number {
  let sum = 0;
  for (const axis of Object.keys(WEIGHTS) as Axis[]) {
    sum += WEIGHTS[axis] * axisScores[axis];
  }
  return sum;
}

/** 表示スコア (40-95) */
function computeDisplayScore(rawScore: number): number {
  return Math.round(40 + rawScore * 55);
}

/** 最も貢献した軸を特定 */
function getTopAxis(axisScores: Record<Axis, number>): Axis {
  const axes: Axis[] = ['E', 'C', 'V', 'L', 'H'];
  let maxContrib = -1;
  let topAxis: Axis = 'E';

  for (const axis of axes) {
    const contrib = WEIGHTS[axis] * axisScores[axis];
    if (contrib > maxContrib) {
      maxContrib = contrib;
      topAxis = axis;
    }
  }
  return topAxis;
}

/** ペアの相性タイプ名を取得 */
function getTypeName(displayScore: number, topAxis: Axis): string {
  const tier = getScoreTier(displayScore);
  return COMPATIBILITY_TYPE_NAMES[tier]?.[topAxis] ?? '未知の化学反応';
}

/** 全ペアの相性を計算 */
export function computeAllCompatibility(participants: Participant[]): CompatibilityResult[] {
  const results: CompatibilityResult[] = [];

  for (let i = 0; i < participants.length; i++) {
    for (let j = i + 1; j < participants.length; j++) {
      const p1 = participants[i];
      const p2 = participants[j];

      if (!p1.vector || !p2.vector) continue;

      const axisScores = computeAxisScores(p1.vector, p2.vector);
      const rawScore = computeRawScore(axisScores);
      const displayScore = computeDisplayScore(rawScore);
      const topAxis = getTopAxis(axisScores);
      const typeName = getTypeName(displayScore, topAxis);

      results.push({
        id1: p1.id,
        id2: p2.id,
        axisScores,
        rawScore,
        displayScore,
        typeName,
        topAxis,
      });
    }
  }

  return results;
}

/** 特定ペアの相性結果を取得 */
export function getCompatibility(
  results: CompatibilityResult[],
  id1: string,
  id2: string
): CompatibilityResult | undefined {
  return results.find(
    (r) => (r.id1 === id1 && r.id2 === id2) || (r.id1 === id2 && r.id2 === id1)
  );
}
