import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports: [
    FormComponent
  ]
})
export class FormModule { }
