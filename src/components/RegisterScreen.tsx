import React, { useState } from 'react';
import type { Mode, Gender, Participant } from '../types';
import { AVATARS } from '../data/avatars';

interface Props {
  mode: Mode;
  participants: Participant[];
  onAddParticipant: (p: Participant) => void;
  onRemoveParticipant: (id: string) => void;
  onStartDiagnosis: () => void;
  onBack: () => void;
}

export const RegisterScreen: React.FC<Props> = ({
  mode,
  participants,
  onAddParticipant,
  onRemoveParticipant,
  onStartDiagnosis,
  onBack,
}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].id);

  const usedAvatars = participants.map((p) => p.avatar);
  const availableAvatars = AVATARS.filter((a) => !usedAvatars.includes(a.id));

  const handleAdd = () => {
    if (!name.trim()) return;
    if (name.length > 8) return;

    const avatarData = AVATARS.find((a) => a.id === selectedAvatar);
    onAddParticipant({
      id: `p_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name: name.trim(),
      gender: mode === 'goukon' ? gender : undefined,
      avatar: selectedAvatar,
      answers: [],
    });

    setName('');
    // 次の利用可能なアバターを自動選択
    const nextAvailable = availableAvatars.find((a) => a.id !== selectedAvatar);
    if (nextAvailable) setSelectedAvatar(nextAvailable.id);
  };

  const canStart = participants.length >= 3;

  return (
    <div className="min-h-screen px-6 py-8">
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
      >
        ← 戻る
      </button>

      <h2 className="text-2xl font-bold mb-2 animate-fade-in">メンバー登録</h2>
      <p className="text-sm text-gray-400 mb-6">
        参加者を追加してください（3〜10名）
      </p>

      {/* Current participants */}
      {participants.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {participants.map((p) => {
              const avatarData = AVATARS.find((a) => a.id === p.avatar);
              return (
                <div
                  key={p.id}
                  className="flex items-center gap-2 bg-gray-800/60 rounded-full px-3 py-2 animate-pop"
                >
                  <span className="text-xl">{avatarData?.emoji}</span>
                  <span className="text-sm font-medium">{p.name}</span>
                  {mode === 'goukon' && (
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        p.gender === 'male'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-pink-500/20 text-pink-300'
                      }`}
                    >
                      {p.gender === 'male' ? '♂' : '♀'}
                    </span>
                  )}
                  <button
                    onClick={() => onRemoveParticipant(p.id)}
                    className="text-gray-500 hover:text-red-400 ml-1 transition-colors"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-2">{participants.length}名登録済み</p>
        </div>
      )}

      {/* Add participant form */}
      {participants.length < 10 && (
        <div className="bg-gray-800/40 rounded-2xl p-5 mb-6 border border-gray-700/50">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">ニックネーム</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="最大8文字"
              maxLength={8}
              className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
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
            onClick={handleAdd}
            disabled={!name.trim()}
            className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            + メンバーを追加
          </button>
        </div>
      )}

      <button
        onClick={onStartDiagnosis}
        disabled={!canStart}
        className={`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${
          canStart
            ? 'bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        {canStart ? '診断スタート！' : `あと${3 - participants.length}人追加してね`}
      </button>
    </div>
  );
};
