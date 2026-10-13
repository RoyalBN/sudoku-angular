import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractions } from './user-interactions.component';

describe('SudokuTools', () => {
  let component: UserInteractions;
  let fixture: ComponentFixture<UserInteractions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
