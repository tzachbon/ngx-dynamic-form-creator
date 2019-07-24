import { Component, OnInit } from '@angular/core';
import { demoData } from 'projects/ngx-dynamic-form-creator/src/lib/exmaple-data';
import { DynamicForm } from '../../dist/ngx-dynamic-form-creator/lib/Models/interfaces/dynamicForm.interface.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-dynamic-form-creator-lib';
  dynamicForm: DynamicForm = demoData;

  ngOnInit() {

  }
}
