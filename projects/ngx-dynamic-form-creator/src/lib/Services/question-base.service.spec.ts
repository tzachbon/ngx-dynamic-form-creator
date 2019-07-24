import { TestBed } from '@angular/core/testing';

import { QuestionBaseService } from './question-base.service';

describe('QuestionBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionBaseService = TestBed.get(QuestionBaseService);
    expect(service).toBeTruthy();
  });
});
