import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { RATES } from './rates';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, interval, map, startWith, switchMap } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent {
  // No need to use @Input anymore, input creates a InputSignal
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  // No need to use EventEmitter and Output decorators
  // readonly refreshRequired = output<void>();
  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);
  // manual refresh output every 5 seconds and on manuall click
  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() => interval(5000).pipe(startWith(0))),
    map(() => undefined),
    takeUntilDestroyed()
  );
  // Connecting observable with signal output.
  readonly refreshRequired = outputFromObservable(this.refreshRequired$);

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}
