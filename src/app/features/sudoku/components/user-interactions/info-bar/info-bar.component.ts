import {Component, computed, input, OnDestroy, signal} from '@angular/core';

@Component({
  selector: 'app-info-bar',
  imports: [],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.scss'
})
export class InfoBar implements OnDestroy {
  mistakes = input(0);

  // Timer properties
  private timerInterval: any;
  private startTime = 0;

  // Timer signal (en secondes)
  elapsedTime = signal(0);

  // Timer formaté (hh:mm:ss)
  formattedTime = computed(() => {
    const hours = Math.floor(this.elapsedTime() / 3600);
    const minutes = Math.floor((this.elapsedTime() % 3600) / 60);
    const seconds = this.elapsedTime() % 60;

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  });

  constructor() {
    // Démarrer le timer quand le composant est créé
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.startTime = Date.now() - (this.elapsedTime() * 1000);
    this.timerInterval = setInterval(() => {
      const currentTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.elapsedTime.set(currentTime);
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  resetTimer() {
    this.elapsedTime.set(0);
    this.startTime = Date.now();
  }

}
