import {inject, Injectable, signal} from '@angular/core';
import {Difficulty} from '../models/difficulty.model';
import {SudokuGenerationService} from './sudoku-generation-service';
import {ValidationService} from './validation-service';

@Injectable({
  providedIn: 'root'
})
export class SudokuGameService {

  private sudokuGenerationService = inject(SudokuGenerationService);
  private validationService = inject(ValidationService);

  selectedDifficulty = signal<Difficulty>(Difficulty.EASY);
  board = signal(this.sudokuGenerationService.getStartingGrid(this.selectedDifficulty()));
  score = signal(0);
  newGame = signal(false);
  mistakes = signal(0);

  currentGameBoard = signal<(number | null)[]>(this.board());
  selectedCellIndex = signal<number | null>(null);

  public changeDifficulty(difficulty: Difficulty) {
    this.selectedDifficulty.set(difficulty);
  }

  public selectCell(index: number): void {
    this.selectedCellIndex.set(index);
    console.log(`Selected case : ${index}`);
  }

}
