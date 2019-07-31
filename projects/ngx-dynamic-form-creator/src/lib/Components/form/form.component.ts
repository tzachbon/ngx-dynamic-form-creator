import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DynamicForm } from '../../Models/interfaces/dynamicForm.interface';
import { FullForm } from '../../Models/interfaces/fullForm.interface';
import { FormItem } from '../../Models/interfaces/formItem.interface';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import { ISettings } from '../../ngx-dynamic-form-creator.component';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() dynamicForm: DynamicForm;
  @Input() onSubmit: (values: any) => void;
  @Input() settings: ISettings;
  @ViewChild('stepper', { static: true }) stepperRef: MatStepper;
  public form: FormGroup;
  public dependenciesStatuses = {};
  public stepsValidation = {};
  public visitedSteps = [0];

  constructor() { }

  ngOnInit() {
    this.form = this.createFormGroup(this.dynamicForm);
    this.stepsValidation = this.getStepsValidation();
  }

  stepHasChanged(event: StepperSelectionEvent) {
    // change event
    this.visitedSteps.push(event.selectedIndex);
    this.visitedSteps = [...new Set(this.visitedSteps)];
  }

  updateStepValidation() {
    this.stepsValidation = this.getStepsValidation();
  }

  getStepsValidation() {
    const tempObject = {};
    Object.keys(this.form.controls).forEach(controlName => {
      tempObject[controlName] = this.form.controls[controlName].valid;
    });
    return tempObject;
  }

  isFormArrayIsInvalid(formArrayName: string): boolean {
    return this.form.controls[formArrayName].invalid;
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
    const values = {};
    Object.keys(this.form.value).forEach(stepName => {
      const tempStepValues = {};
      const form = this.dynamicForm.FullForm.find(dForm => dForm.step.stepName === stepName);
      form.items.forEach((item, i) => {
        let value: string = this.form.value[stepName][i];
        if (value !== '') {
          if (item.options.length > 0) {
            const valueFromKey = item.options.find(option => option.key === value).value;
            value = valueFromKey;
          }
          tempStepValues[item.key] = value;
        }
      });
      values[stepName] = tempStepValues;
    });
    this.onSubmit(values);
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
