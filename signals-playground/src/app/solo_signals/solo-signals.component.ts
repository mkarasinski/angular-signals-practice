import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicSignalsComponent } from './basic-signals/basic-signals.component';
import { LinkedSignalsComponent } from './linked-signals/linked-signals.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-solo-signals',
  imports: [CommonModule, BasicSignalsComponent, LinkedSignalsComponent, CounterComponent],
  templateUrl: './solo-signals.component.html',
  styleUrl: './solo-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoloSignalsComponent {
  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
