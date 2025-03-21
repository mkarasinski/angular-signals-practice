import { Component, effect, EffectRef, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  readonly value = signal(0);
  private ef: EffectRef | null = null;
  private readonly injector = inject(Injector);

  constructor() {
    setInterval(() => {
      this.value.update(v => v + 1);
    }, 1000);
  }

  go(): void {
    if (this.ef) {
      return;
    }

    this.ef = effect(
      () => {
        console.log(this.value());
      },
      {
        // to use effects after initialization, we need to pass injector
        // effect will be automatically destroyed when component is destroyed
        injector: this.injector,
      },
    );
  }

  stop(): void {
    // to stop effect manually
    if (this.ef) {
      this.ef.destroy();
      this.ef = null;
    }
  }
}
