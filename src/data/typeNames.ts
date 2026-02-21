import type { Axis } from '../types';

// 相性タイプ名: [スコア帯][最高貢献軸]
export const COMPATIBILITY_TYPE_NAMES: Record<string, Record<Axis, string>> = {
  'S': { // 85-95
    E: '魂のパリピ同盟',
    C: '以心伝心のふたり',
    V: '運命の冒険パートナー',
    L: '恋のシンクロ率MAX',
    H: '爆笑ソウルメイト',
  },
  'A': { // 70-84
    E: 'ノリが合う飲み仲間',
    C: '会話キャッチボール名人',
    V: '趣味トーク無限ループ',
    L: 'じわじわ来る恋の予感',
    H: 'ツボが近い笑い仲間',
  },
  'B': { // 55-69
    E: '新しい扉を開く関係',
    C: '未知の言語を学ぶ感覚',
    V: 'お互い新世界への案内人',
    L: '押し引きのスリルあり',
    H: '笑いの化学反応待ち',
  },
  'C': { // 40-54
    E: 'テンションの異文化交流',
    C: '沈黙すら味になる関係',
    V: '真逆だからこそ面白い',
    L: '恋の迷路を楽しんで',
    H: '笑いの新大陸を発見せよ',
  },
};

export function getScoreTier(displayScore: number): string {
  if (displayScore >= 85) return 'S';
  if (displayScore >= 70) return 'A';
  if (displayScore >= 55) return 'B';
  return 'C';
}

// 個人タイプ名
interface PersonalType {
  condition: (v: number[]) => boolean;
  emoji: string;
  name: string;
}

const PERSONAL_TYPES: PersonalType[] = [
  {
    condition: (v) => v[0] >= 4 && v[2] >= 4,
    emoji: '🌪️',
    name: 'お祭りハリケーン',
  },
  {
    condition: (v) => v[0] <= 2 && v[4] >= 4,
    emoji: '🎯',
    name: 'スナイパー芸人',
  },
  {
    condition: (v) => v[1] >= 4 && v[3] >= 4,
    emoji: '🦁',
    name: '恋のライオン',
  },
  {
    condition: (v) => v[1] <= 2 && v[2] <= 2,
    emoji: '🐱',
    name: '癒しの守護猫',
  },
  {
    condition: (v) => v[0] >= 4 && v[4] >= 4,
    emoji: '🎉',
    name: 'パーティーモンスター',
  },
  {
    condition: (v) => v[0] >= 4 && v[3] >= 4,
    emoji: '💘',
    name: '情熱のストライカー',
  },
  {
    condition: (v) => v[2] >= 4 && v[4] >= 4,
    emoji: '🎪',
    name: 'アドベンチャーコメディアン',
  },
  {
    condition: (v) => v[0] <= 2 && v[2] <= 2,
    emoji: '🏠',
    name: 'おうちの守り神',
  },
  {
    condition: (v) => v[1] >= 4 && v[4] >= 4,
    emoji: '🎤',
    name: 'トークの魔術師',
  },
  {
    condition: (v) => v[3] <= 2 && v[1] <= 2,
    emoji: '🌙',
    name: 'ミステリアスな月',
  },
  {
    condition: (v) => v[0] >= 4 && v[1] >= 4,
    emoji: '☀️',
    name: '太陽系リーダー',
  },
  {
    condition: (v) => v[3] >= 4 && v[2] >= 4,
    emoji: '🚀',
    name: '恋のロケットランチャー',
  },
  {
    condition: (v) => v[0] <= 2 && v[3] <= 2,
    emoji: '🍵',
    name: 'まったり茶道マスター',
  },
  {
    condition: (v) => v[2] <= 2 && v[4] <= 2,
    emoji: '📚',
    name: '哲学者の休日',
  },
  {
    condition: (v) => v[1] <= 2 && v[4] >= 4,
    emoji: '🎭',
    name: 'ギャップの天才',
  },
  {
    condition: (v) => {
      const avg = v.reduce((a, b) => a + b, 0) / 5;
      return v.every((val) => Math.abs(val - avg) < 1);
    },
    emoji: '🌈',
    name: '万能カメレオン',
  },
];

export function getPersonalType(vector: number[]): { emoji: string; name: string } {
  for (const type of PERSONAL_TYPES) {
    if (type.condition(vector)) {
      return { emoji: type.emoji, name: type.name };
    }
  }
  return { emoji: '🌈', name: '万能カメレオン' };
}

// 会話スターターカード
export const CONVERSATION_CARDS: Record<Axis, { common: string[]; diff: string[] }> = {
  E: {
    common: [
      '2人とも行きたい「最高の金曜夜プラン」を3秒で答えて！',
      '理想の飲み会メンバー、有名人3人だけ呼べるなら？',
      '一緒に行くならフェス？それとも秘境温泉？',
    ],
    diff: [
      'お互いの「理想の金曜夜」をプレゼンしてみて！',
      'インドア派 vs アウトドア派、1分ディベート開始！',
      '相手の趣味を1つ体験するなら何にする？',
    ],
  },
  C: {
    common: [
      '最近あった「聞いてほしい話」を30秒で！',
      '2人で一番盛り上がれる話題は何だと思う？',
      'お互いの第一印象、正直に言い合おう！',
    ],
    diff: [
      'じゃあ今から1分間、いつもと逆の会話スタイルで話してみよう！',
      '「相手に聞いてみたかったこと」を3つ！',
      '2人の会話スタイルが合体したら最強説、検証！',
    ],
  },
  V: {
    common: [
      '次の3連休、予定なかったらどこ行く？3秒で！',
      '2人で旅行に行くならどの国？',
      '「これだけはやってみたいこと」を1つずつ！',
    ],
    diff: [
      '相手の価値観で1日過ごすなら何する？',
      'お互いの「譲れないこだわり」を発表！',
      'もし2人で24時間お出かけするなら、プランどう立てる？',
    ],
  },
  L: {
    common: [
      '理想のデートプラン、相手に聞かずに考えて同時に発表！',
      '「こんなサプライズされたらキュンとする」を告白！',
      '恋愛映画でどのシーンに一番グッとくる？',
    ],
    diff: [
      'もし2人でドラマに出るなら、どんなジャンル？',
      'お互いの恋愛の距離感を料理で例えると？',
      '「この人いいな」と思う瞬間を3秒で！',
    ],
  },
  H: {
    common: [
      '今まで一番笑った出来事は？',
      '一緒に見るなら何のお笑い番組？',
      '相手をお笑い芸人に例えると誰？',
    ],
    diff: [
      'お互いの笑いのツボを探る質問タイム！',
      '1分間で相手を笑わせるチャレンジ！',
      '「この人面白いな」と思った瞬間を再現！',
    ],
  },
};
