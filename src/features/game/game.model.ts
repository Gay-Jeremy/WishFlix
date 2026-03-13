export type GameCategory =
  | 'Action RPG'
  | 'Action'
  | 'Strategie'
  | 'Aventure'
  | 'Independant'
  | 'Multijoueur';

export type Game = {
synopsis: any;
platform: any;
genre: any;
  id: number;
  title: string;
  year: number;
  platforms: string[];
  rating: number;
  category: GameCategory;
  description: string;
  available: boolean;
  hero: boolean;
  playtime: string;
  coverImage: string;
  backdropImage: string;
};
