import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DoneComponent } from './components/done/done.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  imports: [DoneComponent, ProgressComponent, QuestionPresenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly question = signal<Question>({
    caption: 'How much is 4 + 4?',
    answers: ['4', '8', '16', '2'],
    correctAnswerIndex: 2,
  });
}
