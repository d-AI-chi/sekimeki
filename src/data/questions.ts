import type { Axis } from '../types';

export interface Question {
  id: number;
  axis: Axis;
  text: string;
  leftLabel: string;
  rightLabel: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    axis: 'E',
    text: '金曜の夜、理想の過ごし方は？',
    leftLabel: '少人数でゆったりバー',
    rightLabel: '大人数でワイワイ飲み会',
  },
  {
    id: 2,
    axis: 'E',
    text: '旅行先で盛り上がるのは？',
    leftLabel: '隠れ家カフェ巡り',
    rightLabel: '有名スポットで写真撮りまくり',
  },
  {
    id: 3,
    axis: 'C',
    text: '初対面の人との会話スタイルは？',
    leftLabel: '相手の話をじっくり聞く',
    rightLabel: '自分から話題をどんどん振る',
  },
  {
    id: 4,
    axis: 'C',
    text: '友達の悩み相談、あなたの対応は？',
    leftLabel: 'まず気持ちに寄り添う',
    rightLabel: '一緒に解決策を考える',
  },
  {
    id: 5,
    axis: 'V',
    text: '理想の休日は？',
    leftLabel: 'おうちでまったり',
    rightLabel: '外に出てアクティブに',
  },
  {
    id: 6,
    axis: 'V',
    text: '旅行のスタイルは？',
    leftLabel: '計画をしっかり立てる',
    rightLabel: 'ノープランで行き当たりばったり',
  },
  {
    id: 7,
    axis: 'L',
    text: '気になる人へのアプローチは？',
    leftLabel: 'じっくり友達から',
    rightLabel: 'すぐに距離を詰める',
  },
  {
    id: 8,
    axis: 'L',
    text: 'デートに誘うなら？',
    leftLabel: '自然な流れを待つ',
    rightLabel: 'ストレートに誘う',
  },
  {
    id: 9,
    axis: 'H',
    text: '笑いのツボに近いのは？',
    leftLabel: 'じわじわ来る知的なウィット',
    rightLabel: '勢いとテンションで爆笑',
  },
  {
    id: 10,
    axis: 'H',
    text: '飲み会での立ち位置は？',
    leftLabel: '絶妙なタイミングで一言',
    rightLabel: '場を仕切るMC役',
  },
];
