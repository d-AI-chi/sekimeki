import React from 'react';

interface Props {
  onStart: () => void;
}

export const TopScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffd93d'][i % 3],
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="animate-fade-in relative z-10">
        <div className="text-6xl mb-4">🍻</div>
        <h1 className="text-5xl font-black tracking-tight mb-2">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            SEKIMEKI
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 font-medium">
          「運命の席順、決めます」
        </p>

        <div className="space-y-4 w-full max-w-xs mx-auto">
          <button
            onClick={onStart}
            className="w-full py-4 px-8 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200 active:scale-95"
          >
            ルームをつくる
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          ※アプリ不要・登録不要
        </p>
        <p className="mt-2 text-xs text-gray-600">
          スマホを回して全員で診断 → 最適な席順を提案！
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};
