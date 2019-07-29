import { NgModule } from '@angular/core';
import { NgxDynamicFormCreatorComponent } from './ngx-dynamic-form-creator.component';
import { SharedModule } from './Components/shared/shared.module';
import { FormModule } from './Components/form/form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxDynamicFormCreatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormModule,
  ],
  exports: [
    NgxDynamicFormCreatorComponent,
    SharedModule,
    FormModule
  ],
  providers: []
})
export class NgxDynamicFormCreatorModule { }
