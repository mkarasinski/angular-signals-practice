import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-progress',
  imports: [SharedModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  readonly value = signal(4);
  readonly max = signal(9);
  readonly ratio = computed(() => this.value() / this.max());
}
