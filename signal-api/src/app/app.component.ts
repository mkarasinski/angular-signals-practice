import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RATES } from './components/currency-converter/rates';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { OptionDirective } from './components/option-selector/option.directive';

@Component({
  selector: 'app-root',
  imports: [
    CurrencyConverterComponent,
    OptionSelectorComponent,
    ReactiveFormsModule,
    OptionDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // @ViewChild(CurrencyConverterComponent), new syntax with signal api:
  // ref for component:
  currencyConverter = viewChild.required(CurrencyConverterComponent);
  // for multiple components:
  // currencyConverters = viewChildren(CurrencyConverterComponent);
  // ref for div (in options ElementRef or ViewContainerRef):
  myRefDiv = viewChild.required('myRef', { read: ElementRef });

  readonly currencies = Object.keys(RATES);
  readonly currency = signal('EUR');
  amount = new FormControl(100);

  public refresh() {
    console.log('refresh data');
  }

  public stopRefresh() {
    this.currencyConverter()?.stopRefresh();
  }

  // OnInit for inputs
  // AfterInit for queries
  // Effect happens after all initial lifecycle hooks
}
