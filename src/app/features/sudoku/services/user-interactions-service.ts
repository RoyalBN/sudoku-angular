import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionsService {

  private _selectedNumber = signal<number | null>(null);
  private _board = signal<number[]>(Array(81).fill(0));
  private _cellState = signal<'ok' | 'ko' | 'idle'[]>(Array(81).fill('idle'));
  private _mistakes = signal(0);

  readonly selectedNumber = this._selectedNumber.asReadonly();
  readonly board = this._board.asReadonly();
  readonly cellState = this._cellState.asReadonly();
  readonly mistakes = this._mistakes.asReadonly();

  // Completed numbers (to display "V")
  readonly completedNumbers = computed(() =>
    Array.from({ length: 9 }, (_, i) => i + 1)
      .filter(n => !this._board().includes(n))
  );

  setSelectedNumber(value: number) {
    this._selectedNumber.set(value);
  }


}
