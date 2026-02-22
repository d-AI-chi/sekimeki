import React, { useState, useRef, useEffect } from 'react';
import { checkRoomExists } from '../lib/firebase';

interface Props {
  onJoin: (roomCode: string) => void;
  onBack: () => void;
}

export const JoinScreen: React.FC<Props> = ({ onJoin, onBack }) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const code = digits.join('');

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

  const handleInput = (index: number, value: string) => {
    // Take only the last character typed (handles IME double input)
    const char = value.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!char) return;

    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);
    setError('');

    // Auto-advance to next input
    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 4 filled
    if (index === 3 && newDigits.every((d) => d !== '')) {
      setTimeout(() => {
        const fullCode = newDigits.join('');
        if (fullCode.length === 4) {
          // Trigger join
          inputRefs.current[3]?.blur();
        }
      }, 100);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newDigits = [...digits];
      if (digits[index]) {
        // Clear current
        newDigits[index] = '';
        setDigits(newDigits);
      } else if (index > 0) {
        // Move back and clear previous
        newDigits[index - 1] = '';
        setDigits(newDigits);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'Enter') {
      handleJoin();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    if (pasted.length > 0) {
      const newDigits = ['', '', '', ''];
      for (let i = 0; i < Math.min(pasted.length, 4); i++) {
        newDigits[i] = pasted[i];
      }
      setDigits(newDigits);
      setError('');
      const focusIndex = Math.min(pasted.length, 3);
      inputRefs.current[focusIndex]?.focus();
    }
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
          <label className="block text-sm text-gray-400 mb-3 text-center">ルームコード</label>
          <div className="flex gap-3 justify-center">
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
                value={digit}
                onChange={(e) => handleInput(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={i === 0 ? handlePaste : undefined}
                className="w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase"
              />
            ))}
          </div>
          {error && (
            <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
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
