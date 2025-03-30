import { TestBed } from '@angular/core/testing';

import { ColorQuizGeneratorService } from './color-quiz-generator.service';

describe('ColorQuizGeneratorService', () => {
  let service: ColorQuizGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorQuizGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
