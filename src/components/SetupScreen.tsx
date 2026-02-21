import React, { useState } from 'react';
import type { Mode, SeatLayout } from '../types';

interface Props {
  onComplete: (mode: Mode, layout: SeatLayout) => void;
  onBack: () => void;
}

const LAYOUTS: { id: SeatLayout; name: string; icon: string; desc: string }[] = [
  { id: 'facing-long', name: '対面ロング', icon: '═══', desc: '向かい合う長テーブル' },
  { id: 'facing-short', name: '対面ショート', icon: '═══', desc: '向かい合う短テーブル' },
  { id: 'round', name: '円卓', icon: '◯', desc: '丸テーブル' },
  { id: 'counter', name: 'カウンター', icon: '───', desc: '横並びカウンター席' },
  { id: 'alternate', name: '交互型', icon: '⊞', desc: '男女交互に配置' },
  { id: 'l-shape', name: 'L字・コの字', icon: '⌐', desc: 'L字型テーブル' },
];

export const SetupScreen: React.FC<Props> = ({ onComplete, onBack }) => {
  const [mode, setMode] = useState<Mode>('goukon');
  const [layout, setLayout] = useState<SeatLayout>('facing-long');

  return (
    <div className="min-h-screen px-6 py-8">
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
      >
        ← 戻る
      </button>

      <h2 className="text-2xl font-bold mb-8 animate-fade-in">ルーム設定</h2>

      {/* Mode selection */}
      <div className="mb-8 animate-slide-up">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          モード
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setMode('goukon')}
            className={`p-4 rounded-xl border-2 transition-all ${
              mode === 'goukon'
                ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                : 'border-gray-700 hover:border-gray-500'
            }`}
          >
            <div className="text-2xl mb-1">💕</div>
            <div className="font-bold text-sm">合コンモード</div>
            <div className="text-xs text-gray-400 mt-1">男女別で席配置</div>
          </button>
          <button
            onClick={() => setMode('free')}
            className={`p-4 rounded-xl border-2 transition-all ${
              mode === 'free'
                ? 'border-secondary bg-secondary/10 shadow-lg shadow-secondary/20'
                : 'border-gray-700 hover:border-gray-500'
            }`}
          >
            <div className="text-2xl mb-1">🎉</div>
            <div className="font-bold text-sm">フリーモード</div>
            <div className="text-xs text-gray-400 mt-1">性別不問で席配置</div>
          </button>
        </div>
      </div>

      {/* Layout selection */}
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          席の配置
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {LAYOUTS.map((l) => (
            <button
              key={l.id}
              onClick={() => setLayout(l.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                layout === l.id
                  ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
            >
              <div className="text-lg font-mono mb-1 text-gray-300">{l.icon}</div>
              <div className="font-bold text-sm">{l.name}</div>
              <div className="text-xs text-gray-400 mt-1">{l.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onComplete(mode, layout)}
        className="w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
      >
        次へ：メンバー登録
      </button>
    </div>
  );
};
