import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-presenter',
  imports: [SharedModule],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionPresenterComponent {
  readonly question = signal<Question>({
    caption: ['Red', 'Green'],
    answers: ['Red', 'Green', 'Blue', 'Yellow'],
    correctIndex: 3,
  });
}
