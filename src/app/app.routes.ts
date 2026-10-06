import { Routes } from '@angular/router';
import { SudokuGame2 } from './features/sudoku/sudoku-game/sudoku-game';

export const routes: Routes = [
  { path: '', component: SudokuGame2 },
  { path: '**', redirectTo: '' },
];
