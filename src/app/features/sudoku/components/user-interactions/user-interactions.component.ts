import {Component, input} from '@angular/core';
import {ActionBar} from './action-bar/action-bar';
import {InfoBar} from './info-bar/info-bar.component';
import {NumberPad} from './number-pad/number-pad.component';

@Component({
  selector: 'app-user-interactions',
  imports: [
    ActionBar,
    InfoBar,
    NumberPad
  ],
  templateUrl: './user-interactions.component.html',
  styleUrl: './user-interactions.component.scss'
})
export class UserInteractions{
  mistakes = input(0);

}
