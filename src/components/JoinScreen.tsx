import React, { useState } from 'react';
import { checkRoomExists } from '../lib/firebase';

interface Props {
  onJoin: (roomCode: string) => void;
  onBack: () => void;
}

export const JoinScreen: React.FC<Props> = ({ onJoin, onBack }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);

  const handleJoin = async () => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed.length !== 4) {
      setError('4文字のコードを入力してください');
      return;
    }
    setChecking(true);
    setError('');
    const exists = await checkRoomExists(trimmed);
    setChecking(false);
    if (!exists) {
      setError('ルームが見つかりません');
      return;
    }
    onJoin(trimmed);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
      >
        ← 戻る
      </button>

      <div className="w-full max-w-xs animate-fade-in">
        <div className="text-4xl text-center mb-4">🔑</div>
        <h2 className="text-2xl font-bold text-center mb-8">ルームに参加</h2>

        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">ルームコード</label>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase().slice(0, 4));
              setError('');
            }}
            placeholder="例：A3K7"
            maxLength={4}
            className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-4 text-white text-center text-3xl font-mono tracking-[0.5em] placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase"
            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
            autoFocus
          />
          {error && (
            <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
          )}
        </div>

        <button
          onClick={handleJoin}
          disabled={code.length !== 4 || checking}
          className="w-full py-4 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {checking ? '確認中...' : '参加する'}
        </button>
      </div>
    </div>
  );
};
