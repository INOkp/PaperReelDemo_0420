import type { Paper } from "./types"

const conferences = [
  "CHI Conference on Human Factors in Computing Systems",
  "ACM Conference on Recommender Systems",
  "International Conference on Machine Learning",
  "Neural Information Processing Systems",
  "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
  "International Conference on Computer Vision",
  "Conference on Empirical Methods in Natural Language Processing",
]

const fields = ["Computer Science", "Artificial Intelligence", "Human-Computer Interaction", "Data Science", "Computer Vision", "Natural Language Processing"]

const topics = [
  {
    titleEn: "Deep Learning Approaches for Personalized Content Recommendation",
    titleJa: "パーソナライズされたコンテンツ推薦のための深層学習アプローチ",
    background:
      "オンラインプラットフォームにおいて、ユーザーの興味に合わせたコンテンツ推薦が重要な課題となっている。従来の協調フィルタリング手法では、スパースなデータや新規ユーザーへの対応が困難である。",
    objective:
      "本研究は、深層学習を活用してユーザーの潜在的な興味を効果的にモデル化し、推薦精度を向上させることを目的とする。",
    proposal:
      "我々は、ユーザーの行動履歴とコンテンツの特徴を統合した多層ニューラルネットワークモデルを提案し、注意機構による重要な特徴の抽出を実現した。",
    evaluation: "実験の結果、提案手法は既存手法と比較して推薦精度が15%向上し、ユーザーの満足度も有意に改善された。",
  },
  {
    titleEn: "Explainable AI for Medical Diagnosis Support Systems",
    titleJa: "医療診断支援システムのための説明可能なAI",
    background:
      "医療分野におけるAIの活用が進む中、診断結果の説明可能性が重要な課題となっている。ブラックボックス化したモデルでは医師の信頼を得ることが難しい。",
    objective: "本研究は、高精度な診断を維持しながら、判断根拠を明確に説明できるAIシステムの構築を目指す。",
    proposal:
      "我々は、注意機構とグラフニューラルネットワークを組み合わせた説明可能なモデルを開発し、診断に寄与した特徴を可視化する手法を提案した。",
    evaluation:
      "臨床医による評価では、提案システムの説明は従来手法より理解しやすく、診断支援ツールとしての有用性が確認された。",
  },
  {
    titleEn: "Multimodal Learning for Video Understanding and Summarization",
    titleJa: "動画理解と要約のためのマルチモーダル学習",
    background:
      "動画コンテンツの爆発的な増加により、効率的な動画理解と要約技術の需要が高まっている。視覚情報と音声情報を統合した処理が課題である。",
    objective:
      "本研究は、視覚・音声・テキストの複数のモダリティを統合し、動画の内容を正確に理解して要約する手法の開発を目的とする。",
    proposal:
      "トランスフォーマーベースのマルチモーダル融合モデルを提案し、各モダリティ間の相互作用を効果的に学習する仕組みを実装した。",
    evaluation:
      "複数のベンチマークデータセットで評価した結果、提案手法は既存手法を上回る要約品質を達成し、処理速度も実用的なレベルに到達した。",
  },
]

function generateRandomPaper(rank: number): Paper {
  const topic = topics[rank % topics.length]
  const conference = conferences[rank % conferences.length]
  const field = fields[rank % fields.length]
  const year = 2020 + (rank % 5)

  return {
    id: `paper-${rank}`,
    title: `${topic.titleEn} (Variant ${Math.floor(rank / topics.length) + 1})`,
    titleJa: `${topic.titleJa} (バリアント${Math.floor(rank / topics.length) + 1})`,
    authors: [`Author ${rank * 3 + 1}`, `Author ${rank * 3 + 2}`, `Author ${rank * 3 + 3}`],
    content: {
      background: topic.background,
      objective: topic.objective,
      proposal: topic.proposal,
      evaluation: topic.evaluation,
    },
    abstract: `This paper presents a comprehensive study on ${topic.titleEn.toLowerCase()}. We propose a novel approach that addresses the limitations of existing methods and demonstrates significant improvements in performance. Our experimental results on multiple benchmark datasets validate the effectiveness of the proposed method. The key contributions include: (1) a new architecture design, (2) improved training strategies, and (3) extensive empirical analysis. The findings of this research have important implications for both academic research and practical applications in the field.`,
    abstractJa: `${topic.titleJa}に関する包括的な研究。既存手法の限界を克服する新しいアプローチを提案し、性能の大幅な向上を実証。複数のベンチマークデータセットでの実験により、提案手法の有効性を検証した。主な貢献は、(1)新しいアーキテクチャ設計、(2)改善された学習戦略、(3)広範な実験的分析である。`,
    score: 0.95 - rank * 0.005,
    metadata: {
      field,
      venue: conference,
      year,
      doi: `10.1145/${100000 + rank}.${200000 + rank}`,
    },
  }
}

export function generateDummyPapers(): Paper[] {
  return Array.from({ length: 100 }, (_, i) => generateRandomPaper(i + 1))
}
