import React, { useState, useRef, useEffect } from 'react';
import { checkRoomExists, verifyAdminPassword } from '../lib/firebase';

interface Props {
  onLogin: (roomCode: string) => void;
  onBack: () => void;
}

export const AdminLoginScreen: React.FC<Props> = ({ onLogin, onBack }) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const code = digits.join('');

  const handleLogin = async () => {
    const trimmedCode = code.trim().toUpperCase();
    if (trimmedCode.length !== 4) {
      setError('4文字のルームコードを入力してください');
      return;
    }
    if (!password.trim()) {
      setError('パスワードを入力してください');
      return;
    }

    setChecking(true);
    setError('');

    const exists = await checkRoomExists(trimmedCode);
    if (!exists) {
      setError('ルームが見つかりません');
      setChecking(false);
      return;
    }

    const valid = await verifyAdminPassword(trimmedCode, password.trim());
    setChecking(false);
    if (!valid) {
      setError('パスワードが正しくありません');
      return;
    }

    onLogin(trimmedCode);
  };

  const handleInput = (index: number, value: string) => {
    const char = value.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!char) return;

    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);
    setError('');

    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newDigits = [...digits];
      if (digits[index]) {
        newDigits[index] = '';
        setDigits(newDigits);
      } else if (index > 0) {
        newDigits[index - 1] = '';
        setDigits(newDigits);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'Enter') {
      handleLogin();
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
        <div className="text-4xl text-center mb-4">🔐</div>
        <h2 className="text-2xl font-bold text-center mb-8">管理者ログイン</h2>

        {/* Room code */}
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
                className="w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors uppercase"
              />
            ))}
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2 text-center">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            placeholder="管理者パスワード"
            className="w-full bg-gray-900/60 border-2 border-gray-600 rounded-xl px-4 py-4 text-white text-center placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={code.length !== 4 || !password.trim() || checking}
          className="w-full py-4 bg-gradient-to-r from-accent to-yellow-400 text-dark-200 font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {checking ? '確認中...' : 'ログイン'}
        </button>
      </div>
    </div>
  );
};
