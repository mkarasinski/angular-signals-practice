import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-busy',
  imports: [SharedModule],
  templateUrl: './busy.component.html',
  styleUrl: './busy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusyComponent {}
