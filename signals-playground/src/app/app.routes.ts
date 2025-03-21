import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./solo_signals/solo-signals.component').then(c => c.SoloSignalsComponent),
  },
  {
    path: 'signals-rxjs',
    loadComponent: () =>
      import('./signals-with-rxjs/signals-with-rxjs.component').then(
        c => c.SignalsWithRxjsComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
