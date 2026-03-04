// ==============================
// TYPE METIER
// ==============================
// On définit un "type" TypeScript appelé Game.
// Ce type décrit la structure exacte d’un objet jeu.
// Cela permet d’avoir un typage strict et d’éviter les erreurs.
export type Game = {
  id: number; // Identifiant unique du jeu
  title: string; // Titre du jeu
  genre: string; // Genre (RPG, Action, etc.)
  category: string; // Catégorie (Nouveautés, Classiques, etc.)
  year: number; // Année de sortie
  platform: string; // Plateforme(s) disponible(s)
  rating: number; // Note du jeu
  synopsis: string; // Description courte du jeu
  available: boolean; // Indique si le jeu est disponible
  image: string; // URL de l’image du jeu
};
