import { NgModule } from '@angular/core';
import { NgxDynamicFormCreatorComponent } from './ngx-dynamic-form-creator.component';
import { SharedModule } from './Components/shared/shared.module';
import { FormModule } from './Components/form/form.module';

@NgModule({
  declarations: [NgxDynamicFormCreatorComponent],
  imports: [
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
