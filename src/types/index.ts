export interface Player {
    id: number;
    name: string;
    score: number;
    rank: number;
    incrementScore: () => void;
  }