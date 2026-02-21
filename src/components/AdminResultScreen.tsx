import React, { useState } from 'react';
import type { Participant, CompatibilityResult, SeatAssignment, Award, SeatLayout } from '../types';
import { AVATARS } from '../data/avatars';
import { getCompatibility } from '../logic/scoring';

interface Props {
  participants: Participant[];
  results: CompatibilityResult[];
  seatAssignments: SeatAssignment[];
  awards: Award[];
  layout: SeatLayout;
  onTogglePair: (pairKey: string, visible: boolean) => void;
  onReveal: () => void;
  onReshuffle: () => void;
  revealed: boolean;
}

export const AdminResultScreen: React.FC<Props> = ({
  participants,
  results,
  seatAssignments,
  awards,
  layout,
  onTogglePair,
  onReveal,
  onReshuffle,
  revealed,
}) => {
  // Sort results by display score descending
  const sortedResults = [...results].sort((a, b) => b.displayScore - a.displayScore);

  return (
    <div className="min-h-screen px-6 py-8 pb-32">
      <div className="text-center mb-8 animate-fade-in">
        <div className="text-4xl mb-2">👑</div>
        <h2 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            管理者画面
          </span>
        </h2>
        <p className="text-sm text-gray-400">
          {revealed
            ? '結果は公開済みです'
            : '表示するペアを選択して結果を公開してください'}
        </p>
      </div>

      {/* Pair visibility controls */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          ペア表示設定
        </h3>
        <div className="space-y-2">
          {sortedResults.map((result) => {
            const p1 = participants.find((p) => p.id === result.id1);
            const p2 = participants.find((p) => p.id === result.id2);
            if (!p1 || !p2) return null;

            const a1 = AVATARS.find((a) => a.id === p1.avatar);
            const a2 = AVATARS.find((a) => a.id === p2.avatar);
            const pairKey = [result.id1, result.id2].sort().join('_');
            const isVisible = result.visible !== false;

            return (
              <div
                key={pairKey}
                className={`rounded-xl p-4 border transition-all ${
                  isVisible
                    ? 'bg-gray-800/60 border-gray-600/50'
                    : 'bg-gray-900/40 border-gray-800/50 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Toggle */}
                  <button
                    onClick={() => onTogglePair(pairKey, !isVisible)}
                    className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                      isVisible ? 'bg-secondary' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        isVisible ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>

                  {/* Pair info */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-lg">{a1?.emoji}</span>
                    <span className="text-sm truncate">{p1.name}</span>
                    <span className="text-gray-600 text-xs">×</span>
                    <span className="text-sm truncate">{p2.name}</span>
                    <span className="text-lg">{a2?.emoji}</span>
                  </div>

                  {/* Score */}
                  <div className="flex-shrink-0 text-right">
                    <span
                      className={`text-lg font-bold ${
                        result.displayScore >= 85
                          ? 'text-primary'
                          : result.displayScore >= 70
                          ? 'text-accent'
                          : result.displayScore >= 55
                          ? 'text-secondary'
                          : 'text-gray-400'
                      }`}
                    >
                      {result.displayScore}
                    </span>
                    <span className="text-xs text-gray-500">点</span>
                  </div>
                </div>
                <div className="mt-1 ml-15 text-xs text-gray-500 pl-[60px]">
                  {result.typeName}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Awards preview */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          称号プレビュー
        </h3>
        <div className="space-y-2">
          {awards.map((award, idx) => {
            const targets = award.targetIds
              .map((id) => participants.find((p) => p.id === id))
              .filter(Boolean);
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-2 border border-gray-700/30"
              >
                <span className="text-xl">{award.emoji}</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-accent">{award.title}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    {targets.map((t) => t!.name).join(' & ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent">
        <div className="flex gap-3 max-w-lg mx-auto">
          {!revealed ? (
            <button
              onClick={onReveal}
              className="flex-1 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95 animate-glow"
            >
              🎉 結果を公開する
            </button>
          ) : (
            <>
              <button
                onClick={onReshuffle}
                className="flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95"
              >
                🔄 席替え
              </button>
              <button
                onClick={() => {}}
                className="flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl transition-all"
              >
                ✅ 公開済み
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
