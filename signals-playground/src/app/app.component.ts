import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // OnPush is used for signals
})
export class AppComponent {
  readonly firstSignal = signal(42);
  readonly secondSignal = signal('Hello World!');
  // can not modify the value of derived Signal, it calculates itself
  // use only for synchronous calculations and don't try to modify or create other things
  readonly derivedSignal = computed(() => this.firstSignal() * 10);

  constructor() {
    // effect subscribes to values of signals inside {}, can be more than 1
    // accumulates changes and only runs once after tasks are compleated
    effect(() => {
      console.log('First Signal:', this.firstSignal());
      console.log('Second Signal:', this.secondSignal());
    });
  }

  setSignal() {
    // sets value to new value
    this.firstSignal.set(10);
    this.firstSignal.update((value) => value + 1);
    this.secondSignal.set('Signals:');
  }

  updateSignal() {
    // update sets value based on original value
    this.firstSignal.update((value) => value + 1);
  }
}
