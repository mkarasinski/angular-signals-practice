import { CommonModule } from '@angular/common';
import { Component, effect, inject, resource, signal } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly service = inject(SearchService);
  readonly keyword = signal('');

  // similar to linked signals, but resource is asynchronous
  // resource is for working with promises
  readonly results = resource({
    request: () => this.keyword(),
    loader: obj => this.service.search(obj.request, obj.abortSignal),
  });

  constructor() {
    effect(() => {
      console.log('resource status', this.results.status());
      // resource status: 1 - Error, 2- Loading, 4 - Resolved, 5 - Local
    });
  }

  resetResource() {
    this.results.set([
      { name: 'Red', code: '#FF0000' },
      { name: 'Green', code: '#00FF00' },
      { name: 'Blue', code: '#0000FF' },
    ]);
  }
}
