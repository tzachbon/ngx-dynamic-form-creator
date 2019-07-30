import { Component, OnInit } from '@angular/core';
import { demoData } from 'src/app/exmaple-data';
import { DynamicForm } from '../../dist/ngx-dynamic-form-creator/lib/Models/interfaces/dynamicForm.interface.d';
interface ISettings {
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-dynamic-form-creator-lib';
  dynamicForm: DynamicForm = demoData;
  settings: ISettings = {
    buttonText: {
      back: 'חזור',
      done: 'שמור',
      next: 'הבא'
    },
    formFieldClassName: 'form-field',
    formName: 'test',
    position: 'horizontal',
    stepperClassName: 'stepper-field',
    dir: 'ltr'
  };

  ngOnInit() {
  }

  onSubmit(values: any) {
    console.log('====================================');
    console.log(values);
    console.log('====================================');

  }


}
