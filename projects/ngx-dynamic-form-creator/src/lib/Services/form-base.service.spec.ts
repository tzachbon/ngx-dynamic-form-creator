import { TestBed } from '@angular/core/testing';

import { FormBaseService } from './form-base.service';

describe('FormBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBaseService = TestBed.get(FormBaseService);
    expect(service).toBeTruthy();
  });
});
