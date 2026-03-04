import { Component, input } from "@angular/core";
import { Game } from "./game.model";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'game-card',
    templateUrl:'./game-card.template.html',
    imports:[NgOptimizedImage],
})
export class GameCard {
    // Input détermine une propriété configurable de notre composant
    game = input.required<Game>();
}