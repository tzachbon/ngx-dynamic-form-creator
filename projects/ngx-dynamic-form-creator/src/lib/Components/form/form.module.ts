import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    FormComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    FormComponent,
    QuestionComponent
  ]
})
export class FormModule { }
