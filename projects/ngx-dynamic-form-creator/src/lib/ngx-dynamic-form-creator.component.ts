import { Component, OnInit, Input } from '@angular/core';
import { DynamicForm } from './Models/interfaces/dynamicForm.interface';

export interface ISettings {
  formName: string;
  position: 'horizontal' | 'vertical';
  buttonText: {
    next: string,
    back: string,
    done: string
  };
  formFieldClassName: string;
  stepperClassName: string;
  dir: 'rtl' | 'ltr';
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-dynamic-form-creator',
  template:
    `
  <app-form [dynamicForm]="dynamicForm" [onSubmit]="onSubmit" [settings]="settings"></app-form>
  `,
  styles: []
})
export class NgxDynamicFormCreatorComponent implements OnInit {
  @Input() dynamicForm: DynamicForm;
  @Input() onSubmit: (values: any) => void;
  @Input() settings: ISettings;

  constructor() {

  }

  ngOnInit() {
    console.log('====================================');
    console.log(this.settings);
    console.log('====================================');
  }

}
