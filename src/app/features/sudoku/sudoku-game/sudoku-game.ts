import {Component, inject, signal} from '@angular/core';
import { Grid } from '../components/grid/grid.component';
import { InfoBar } from '../components/user-interactions/info-bar/info-bar.component';
import { UserInteractions } from '../components/user-interactions/user-interactions.component';
import { Difficulty } from '../models/difficulty.model';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {SudokuGameService} from '../services/sudoku-game-service';

@Component({
  selector: 'app-sudoku-game',
  imports: [CommonModule, Grid, UserInteractions, Button],
  templateUrl: './sudoku-game.html',
  styleUrl: './sudoku-game.scss',
})
export class SudokuGame {
  private gameService = inject(SudokuGameService);

  difficulties = Object.values(Difficulty);
  selectedDifficulty = this.gameService.selectedDifficulty;
  score = this.gameService.score;
  mistakes = this.gameService.mistakes;
  board = this.gameService.board;

  selectDifficulty(difficulty: Difficulty) {
    this.gameService.changeDifficulty(difficulty);
  }
}
