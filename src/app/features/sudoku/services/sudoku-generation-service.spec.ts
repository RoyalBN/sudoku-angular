import { TestBed } from '@angular/core/testing';

import { SudokuGenerationService } from './sudoku-generation-service';

describe('SudokuGenerationService', () => {
  let service: SudokuGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
