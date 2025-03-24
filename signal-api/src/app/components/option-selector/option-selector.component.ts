import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-option-selector',
  imports: [],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionSelectorComponent {
  // Signal input
  options = input.required<string[]>();
  // Two way binding with signal
  selected = model.required<string>();

  select(option: string) {
    this.selected.set(option);
  }
}
