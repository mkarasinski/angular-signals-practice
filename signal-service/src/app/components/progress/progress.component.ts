import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  readonly value = input.required<number>();
  readonly max = input.required<number>();

  readonly ratio = computed(() => (this.max() === 0 ? 0 : this.value() / this.max()));
}
