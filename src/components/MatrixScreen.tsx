import React, { useState } from 'react';
import type { Participant, CompatibilityResult } from '../types';
import { AVATARS } from '../data/avatars';
import { AXIS_LABELS } from '../types';
import { getCompatibility } from '../logic/scoring';

interface Props {
  participants: Participant[];
  results: CompatibilityResult[];
  onBack: () => void;
}

export const MatrixScreen: React.FC<Props> = ({ participants, results, onBack }) => {
  const [selectedPair, setSelectedPair] = useState<{
    p1: Participant;
    p2: Participant;
    result: CompatibilityResult;
  } | null>(null);

  const getColor = (score: number) => {
    if (score >= 85) return 'bg-primary/80';
    if (score >= 70) return 'bg-accent/60';
    if (score >= 55) return 'bg-secondary/50';
    return 'bg-gray-600/40';
  };

  const getTextColor = (score: number) => {
    if (score >= 85) return 'text-white font-bold';
    if (score >= 70) return 'text-white';
    if (score >= 55) return 'text-white';
    return 'text-gray-300';
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
      >
        ← 席順に戻る
      </button>

      <h2 className="text-2xl font-bold mb-6 animate-fade-in">
        <span className="bg-gradient-to-r from-secondary to-teal-400 bg-clip-text text-transparent">
          相性マトリクス
        </span>
      </h2>

      {/* Matrix */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-12" />
              {participants.map((p) => {
                const avatar = AVATARS.find((a) => a.id === p.avatar);
                return (
                  <th key={p.id} className="p-1 text-center">
                    <div className="text-lg">{avatar?.emoji}</div>
                    <div className="text-[10px] text-gray-400 truncate max-w-[48px]">
                      {p.name}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {participants.map((p1, i) => {
              const a1 = AVATARS.find((a) => a.id === p1.avatar);
              return (
                <tr key={p1.id}>
                  <td className="p-1 text-center">
                    <div className="text-lg">{a1?.emoji}</div>
                    <div className="text-[10px] text-gray-400 truncate max-w-[48px]">
                      {p1.name}
                    </div>
                  </td>
                  {participants.map((p2, j) => {
                    if (i === j) {
                      return (
                        <td key={p2.id} className="p-1">
                          <div className="w-12 h-12 bg-gray-800/30 rounded-lg flex items-center justify-center">
                            <span className="text-gray-700">-</span>
                          </div>
                        </td>
                      );
                    }
                    const result = getCompatibility(results, p1.id, p2.id);
                    if (!result) return <td key={p2.id} />;

                    return (
                      <td key={p2.id} className="p-1">
                        <button
                          onClick={() =>
                            setSelectedPair({ p1, p2, result })
                          }
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${getColor(
                            result.displayScore
                          )}`}
                        >
                          <span
                            className={`text-sm ${getTextColor(result.displayScore)}`}
                          >
                            {result.displayScore}
                          </span>
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-8 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-primary/80" /> 85+
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-accent/60" /> 70-84
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-secondary/50" /> 55-69
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-gray-600/40" /> 40-54
        </div>
      </div>

      {/* Selected pair detail */}
      {selectedPair && (
        <PairDetail
          p1={selectedPair.p1}
          p2={selectedPair.p2}
          result={selectedPair.result}
          onClose={() => setSelectedPair(null)}
        />
      )}

      {/* Individual types */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">みんなのタイプ</h3>
        <div className="grid grid-cols-2 gap-3">
          {participants.map((p) => {
            const avatar = AVATARS.find((a) => a.id === p.avatar);
            return (
              <div
                key={p.id}
                className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{avatar?.emoji}</span>
                  <span className="font-medium text-sm">{p.name}</span>
                </div>
                <div className="text-lg">
                  {p.personalTypeEmoji} {p.personalType}
                </div>
                {p.vector && (
                  <div className="mt-2 space-y-1">
                    {(['E', 'C', 'V', 'L', 'H'] as const).map((axis, idx) => (
                      <div key={axis} className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500 w-8">
                          {axis}
                        </span>
                        <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all"
                            style={{
                              width: `${((p.vector![idx] - 1) / 4) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-500">
                          {p.vector![idx].toFixed(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function PairDetail({
  p1,
  p2,
  result,
  onClose,
}: {
  p1: Participant;
  p2: Participant;
  result: CompatibilityResult;
  onClose: () => void;
}) {
  const a1 = AVATARS.find((a) => a.id === p1.avatar);
  const a2 = AVATARS.find((a) => a.id === p2.avatar);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6" onClick={onClose}>
      <div
        className="bg-dark-200 rounded-2xl p-6 w-full max-w-sm border border-gray-700 animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-center">
            <div className="text-3xl">{a1?.emoji}</div>
            <div className="text-sm font-medium">{p1.name}</div>
          </div>
          <div className="text-2xl text-primary">×</div>
          <div className="text-center">
            <div className="text-3xl">{a2?.emoji}</div>
            <div className="text-sm font-medium">{p2.name}</div>
          </div>
        </div>

        <div className="text-center mb-4">
          <span className="text-4xl font-black text-primary">{result.displayScore}</span>
          <span className="text-lg text-gray-400">点</span>
        </div>
        <div className="text-center text-secondary font-medium mb-6">
          {result.typeName}
        </div>

        {/* Radar-like axis comparison */}
        <div className="space-y-3 mb-6">
          {(['E', 'C', 'V', 'L', 'H'] as const).map((axis) => {
            const score = result.axisScores[axis];
            const pct = score * 100;
            return (
              <div key={axis}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">{AXIS_LABELS[axis]}</span>
                  <span className="text-gray-300">{Math.round(pct)}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
