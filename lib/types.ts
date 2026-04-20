export interface Paper {
  id: string
  title: string
  titleJa: string
  authors: string[]
  content: {
    background: string
    objective: string
    proposal: string
    evaluation: string
  }
  contentJa: {
    background: string
    objective: string
    proposal: string
    evaluation: string
  }
  abstract: string
  abstractJa: string
  score: number
  metadata: {
    field: string
    venue: string
    year: number
    doi: string
  }
}

export interface EvaluationLog {
  paperId: string
  rank: number
  evaluation: "good" | "bad" | "normal"
  dwellTime: number // in milliseconds
  timestamp: string
}

export interface UserProfile {
  name: string
  field: string
  age: string
  interests: string[]
}
