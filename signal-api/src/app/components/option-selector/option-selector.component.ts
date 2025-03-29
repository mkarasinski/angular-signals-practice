import { ChangeDetectionStrategy, Component, contentChild, input, model } from '@angular/core';
import { OptionDirective } from './option.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option-selector',
  imports: [CommonModule],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionSelectorComponent {
  // Signal input
  readonly options = input.required<string[]>();
  // Two way binding with signal
  readonly selected = model.required<string>();

  readonly templateDirective = contentChild(OptionDirective);

  select(option: string) {
    this.selected.set(option);
  }
}
