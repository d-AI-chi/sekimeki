import React, { useState, useEffect } from 'react';
import type { Participant, CompatibilityResult, SeatAssignment, Award, SeatLayout } from '../types';
import { AVATARS } from '../data/avatars';
import { CONVERSATION_CARDS } from '../data/typeNames';
import { getCompatibility } from '../logic/scoring';

interface Props {
  participants: Participant[];
  results: CompatibilityResult[];
  seatAssignments: SeatAssignment[];
  awards: Award[];
  layout: SeatLayout;
  onReshuffle: () => void;
  onShowMatrix: () => void;
  reshuffleCount: number;
}

type RevealPhase = 'countdown' | 'seats' | 'scores' | 'awards' | 'done';

export const ResultScreen: React.FC<Props> = ({
  participants,
  results,
  seatAssignments,
  awards,
  layout,
  onReshuffle,
  onShowMatrix,
  reshuffleCount,
}) => {
  const [phase, setPhase] = useState<RevealPhase>('countdown');
  const [countdown, setCountdown] = useState(3);
  const [revealedSeats, setRevealedSeats] = useState(0);
  const [revealedScores, setRevealedScores] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [selectedPair, setSelectedPair] = useState<string | null>(null);

  // Sort participants by seat index
  const sortedParticipants = [...participants].sort((a, b) => {
    const sa = seatAssignments.find((s) => s.participantId === a.id);
    const sb = seatAssignments.find((s) => s.participantId === b.id);
    return (sa?.seatIndex ?? 0) - (sb?.seatIndex ?? 0);
  });

  // Skip animation on reshuffle
  useEffect(() => {
    if (reshuffleCount > 1) {
      setPhase('done');
      setRevealedSeats(participants.length);
      setRevealedScores(10);
      return;
    }

    // Countdown phase
    if (phase === 'countdown') {
      const timer = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(timer);
            setPhase('seats');
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }

    // Seats reveal
    if (phase === 'seats') {
      const timer = setInterval(() => {
        setRevealedSeats((r) => {
          if (r >= participants.length) {
            clearInterval(timer);
            setTimeout(() => setPhase('scores'), 500);
            return r;
          }
          return r + 1;
        });
      }, 400);
      return () => clearInterval(timer);
    }

    // Scores reveal
    if (phase === 'scores') {
      const adjacentPairs = getAdjacentPairs();
      const timer = setInterval(() => {
        setRevealedScores((r) => {
          if (r >= adjacentPairs.length) {
            clearInterval(timer);
            setTimeout(() => setPhase('awards'), 500);
            return r;
          }
          return r + 1;
        });
      }, 800);
      return () => clearInterval(timer);
    }

    // Awards reveal
    if (phase === 'awards') {
      setTimeout(() => setPhase('done'), 2000);
    }
  }, [phase, participants.length, reshuffleCount]);

  function getAdjacentPairs() {
    const pairs: { p1: Participant; p2: Participant; result: CompatibilityResult }[] = [];
    for (let i = 0; i < sortedParticipants.length - 1; i++) {
      const p1 = sortedParticipants[i];
      const p2 = sortedParticipants[i + 1];
      const result = getCompatibility(results, p1.id, p2.id);
      if (result) pairs.push({ p1, p2, result });
    }
    return pairs;
  }

  const adjacentPairs = getAdjacentPairs();

  // Countdown screen
  if (phase === 'countdown') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div
            key={countdown}
            className="text-8xl font-black text-primary animate-pop"
          >
            {countdown}
          </div>
          <p className="text-gray-400 mt-4">運命の席順を発表...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8 pb-32">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black mb-2 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            席順発表！
          </span>
        </h2>
        <p className="text-gray-400 text-sm">🍻 この席順で乾杯！</p>
      </div>

      {/* Seat arrangement */}
      <div className="mb-8">
        <SeatArrangement
          participants={sortedParticipants}
          revealedCount={revealedSeats}
          layout={layout}
        />
      </div>

      {/* Adjacent pair scores */}
      {(phase === 'scores' || phase === 'awards' || phase === 'done') && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">隣り合うペアの相性</h3>
          <div className="space-y-3">
            {adjacentPairs.map((pair, idx) => {
              if (idx >= revealedScores && phase !== 'done') return null;
              const a1 = AVATARS.find((a) => a.id === pair.p1.avatar);
              const a2 = AVATARS.find((a) => a.id === pair.p2.avatar);
              const pairKey = `${pair.p1.id}-${pair.p2.id}`;

              return (
                <div
                  key={pairKey}
                  className="animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <button
                    onClick={() =>
                      setSelectedPair(selectedPair === pairKey ? null : pairKey)
                    }
                    className="w-full bg-gray-800/60 rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{a1?.emoji}</span>
                        <span className="text-sm font-medium">{pair.p1.name}</span>
                        <span className="text-gray-600">×</span>
                        <span className="text-sm font-medium">{pair.p2.name}</span>
                        <span className="text-2xl">{a2?.emoji}</span>
                      </div>
                      <div className="text-right">
                        <ScoreDisplay score={pair.result.displayScore} />
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-secondary font-medium">
                      {pair.result.typeName}
                    </div>
                  </button>

                  {/* Expanded: conversation cards */}
                  {selectedPair === pairKey && (
                    <div className="mt-2 space-y-2 animate-slide-up">
                      {getConversationCards(pair.result).map((card, ci) => (
                        <div
                          key={ci}
                          className="bg-gray-900/60 rounded-xl p-3 border border-gray-700/30"
                        >
                          <div className="text-xs text-accent mb-1">
                            {['💬 共通点探し', '🔍 違い発見', '💭 妄想系'][ci]}
                          </div>
                          <p className="text-sm">{card}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Awards */}
      {(phase === 'awards' || phase === 'done') && (
        <div className="mb-8 animate-fade-in">
          <h3 className="text-lg font-bold mb-4">称号発表！</h3>
          <div className="space-y-3">
            {awards.map((award, idx) => {
              const targets = award.targetIds
                .map((id) => participants.find((p) => p.id === id))
                .filter(Boolean);
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-accent/20 animate-pop"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{award.emoji}</span>
                    <div>
                      <div className="font-bold text-accent">{award.title}</div>
                      <div className="text-sm text-gray-300">{award.description}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {targets.map((t) => t!.name).join(' & ')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      {phase === 'done' && (
        <p className="text-center text-xs text-gray-600 mb-6">
          ※ あくまでお楽しみ診断です
        </p>
      )}

      {/* Action buttons */}
      {phase === 'done' && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent">
          <div className="flex gap-3 max-w-lg mx-auto">
            <button
              onClick={onReshuffle}
              className="flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95"
            >
              🔄 席替え
            </button>
            <button
              onClick={onShowMatrix}
              className="flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all active:scale-95"
            >
              📊 相性一覧
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Score display with color coding
function ScoreDisplay({ score }: { score: number }) {
  const color =
    score >= 85
      ? 'text-primary'
      : score >= 70
      ? 'text-accent'
      : score >= 55
      ? 'text-secondary'
      : 'text-gray-400';

  return (
    <span className={`text-2xl font-black ${color}`}>
      {score}
      <span className="text-sm font-normal text-gray-500">点</span>
    </span>
  );
}

// Get conversation cards for a pair
function getConversationCards(result: CompatibilityResult): string[] {
  const axes = Object.entries(result.axisScores);
  axes.sort((a, b) => b[1] - a[1]);
  const closestAxis = axes[0][0] as keyof typeof CONVERSATION_CARDS;
  const furthestAxis = axes[axes.length - 1][0] as keyof typeof CONVERSATION_CARDS;

  const cards: string[] = [];
  const commonCards = CONVERSATION_CARDS[closestAxis]?.common ?? [];
  const diffCards = CONVERSATION_CARDS[furthestAxis]?.diff ?? [];
  const loveCards = CONVERSATION_CARDS.L?.common ?? [];

  cards.push(commonCards[Math.floor(Math.random() * commonCards.length)] ?? '好きな食べ物は？');
  cards.push(diffCards[Math.floor(Math.random() * diffCards.length)] ?? 'お互いの趣味を紹介！');
  cards.push(loveCards[Math.floor(Math.random() * loveCards.length)] ?? 'もし2人でドラマに出るなら？');

  return cards;
}

// Seat arrangement visualization
function SeatArrangement({
  participants,
  revealedCount,
  layout,
}: {
  participants: Participant[];
  revealedCount: number;
  layout: SeatLayout;
}) {
  const half = Math.ceil(participants.length / 2);

  if (layout === 'facing-long' || layout === 'facing-short' || layout === 'alternate') {
    const topRow = participants.slice(0, half);
    const bottomRow = participants.slice(half);

    return (
      <div className="flex flex-col items-center gap-2">
        {/* Top row */}
        <div className="flex gap-3 justify-center">
          {topRow.map((p, idx) => (
            <SeatCard
              key={p.id}
              participant={p}
              revealed={idx < revealedCount}
              delay={idx * 0.2}
            />
          ))}
        </div>

        {/* Table */}
        <div className="w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full my-2" />

        {/* Bottom row */}
        <div className="flex gap-3 justify-center">
          {bottomRow.map((p, idx) => (
            <SeatCard
              key={p.id}
              participant={p}
              revealed={half + idx < revealedCount}
              delay={(half + idx) * 0.2}
            />
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'round') {
    const radius = 100;
    const centerX = 140;
    const centerY = 130;

    return (
      <div className="flex justify-center">
        <div className="relative" style={{ width: 280, height: 260 }}>
          {/* Table circle */}
          <div
            className="absolute rounded-full bg-amber-900/30 border-2 border-amber-800/40"
            style={{
              width: radius * 1.2,
              height: radius * 1.2,
              left: centerX - radius * 0.6,
              top: centerY - radius * 0.6,
            }}
          />
          {participants.map((p, idx) => {
            const angle = (2 * Math.PI * idx) / participants.length - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle) - 32;
            const y = centerY + radius * Math.sin(angle) - 28;
            return (
              <div key={p.id} className="absolute" style={{ left: x, top: y }}>
                <SeatCard
                  participant={p}
                  revealed={idx < revealedCount}
                  delay={idx * 0.2}
                  compact
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Counter/L-shape: single row
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2 justify-center flex-wrap">
        {participants.map((p, idx) => (
          <SeatCard
            key={p.id}
            participant={p}
            revealed={idx < revealedCount}
            delay={idx * 0.2}
          />
        ))}
      </div>
      <div className="w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full" />
    </div>
  );
}

function SeatCard({
  participant,
  revealed,
  delay,
  compact,
}: {
  participant: Participant;
  revealed: boolean;
  delay: number;
  compact?: boolean;
}) {
  const avatarData = AVATARS.find((a) => a.id === participant.avatar);

  if (!revealed) {
    return (
      <div
        className={`${
          compact ? 'w-14 h-14' : 'w-16 h-20'
        } bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center`}
      >
        <span className="text-gray-600 text-lg">?</span>
      </div>
    );
  }

  return (
    <div
      className={`${
        compact ? 'w-14 p-1.5' : 'w-16 p-2'
      } bg-gray-800/80 rounded-xl border border-gray-600/50 text-center animate-slot-spin`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={compact ? 'text-xl' : 'text-2xl'}>{avatarData?.emoji}</div>
      <div className={`${compact ? 'text-[10px]' : 'text-xs'} font-medium mt-1 truncate`}>
        {participant.name}
      </div>
    </div>
  );
}
