import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FactorApiService } from './factors-api-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-factors',
  imports: [],
  templateUrl: './factors.component.html',
  styleUrl: './factors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactorsComponent {
  readonly number = signal(10);
  // Prefered way to connect Observables with Signals
  readonly number$ = toObservable(this.number);

  readonly api = inject(FactorApiService);
  readonly results$ = this.number$.pipe(switchMap(n => this.api.getPrimeFactors(n)));
  readonly primeFactors = toSignal(this.results$, {
    initialValue: [],
    // injector: this.injector, // to initialize it later than  on component creation, or
    // manualCleanup: true  // to never unsubscribe automatically on destroy, but it will happen on Observable completion
  });

  increase() {
    this.number.update(n => n + 1);
  }

  decrease() {
    this.number.update(n => Math.max(n - 1, 3));
  }
}
