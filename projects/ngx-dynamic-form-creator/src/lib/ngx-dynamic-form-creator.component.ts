import { Component, OnInit, Input } from '@angular/core';
import { DynamicForm } from './Models/interfaces/dynamicForm.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-dynamic-form-creator',
  template: `
  <app-form [dynamicForm]="dynamicForm" [onSubmit]="onSubmit"></app-form>
  `,
  styles: []
})
export class NgxDynamicFormCreatorComponent implements OnInit {
  @Input() dynamicForm: DynamicForm;
  constructor() { }

  onSubmit(values: any) {
    console.log('====================================');
    console.log(values);
    console.log('====================================');

  }

  ngOnInit() {
    console.log('dynamicForm:', this.dynamicForm);

  }

}
