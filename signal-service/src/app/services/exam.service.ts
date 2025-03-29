import { computed, inject, Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExamGeneratorService } from './exam-generator.service';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  // # is a private property, it is not accessible outside of the class, new js syntax
  readonly #questions = signal<Question[]>([
    {
      caption: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswerIndex: 2,
    },
    {
      caption: 'What is the largest planet in our solar system?',
      answers: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswerIndex: 1,
    },
    {
      caption: 'What is the chemical symbol for gold?',
      answers: ['Au', 'Ag', 'Fe', 'Pb'],
      correctAnswerIndex: 0,
    },
    {
      caption: 'Who wrote "To Kill a Mockingbird"?',
      answers: ['Harper Lee', 'Mark Twain', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
      correctAnswerIndex: 0,
    },
  ]);
  readonly #userAnswers = signal<number[]>([]);
  readonly #isBusy = signal(false);

  readonly #generateExam$ = new BehaviorSubject<number>(1);

  // save exposure of signal, set or update of the signal is not allowed
  readonly questions = this.#questions.asReadonly();
  readonly userAnswers = computed(() =>
    this.#userAnswers().map<Answer>((ans, index) => ({
      userAnswerIndex: ans,
      isCorrect: ans === this.questions()[index].correctAnswerIndex,
    })),
  );
  readonly isBusy = this.#isBusy.asReadonly();
  // Convert the BehaviorSubject to a signal
  readonly level = toSignal(this.#generateExam$);

  readonly currentQuestionIndex = computed(() => this.userAnswers().length);
  readonly currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);

  readonly questionsCount = computed(() => this.questions().length);
  readonly isQuizFinished = computed(() => this.userAnswers().length === this.questionsCount());

  readonly correctAnswers = computed(() => this.userAnswers().filter(ans => ans.isCorrect));
  readonly correctAnswersCount = computed(() => this.correctAnswers().length);

  answerCurrentQuestion(answerIndex: number): void {
    this.#userAnswers.update(answers => [...answers, answerIndex]);
  }

  increaseLevel(): void {
    this.#generateExam$.next(this.#generateExam$.value + 1);
  }

  decreaseLevel(): void {
    this.#generateExam$.next(this.#generateExam$.value - 1);
  }

  restartLevel(): void {
    this.#generateExam$.next(this.#generateExam$.value);
  }

  constructor() {
    const generator = inject(ExamGeneratorService);

    this.#generateExam$
      .pipe(
        tap(() => this.#isBusy.set(true)),
        switchMap(level => generator.generateExam(level)),
        tap(questions => {
          this.#questions.set(questions);
          this.#userAnswers.set([]);
          this.#isBusy.set(false);
        }),
      )
      .subscribe();
  }
}
