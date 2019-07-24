import { Component, OnInit, Input } from '@angular/core';
import { DynamicForm } from './Models/interfaces/dynamicForm.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-dynamic-form-creator',
  template: `
  <app-form [dynamicForm]="dynamicForm"></app-form>
  `,
  styles: []
})
export class NgxDynamicFormCreatorComponent implements OnInit {
  @Input() dynamicForm: DynamicForm;
  constructor() { }

  ngOnInit() {
    console.log('dynamicForm:', this.dynamicForm);

  }

}
