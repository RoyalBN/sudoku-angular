import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SudokuGame2 } from './features/sudoku/sudoku-game/sudoku-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sudoku-angular');
}
