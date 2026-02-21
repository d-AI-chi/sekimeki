import React, { useState, useEffect, useCallback } from 'react';
import type { Participant } from '../types';
import { QUESTIONS } from '../data/questions';
import { AVATARS } from '../data/avatars';

interface Props {
  participant: Participant;
  currentIndex: number;
  totalParticipants: number;
  onComplete: (answers: number[]) => void;
}

// Shuffle questions (same order for display, but randomized per participant)
function shuffleQuestions(seed: string) {
  const indices = QUESTIONS.map((_, i) => i);
  // Simple deterministic shuffle based on participant id
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  for (let i = indices.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = Math.abs(hash) % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.map((i) => ({ ...QUESTIONS[i], originalIndex: i }));
}

const TIME_LIMIT = 9;

export const DiagnosisScreen: React.FC<Props> = ({
  participant,
  currentIndex,
  totalParticipants,
  onComplete,
}) => {
  const [showIntro, setShowIntro] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(0));
  const [currentValue, setCurrentValue] = useState(3);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffled = React.useMemo(
    () => shuffleQuestions(participant.id),
    [participant.id]
  );

  const avatarData = AVATARS.find((a) => a.id === participant.avatar);

  const advanceQuestion = useCallback(
    (value: number) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const newAnswers = [...answers];
      newAnswers[shuffled[questionIndex].originalIndex] = value;
      setAnswers(newAnswers);

      if (questionIndex < 9) {
        setTimeout(() => {
          setQuestionIndex((q) => q + 1);
          setCurrentValue(3);
          setTimeLeft(TIME_LIMIT);
          setIsAnimating(false);
        }, 300);
      } else {
        // Complete
        setTimeout(() => {
          onComplete(newAnswers);
        }, 300);
      }
    },
    [answers, questionIndex, shuffled, isAnimating, onComplete]
  );

  // Timer
  useEffect(() => {
    if (showIntro) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          advanceQuestion(3); // Default to middle value
          return TIME_LIMIT;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showIntro, questionIndex, advanceQuestion]);

  if (showIntro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-pop">
          <div className="text-6xl mb-4">{avatarData?.emoji}</div>
          <h2 className="text-3xl font-bold mb-2">{participant.name}の番！</h2>
          <p className="text-gray-400 mb-2">
            {currentIndex + 1} / {totalParticipants} 人目
          </p>
          <p className="text-sm text-gray-500 mb-8">
            10問の質問に答えてね（1問9秒）
          </p>
          <button
            onClick={() => setShowIntro(false)}
            className="py-4 px-12 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95"
          >
            スタート！
          </button>
          <p className="mt-6 text-xs text-gray-600">
            ※ 他の人に見られないように答えてね 👀
          </p>
        </div>
      </div>
    );
  }

  const question = shuffled[questionIndex];

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{avatarData?.emoji}</span>
          <span className="text-sm font-medium text-gray-400">{participant.name}</span>
        </div>
        <span className="text-sm text-gray-500">
          {questionIndex + 1} / 10
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-800 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
          style={{ width: `${((questionIndex + 1) / 10) * 100}%` }}
        />
      </div>

      {/* Timer */}
      <div className="flex justify-end mb-6">
        <div
          className={`text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${
            timeLeft <= 3
              ? 'bg-red-500/20 text-red-400 animate-pulse'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          {timeLeft}s
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          key={questionIndex}
          className={`animate-slide-in-right ${isAnimating ? 'opacity-50' : ''}`}
        >
          <h3 className="text-2xl font-bold text-center mb-12 leading-relaxed">
            {question.text}
          </h3>

          {/* Labels */}
          <div className="flex justify-between mb-4 px-2">
            <span className="text-xs text-gray-400 max-w-[120px] text-left">
              {question.leftLabel}
            </span>
            <span className="text-xs text-gray-400 max-w-[120px] text-right">
              {question.rightLabel}
            </span>
          </div>

          {/* Slider buttons */}
          <div className="flex gap-3 justify-center mb-8">
            {[1, 2, 3, 4, 5].map((val) => (
              <button
                key={val}
                onClick={() => setCurrentValue(val)}
                className={`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-200 ${
                  currentValue === val
                    ? 'bg-gradient-to-br from-primary to-pink-500 text-white scale-110 shadow-lg shadow-primary/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          {/* Confirm button */}
          <button
            onClick={() => advanceQuestion(currentValue)}
            disabled={isAnimating}
            className="w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50"
          >
            {questionIndex < 9 ? '次へ' : '回答完了！'}
          </button>
        </div>
      </div>
    </div>
  );
};
