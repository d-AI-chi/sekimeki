import React from 'react';
import type { Participant, Role } from '../types';
import { AVATARS } from '../data/avatars';

interface Props {
  roomCode: string;
  participants: Participant[];
  role: Role;
  onCalculateResults: () => void;
  onBack: () => void;
}

export const WaitingScreen: React.FC<Props> = ({
  roomCode,
  participants,
  role,
  onCalculateResults,
  onBack,
}) => {
  const completedCount = participants.filter((p) => p.completed).length;
  const allCompleted = participants.length >= 2 && participants.every((p) => p.completed);

  return (
    <div className="min-h-screen px-6 py-8">
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
      >
        ← 退出
      </button>

      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">ルーム</h2>

        {/* Room code display */}
        <div className="inline-block bg-gray-800/80 rounded-2xl px-8 py-4 border border-gray-600/50 mb-4">
          <p className="text-xs text-gray-400 mb-1">ルームコード</p>
          <p className="text-4xl font-mono font-black tracking-[0.3em] text-accent">
            {roomCode}
          </p>
        </div>

        <p className="text-sm text-gray-400">
          このコードを共有して参加してもらおう
        </p>
      </div>

      {/* Participants */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          参加者 ({participants.length}名)
          {participants.length > 0 && (
            <span className="ml-2 text-secondary">
              {completedCount}/{participants.length} 回答済み
            </span>
          )}
        </h3>
        <div className="space-y-2">
          {participants.map((p, idx) => {
            const avatarData = AVATARS.find((a) => a.id === p.avatar);
            return (
              <div
                key={p.id}
                className="flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-2xl">{avatarData?.emoji}</span>
                <span className="font-medium flex-1">{p.name}</span>
                {p.gender && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      p.gender === 'male'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-pink-500/20 text-pink-300'
                    }`}
                  >
                    {p.gender === 'male' ? '♂' : '♀'}
                  </span>
                )}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  p.completed
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-gray-600/30 text-gray-500'
                }`}>
                  {p.completed ? '✓ 完了' : '回答中...'}
                </span>
              </div>
            );
          })}
        </div>

        {participants.length === 0 && (
          <div className="text-center text-gray-500 py-8 animate-pulse-slow">
            参加者を待っています...
          </div>
        )}
      </div>

      {/* Admin controls */}
      {role === 'admin' && (
        <div>
          <button
            onClick={onCalculateResults}
            disabled={!allCompleted}
            className={`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${
              allCompleted
                ? 'bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {allCompleted
              ? '🎯 結果を計算する'
              : participants.length < 2
                ? 'あと2人以上の参加が必要です'
                : `${completedCount}/${participants.length} 人回答済み（全員完了で計算可能）`}
          </button>
        </div>
      )}
    </div>
  );
};
