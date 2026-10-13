import {Component, inject, input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SudokuGenerationService} from '../../services/sudoku-generation-service';
import {Difficulty} from '../../models/difficulty.model';
import {SudokuGameService} from '../../services/sudoku-game-service';

@Component({
  selector: 'app-grid',
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class Grid {

  private sudokuGameService = inject(SudokuGameService);

  public gameDifficulty = input.required<Difficulty>();
  public board = input.required<(number | null)[]>();

  onCellClick(index: number, value: number | null): void {
    this.sudokuGameService.selectCell(index);
    console.log(`Case cliquée - Index: ${index}, Valeur actuelle: ${value}`);
  }


}
