import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RATES } from './components/currency-converter/rates';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';

@Component({
  selector: 'app-root',
  imports: [
    CurrencyConverterComponent,
    OptionSelectorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly currencies = Object.keys(RATES);
  readonly currency = signal('EUR');
  amount = new FormControl(100);

  public refresh() {
    console.log('refresh data');
  }
}
