import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDynamicFormCreatorModule } from 'ngx-dynamic-form-creator'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDynamicFormCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
