import { Component, signal } from '@angular/core';
import { Grid } from '../components/grid/grid.component';
import { InfoBar } from '../components/user-interactions/info-bar/info-bar.component';
import { UserInteractions } from '../components/user-interactions/user-interactions.component';
import { Difficulty } from '../models/difficulty.model';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sudoku-game',
  imports: [CommonModule, Grid, UserInteractions, Button],
  templateUrl: './sudoku-game.html',
  styleUrl: './sudoku-game.scss',
})
export class SudokuGame2 {
  difficulties = Object.values(Difficulty);
  selectedDifficulty = signal<Difficulty>(Difficulty.EASY);
  score = signal(0);
  newGame = signal(false);
  mistakes = signal(0);

  selectDifficulty(difficulty: Difficulty) {
    this.selectedDifficulty.set(difficulty);
  }
}
