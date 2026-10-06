import {Component, model, output, signal} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {CommonModule, NgStyle} from '@angular/common';

@Component({
  selector: 'app-number-pad',
  imports: [CommonModule, ButtonModule],
  templateUrl: './number-pad.component.html',
  styleUrl: './number-pad.component.scss'
})
export class NumberPad {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  _selectedNumber = model<number | null>();

  selectNumber = (number: number) => {

    // this._selectedNumber.update((new de));
    console.log(number);
  }

}
