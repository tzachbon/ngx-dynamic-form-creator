import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControlName, Validators } from '@angular/forms';
import { FormItem } from '../../../Models/interfaces/formItem.interface';
import { DynamicForm } from '../../../Models/interfaces/dynamicForm.interface';
import { Dependence } from '../../../Models/interfaces/dependence.interface';
import { ItemOption } from '../../../Models/interfaces/itemOption.interface';
import { ISettings } from '../../../ngx-dynamic-form-creator.component';

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
  @Input() dynamicForm: DynamicForm;
  @Input() updateStepValidation: () => void;
  @Input() settings: ISettings;
  // tslint:disable-next-line: no-input-rename
  @Input('formControlNameIndex') FormControlName: number;
  isTrue: boolean;


  constructor() { }

  ngOnInit() {
    this.initDependencies();
    console.log('====================================');
    console.log(this.settings.formFieldClassName);
    console.log('====================================');
  }

  initDependencies() {
    switch (this.question.type) {
      case 'checkbox':
      case 'slidetoggle':
        this.inputChange(this.question.key, false);
        break;
      default:
        this.inputChange(this.question.key, false);
        break;
    }
  }


  inputChange(key, save, options?: ItemOption[]) {
    const relevantDependencies: Dependence[] = this.dynamicForm.Dependence.filter((dep => dep.source === key));
    const index = this.FormControlName;
    let value = this.formArray.controls[index].value;
    if (typeof value === 'boolean') {
      value = value ? options[0].key : options[1].key;
    }
    relevantDependencies.forEach(dep => {
      this.dependenciesStatuses[dep.target] = dep.term === value;
      if (this.dependenciesStatuses[dep.target]) {
        this.addValidation(dep.target);
      } else {
        this.removeValidation(dep.target);
      }
    });
    this.updateStepValidation();
  }

  removeValidation(key: string) {
    const index = this.dynamicForm.FullForm[this.FormControlName].items.findIndex(item => item.key === key);
    this.formArray.controls[index].clearValidators();
    this.formArray.updateValueAndValidity();
  }

  addValidation(key: string) {
    const question = this.dynamicForm.FullForm[this.FormControlName].items.find(item => item.key === key);
    if (question.required) {
      const index = this.dynamicForm.FullForm[this.FormControlName].items.findIndex(item => item.key === key);
      const control = this.formArray.controls[index];
      switch (question.type) {
        case 'checkbox':
        case 'slidetoggle':
          control.setValidators(Validators.requiredTrue);
          break;
        default:
          control.setValidators(Validators.required);
          break;
      }
    }
  }

}
