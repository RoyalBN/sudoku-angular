import { Routes } from '@angular/router';
import { SudokuGame } from './features/sudoku/sudoku-game/sudoku-game';

export const routes: Routes = [
  { path: '', component: SudokuGame },
  { path: '**', redirectTo: '' },
];
