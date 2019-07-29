import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DynamicForm } from '../../Models/interfaces/dynamicForm.interface';
import { FullForm } from '../../Models/interfaces/fullForm.interface';
import { Dependence } from '../../Models/interfaces/dependence.interface';
import { FormItem } from '../../Models/interfaces/formItem.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() dynamicForm: DynamicForm;
  @Input() onSubmit: (values: any) => void;
  form: FormGroup;
  dependenciesStatuses = {};


  constructor() { }

  ngOnInit() {
    this.form = this.createFormGroup(this.dynamicForm);
    console.log('====================================');
    console.log(this.form);
    console.log('====================================');
  }

  getFormArrayByStepName(name: string): FormArray {
    return (this.form.controls[name] as FormArray);
  }

  getQuestionsJsonByIndex(index: number): FormItem[] {
    return this.dynamicForm.FullForm[index].items;
  }

  getFormStepNamesArray(): string[] {
    if (this.form) {
      return Object.keys(this.form.controls);
    } else {
      return [];
    }
  }

  onSubmitHandler() {
    this.onSubmit(this.form.value);
  }

  createFormGroup(dynamicForm: DynamicForm): FormGroup {
    // const dependencies: Dependence[] = dynamicForm.Dependence;
    const fullForm: FullForm[] = dynamicForm.FullForm;

    const fullFormGroup: FormGroup = new FormGroup({});
    fullForm.forEach((formItem) => {
      const formArray = formItem.items.map(item => (this.createFormControl(item)));
      fullFormGroup.addControl(formItem.step.stepName, new FormArray(formArray));
    });

    return fullFormGroup;
  }


  createFormControl(item: FormItem): FormControl {
    this.addToDependenceStatuses(item);

    const validators = [];
    if (item.required) {
      switch (item.type) {
        case 'slidetoggle':
        case 'checkbox':
          validators.push(Validators.requiredTrue);
          break;
        default:
          validators.push(Validators.required);
          break;
      }
    }
    const control = new FormControl(item.value, validators);
    return control;
  }

  addToDependenceStatuses(item: FormItem) {
    // Object.assign(this.dependenciesStatuses, { [item.key]: true });
    this.dependenciesStatuses[item.key] = true;
  }

}
