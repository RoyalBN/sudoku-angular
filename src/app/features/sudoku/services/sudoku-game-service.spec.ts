import { TestBed } from '@angular/core/testing';

import { SudokuGameService } from './sudoku-game-service';

describe('SudokuGameService', () => {
  let service: SudokuGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
