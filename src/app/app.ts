// On importe plusieurs éléments depuis le cœur d’Angular.
import {
  ChangeDetectionStrategy, // Permet de définir la stratégie de détection des changements
  Component, // Permet de déclarer une classe comme composant Angular
  computed, // Permet de créer une valeur dérivée (Signal calculé)
  signal, // Permet de créer un état réactif (Signal)
} from '@angular/core';
import { GameCard } from '../game/game-card.component';
import { Game } from '../game/game.model';

// ==============================
// DECORATEUR COMPONENT
// ==============================

// Le décorateur @Component transforme la classe en composant Angular.
@Component({
  selector: 'app-root',
  // Nom de la balise HTML que l’on pourra utiliser dans index.html
  // Exemple : <app-root></app-root>

  changeDetection: ChangeDetectionStrategy.OnPush,
  // OnPush améliore les performances.
  // Angular ne mettra à jour le composant que si :
  // - Un input change
  // - Un signal change
  // - Un événement se produit

  imports: [GameCard],
  // Permet d’utiliser GameCard directement dans le template

  templateUrl: './app.template.html',
  // Fichier HTML associé au composant

  styleUrls: ['./app.css'],
  // Fichier CSS associé au composant
})

// ==============================
// CLASSE DU COMPOSANT
// ==============================
export class App {
  // Variable protégée contenant le nom de l’application.
  // readonly = ne peut pas être modifiée après initialisation.
  protected readonly nomApplication = 'WishFlix';

  // Signal booléen (true / false).
  // signal() crée un état réactif.
  // false = par défaut on affiche tous les jeux.
  protected readonly onlyAvailable = signal<boolean>(false);

  // ==============================
  // SIGNAL PRINCIPAL
  // ==============================

  // games est un Signal contenant un tableau de Game.
  // C’est la "source de vérité" locale de notre application.
  protected readonly games = signal<Game[]>([
    // Chaque objet dans ce tableau respecte la structure du type Game.

    {
      id: 1,
      title: 'Cyber Nexus 2077',
      genre: 'RPG',
      category: 'Nouveautes',
      year: 2023,
      platform: 'PC, PS5, Xbox',
      rating: 4.5,
      synopsis: 'Un RPG futuriste dans un monde cyberpunk.',
      available: true, // Disponible
      image: 'https://via.assets.so/game.png?id=1&q=95&w=300&h=450&fit=cover',
    },

    {
      id: 2,
      title: 'Stellar Odyssey',
      genre: 'Aventure',
      category: 'Nouveautes',
      year: 2023,
      platform: 'PC, PS5',
      rating: 4.8,
      synopsis: 'Une aventure spatiale epique.',
      available: true,
      image: 'https://via.assets.so/game.png?id=2&q=95&w=300&h=450&fit=cover',
    },

    {
      id: 3,
      title: 'Shadow Legends',
      genre: 'Action',
      category: 'Populaires',
      year: 2022,
      platform: 'PC, Xbox',
      rating: 4.2,
      synopsis: 'Combattez les forces des tenebres.',
      available: false, // Non disponible
      image: 'https://via.assets.so/game.png?id=4&q=95&w=300&h=450&fit=cover',
    },

    {
      id: 4,
      title: 'Racing Thunder',
      genre: 'Course',
      category: 'Populaires',
      year: 2022,
      platform: 'PS5, Xbox',
      rating: 4.0,
      synopsis: 'Des courses a couper le souffle.',
      available: true,
      image: 'https://via.assets.so/game.png?id=1&q=95&w=300&h=450&fit=cover',
    },

    {
      id: 5,
      title: 'Fantasy Kingdom',
      genre: 'RPG',
      category: 'Classiques',
      year: 2020,
      platform: 'PC',
      rating: 4.7,
      synopsis: 'Un monde fantastique vous attend.',
      available: true,
      image: 'https://via.assets.so/game.png?id=3&q=95&w=300&h=450&fit=cover',
    },

    {
      id: 6,
      title: 'Zombie Survival',
      genre: 'Horreur',
      category: 'Classiques',
      year: 2021,
      platform: 'PC, PS5, Xbox',
      rating: 3.9,
      synopsis: 'Survivez a l apocalypse zombie.',
      available: false,
      image: 'https://via.assets.so/game.png?id=1&q=95&w=300&h=450&fit=cover',
    },
  ]);

  // ==============================
  // COMPUTED SIGNAL
  // ==============================

  // computed() crée une valeur calculée automatiquement
  // à partir d’autres signaux (ici onlyAvailable et games).
  protected readonly visibleGames = computed(() => {
    // Si onlyAvailable est false
    // on retourne tous les jeux
    if (!this.onlyAvailable()) {
      return this.games();
    }

    // Sinon on filtre le tableau
    // .filter() garde uniquement les jeux disponibles
    return this.games().filter((game) => game.available);
  });

  // ==============================
  // METHODE DE FILTRAGE
  // ==============================

  // Cette méthode est appelée quand on clique sur un bouton par exemple.
  protected filterByAvailibility() {
    // update() permet de modifier la valeur d’un signal
    // Ici on inverse la valeur actuelle :
    // true devient false
    // false devient true
    this.onlyAvailable.update((available) => !available);
  }

  protected filterAvailibilityLabel = computed(() => {
    if (!this.onlyAvailable()) {
      return 'Voir les jeux disponibles';
    }
    return 'Voir tous les jeux';
  });
}
