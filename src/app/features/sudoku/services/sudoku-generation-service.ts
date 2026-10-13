import { Injectable } from '@angular/core';
import {Difficulty} from '../models/difficulty.model';

@Injectable({
  providedIn: 'root'
})
export class SudokuGenerationService {

  // Grille Facile : ~20 empty cases
  private readonly easyGrid: (number | null)[] = [
    1, null, 3, 4, 5, null, 7, 8, null,
    4, 5, 6, null, 8, null, 1, 2, null,
    null, 8, 9, null, 2, 3, null, 5, 6,
    null, 3, 1, 5, null, 4, 8, null, 7,
    5, 6, null, 8, 9, null, 2, 3, null,
    null, 9, null, 2, 3, 1, 5, null, 4,
    3, 1, 2, 6, null, 5, null, 7, 8,
    6, null, 5, 9, null, 8, 3, null, 2,
    null, 7, null, 3, null, 2, 6, null, 5
  ];


  // Grille Moyenne : ~40 empty cases
  private readonly mediumGrid: (number | null)[] = [
    1, 2, null, null, 5, 6, null, null, 9,
    4, null, 6, 7, null, 9, 1, null, 3,
    7, null, null, 1, 2, null, null, 5, 6,
    null, 3, 1, null, 6, 4, null, 9, 7,
    5, null, 4, 8, null, 7, 2, null, 1,
    8, 9, null, 2, 3, null, 5, 6, null,
    3, 1, null, null, 4, 5, null, 7, 8,
    6, null, 5, 9, null, 8, 3, null, 2,
    null, 7, 8, null, 1, null, 6, 4, null
  ];


  // Grille Difficile : ~55 empty cases
  private readonly hardGrid: (number | null)[] = [
    null, 2, null, 4, null, null, null, 8, 9,
    4, null, null, null, 8, null, 1, null, null,
    7, null, 9, null, null, 3, null, 5, null,
    2, null, null, 5, null, null, null, 9, 7,
    null, 6, null, null, 9, null, null, 3, null,
    8, 9, null, null, null, 1, null, null, 4,
    null, 1, null, 6, null, null, 9, null, 8,
    null, null, 5, null, 7, null, null, null, 2,
    9, 7, null, null, null, 2, null, 4, null
  ];


  public getStartingGrid(difficulty: Difficulty) : (number | null)[] {
    switch (difficulty) {
      case Difficulty.EASY:
        return this.easyGrid;
      case Difficulty.MEDIUM:
        return this.mediumGrid;
      case Difficulty.HARD:
        return this.hardGrid;
      default:
        return this.easyGrid;
    }
  }

}
