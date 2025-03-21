import { Component } from '@angular/core';
import { FactorsComponent } from './factors/factors.component';

@Component({
  selector: 'app-signals-with-rxjs',
  imports: [FactorsComponent],
  templateUrl: './signals-with-rxjs.component.html',
  styleUrl: './signals-with-rxjs.component.scss',
})
export class SignalsWithRxjsComponent {}
