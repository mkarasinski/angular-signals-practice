import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DoneComponent } from './components/done/done.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ExamService } from './services/exam.service';

@Component({
  selector: 'app-root',
  imports: [DoneComponent, ProgressComponent, QuestionPresenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly store = inject(ExamService);
}
