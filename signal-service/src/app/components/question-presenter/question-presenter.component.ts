import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-presenter',
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionPresenterComponent {
  readonly question = input.required<Question>();

  readonly answered = output<number>();

  onAnswer(answerIndex: number): void {
    this.answered.emit(answerIndex);
  }
}
