import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    QuestionPresenterComponent,
    ToolbarComponent,
    ProgressComponent,
    DoneComponent,
    // BusyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly store = inject(QuizStore);
}
