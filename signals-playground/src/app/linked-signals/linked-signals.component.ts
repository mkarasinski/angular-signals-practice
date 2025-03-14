import {
  ChangeDetectionStrategy,
  Component,
  linkedSignal,
  signal,
} from '@angular/core';
import { PRODUCTS } from './products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linked-signals',
  imports: [ CommonModule],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedSignalsComponent {
  readonly products = signal(['Apple', 'Banana', 'Orange']);

  // Linked singals are both writable and computable at the same time
  readonly selectedProduct = linkedSignal<string[], string>({
    source: this.products,
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;
      return prod[0];
    },
  });

  addProducts() {
    this.products.update((products) => [
      ...products,
      PRODUCTS[products.length],
    ]);
  }

  removeProducts() {
    this.products.update((products) => products.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update((selected) => {
      const index = this.products().indexOf(selected); 
      // circural array, prevents from going out of bounds and returns the first element
      return this.products()[(index + 1) % this.products().length];
    });
  }

  prevProduct() {
    this.selectedProduct.update((selected) => {
      const index = this.products().indexOf(selected);
      return this.products()[(index - 1 + this.products().length) % this.products().length];
    });
  }
}
