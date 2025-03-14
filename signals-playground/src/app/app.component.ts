import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicSignalsComponent } from './basic-signals/basic-signals.component';
import { LinkedSignalsComponent } from './linked-signals/linked-signals.component';

@Component({
  imports: [BasicSignalsComponent, CommonModule, LinkedSignalsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
