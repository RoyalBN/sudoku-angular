import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGame } from './sudoku-game';

describe('SudokuGame', () => {
  let component: SudokuGame;
  let fixture: ComponentFixture<SudokuGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
