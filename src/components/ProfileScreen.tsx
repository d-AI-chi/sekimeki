import React, { useState } from 'react';
import type { Mode } from '../types';
import { AVATARS } from '../data/avatars';

interface Props {
  mode: Mode;
  usedAvatars: string[];
  onSubmit: (profile: { name: string; gender?: 'male' | 'female'; avatar: string }) => void;
  onBack: () => void;
}

export const ProfileScreen: React.FC<Props> = ({ mode, usedAvatars, onSubmit, onBack }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const availableAvatars = AVATARS.filter((a) => !usedAvatars.includes(a.id));
  const [selectedAvatar, setSelectedAvatar] = useState(availableAvatars[0]?.id ?? AVATARS[0].id);

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit({
      name: name.trim(),
      gender: mode === 'goukon' ? gender : undefined,
      avatar: selectedAvatar,
    });
  };

  return (
    <div className="min-h-screen px-6 py-8">
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
      >
        ← 戻る
      </button>

      <div className="animate-fade-in">
        <div className="text-4xl text-center mb-2">✨</div>
        <h2 className="text-2xl font-bold text-center mb-8">プロフィール登録</h2>

        <div className="bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">ニックネーム</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="最大8文字"
              maxLength={8}
              className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
              autoFocus
            />
          </div>

          {mode === 'goukon' && (
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">性別</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGender('male')}
                  className={`py-2 rounded-xl border-2 font-medium transition-all ${
                    gender === 'male'
                      ? 'border-blue-400 bg-blue-500/10 text-blue-300'
                      : 'border-gray-700 text-gray-400'
                  }`}
                >
                  ♂ 男性
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`py-2 rounded-xl border-2 font-medium transition-all ${
                    gender === 'female'
                      ? 'border-pink-400 bg-pink-500/10 text-pink-300'
                      : 'border-gray-700 text-gray-400'
                  }`}
                >
                  ♀ 女性
                </button>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">アイコン</label>
            <div className="grid grid-cols-8 gap-2">
              {AVATARS.map((a) => {
                const isUsed = usedAvatars.includes(a.id);
                return (
                  <button
                    key={a.id}
                    onClick={() => !isUsed && setSelectedAvatar(a.id)}
                    disabled={isUsed}
                    className={`text-2xl p-2 rounded-xl transition-all ${
                      isUsed
                        ? 'opacity-20 cursor-not-allowed'
                        : selectedAvatar === a.id
                        ? 'bg-accent/20 ring-2 ring-accent scale-110'
                        : 'hover:bg-gray-700/50'
                    }`}
                  >
                    {a.emoji}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            参加する！
          </button>
        </div>
      </div>
    </div>
  );
};
