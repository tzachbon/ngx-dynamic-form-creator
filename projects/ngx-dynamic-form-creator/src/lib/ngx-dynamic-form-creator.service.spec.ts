import { TestBed } from '@angular/core/testing';

import { NgxDynamicFormCreatorService } from './ngx-dynamic-form-creator.service';

describe('NgxDynamicFormCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDynamicFormCreatorService = TestBed.get(NgxDynamicFormCreatorService);
    expect(service).toBeTruthy();
  });
});
