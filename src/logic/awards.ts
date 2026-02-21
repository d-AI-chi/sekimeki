import type { Participant, CompatibilityResult, SeatAssignment, Award } from '../types';
import { getCompatibility } from './scoring';

export function computeAwards(
  participants: Participant[],
  results: CompatibilityResult[],
  seatAssignments: SeatAssignment[]
): Award[] {
  const awards: Award[] = [];

  // 隣接ペアを特定 (seatIndex差が1以内のペア)
  const adjacentPairs: [Participant, Participant, CompatibilityResult][] = [];
  for (let i = 0; i < participants.length; i++) {
    for (let j = i + 1; j < participants.length; j++) {
      const si = seatAssignments.find((s) => s.participantId === participants[i].id);
      const sj = seatAssignments.find((s) => s.participantId === participants[j].id);
      if (!si || !sj) continue;
      const diff = Math.abs(si.seatIndex - sj.seatIndex);
      if (diff <= 1 || diff === participants.length - 1) {
        const compat = getCompatibility(results, participants[i].id, participants[j].id);
        if (compat) {
          adjacentPairs.push([participants[i], participants[j], compat]);
        }
      }
    }
  }

  // 全ペアからも探す
  const allPairs = results.map((r) => ({
    p1: participants.find((p) => p.id === r.id1)!,
    p2: participants.find((p) => p.id === r.id2)!,
    result: r,
  }));

  // 👑 ベストマッチ賞: 隣接異性ペアで最高スコア
  if (adjacentPairs.length > 0) {
    const best = adjacentPairs.reduce((a, b) => (a[2].displayScore >= b[2].displayScore ? a : b));
    awards.push({
      emoji: '👑',
      title: 'ベストマッチ賞',
      description: `最高の席順相性！${best[2].displayScore}点`,
      targetIds: [best[0].id, best[1].id],
    });
  }

  // 🔥 運命の出会い賞: スコア90以上のペア
  const destiny = allPairs.find((p) => p.result.displayScore >= 90);
  if (destiny) {
    awards.push({
      emoji: '🔥',
      title: '運命の出会い賞',
      description: `相性${destiny.result.displayScore}点の奇跡！`,
      targetIds: [destiny.p1.id, destiny.p2.id],
    });
  }

  // 🌀 カオスコンビ賞: 5軸の差分散が最も大きいペア
  let maxVariance = -1;
  let chaosPair: typeof allPairs[0] | null = null;
  for (const pair of allPairs) {
    const scores = Object.values(pair.result.axisScores);
    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
    const variance = scores.reduce((a, b) => a + (b - mean) ** 2, 0) / scores.length;
    if (variance > maxVariance) {
      maxVariance = variance;
      chaosPair = pair;
    }
  }
  if (chaosPair) {
    awards.push({
      emoji: '🌀',
      title: 'カオスコンビ賞',
      description: '予測不能な化学反応！',
      targetIds: [chaosPair.p1.id, chaosPair.p2.id],
    });
  }

  // 🎭 ミステリアス賞: 補完型軸(C,L)で最高スコアのペア
  let maxComplement = -1;
  let mysteryPair: typeof allPairs[0] | null = null;
  for (const pair of allPairs) {
    const complementScore = pair.result.axisScores.C + pair.result.axisScores.L;
    if (complementScore > maxComplement) {
      maxComplement = complementScore;
      mysteryPair = pair;
    }
  }
  if (mysteryPair) {
    awards.push({
      emoji: '🎭',
      title: 'ミステリアス賞',
      description: '真逆だからこそ惹かれる！',
      targetIds: [mysteryPair.p1.id, mysteryPair.p2.id],
    });
  }

  // 🎤 パーティーMC賞: E軸+C軸が最高の個人
  let maxEC = -1;
  let mcPerson: Participant | null = null;
  for (const p of participants) {
    if (!p.vector) continue;
    const ec = p.vector[0] + p.vector[1];
    if (ec > maxEC) {
      maxEC = ec;
      mcPerson = p;
    }
  }
  if (mcPerson) {
    awards.push({
      emoji: '🎤',
      title: 'パーティーMC賞',
      description: '場を盛り上げるMVP！',
      targetIds: [mcPerson.id],
    });
  }

  // 🐱 癒しオーラ賞: E軸が最も低い個人
  let minE = Infinity;
  let healPerson: Participant | null = null;
  for (const p of participants) {
    if (!p.vector) continue;
    if (p.vector[0] < minE) {
      minE = p.vector[0];
      healPerson = p;
    }
  }
  if (healPerson && healPerson.id !== mcPerson?.id) {
    awards.push({
      emoji: '🐱',
      title: '癒しオーラ賞',
      description: 'ほっとする存在感！',
      targetIds: [healPerson.id],
    });
  }

  // 🔄 万能プレイヤー賞: 全異性との平均スコアが最高の個人
  let maxAvg = -1;
  let versatilePerson: Participant | null = null;
  for (const p of participants) {
    const pairResults = results.filter((r) => r.id1 === p.id || r.id2 === p.id);
    if (pairResults.length === 0) continue;
    const avg = pairResults.reduce((a, b) => a + b.displayScore, 0) / pairResults.length;
    if (avg > maxAvg) {
      maxAvg = avg;
      versatilePerson = p;
    }
  }
  if (versatilePerson) {
    awards.push({
      emoji: '🔄',
      title: '万能プレイヤー賞',
      description: '誰とでも仲良くなれる！',
      targetIds: [versatilePerson.id],
    });
  }

  return awards;
}
