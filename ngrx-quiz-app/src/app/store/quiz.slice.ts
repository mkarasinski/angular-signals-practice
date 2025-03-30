import { QUESTIONS } from '../data/question';
import { Question } from '../models/question.model';

// slice is one part of the store
export interface QuizSlice {
  readonly questions: Question[];
  readonly answers: number[];
}

export const initialQuizSlice: QuizSlice = {
  questions: QUESTIONS,
  answers: [],
};
