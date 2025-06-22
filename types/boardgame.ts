export type BoardgameType = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  releaseYear: number;
  playTimeMin: number;
  bestStartPlayAtAge: number;
  rating: number;
  dificulty: number;
  boxSize: string;
  ratingCount: number;
  canPlayPersons: number[];
  bestPlayPersons: number[];
  cratedAt: Date;
};
