import React from 'react';
import type { Participant, Role } from '../types';
import { AVATARS } from '../data/avatars';

interface Props {
  roomCode: string;
  participants: Participant[];
  role: Role;
  onStartDiagnosis: () => void;
  onBack: () => void;
}

export const WaitingScreen: React.FC<Props> = ({
  roomCode,
  participants,
  role,
  onStartDiagnosis,
  onBack,
}) => {
  const canStart = participants.length >= 3;

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
      {role === 'admin' ? (
        <div>
          <button
            onClick={onStartDiagnosis}
            disabled={!canStart}
            className={`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${
              canStart
                ? 'bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canStart ? '🚀 診断スタート！' : `あと${3 - participants.length}人で開始できます`}
          </button>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 bg-gray-800/60 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm">幹事がスタートするまでお待ちください</span>
          </div>
        </div>
      )}
    </div>
  );
};
