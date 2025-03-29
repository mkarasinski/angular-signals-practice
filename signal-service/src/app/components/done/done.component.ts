import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-done',
  imports: [CommonModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneComponent {
  readonly correct = input.required<number>();
  readonly total = input.required<number>();

  readonly score = computed(() => (this.total() === 0 ? 0 : this.correct() / this.total()));

  readonly restart = output<void>();
}
