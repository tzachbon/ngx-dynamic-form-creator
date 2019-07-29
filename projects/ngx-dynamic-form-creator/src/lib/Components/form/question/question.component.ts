import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControlName } from '@angular/forms';
import { FormItem } from '../../../Models/interfaces/formItem.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  // template: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formArray: FormArray;
  @Input() stepName: string;
  @Input() question: FormItem;
  @Input() dependenciesStatuses: any;
  // tslint:disable-next-line: no-input-rename
  @Input('formControlNameIndex') FormControlName: number;
  isTrue: boolean;


  constructor() { }

  ngOnInit() {
    console.log(this.form.controls[this.stepName]);
  }


  inputChange(key, save, options?) {
    console.log('====================================');
    console.log(key, save, options);
    console.log('====================================');
  }

}
