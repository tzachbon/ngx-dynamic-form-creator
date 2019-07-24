import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormCreatorComponent } from './ngx-dynamic-form-creator.component';

describe('NgxDynamicFormCreatorComponent', () => {
  let component: NgxDynamicFormCreatorComponent;
  let fixture: ComponentFixture<NgxDynamicFormCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDynamicFormCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
