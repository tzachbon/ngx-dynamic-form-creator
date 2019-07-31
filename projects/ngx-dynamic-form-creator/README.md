<!-- # NgxDynamicFormCreator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Code scaffolding

Run `ng generate component component-name --project ngx-dynamic-form-creator` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-dynamic-form-creator` .

> Note: Don't forget to add `--project ngx-dynamic-form-creator` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-dynamic-form-creator` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-dynamic-form-creator` , go to the dist folder `cd dist/ngx-dynamic-form-creator` and run `npm publish` .

## Running unit tests

Run `ng test ngx-dynamic-form-creator` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->

# NgxDynamicFormCreator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Download

> `npm i ngx-dynamic-form-creator` 
Make sure you have angular material and angular material animations.

## Demo 

> Here a simple [DEMO](https://stackblitz.com/edit/angular-5rtj26). I recommend to import `BrowserAnimationsModule` 

## Owner

All rights reserved to [Tzach Bonfil](mailto:tzachbonfil@gmail.com).
The use of this package is free of charge.

## Description

This library generate dynamic form from a simple json object.
this form build with angular material components and support the angular materials APIs.
The final component is a form which build with mat stepper and mat form fields.
The form UI will change based on the values the end user enters.

the examples and the interfaces are shown below.

## Setup In The App Module

``` 
import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    NgxDynamicFormCreatorModule
} from 'ngx-dynamic-form-creator'
import {
    AppComponent
} from './app.component';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        NgxDynamicFormCreatorModule,
        BrowserAnimationsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Example

> HTML: 

``` 
< ngx-dynamic-form-creator [dynamicForm]="dynamicForm" [settings]="settings" [onSubmit]="onSubmit.bind(this)" >
    < /ngx-dynamic-form-creator>
```

> Typescript: `recommend to use the types`

``` 
onSubmit(values: any) {
    // do something
}
```

``` 
  settings: ISettings = {
      buttonText: {
          back: 'back',
          done: 'save',
          next: 'next'
      },
      formFieldClassName: 'form-field',
      formName: 'test',
      position: 'horizontal',
      stepperClassName: 'stepper-field',
      dir: 'ltr'
  };
```

``` 
dynamicForm: DynamicForm = {
    "FullForm": [{
            "step": {
                "formStep": 0,
                "stepName": "First Step"
            },
            "items": [{
                    "type": "dropdown",
                    "inputType": "text",
                    "key": "ITM_700",
                    "label": "Select",
                    "order": 0,
                    "required": true,
                    "floatField": 0,
                    "value": "",
                    "options": [{
                            "key": "OPN_500",
                            "value": "One",
                            "formStep": 0,
                            "source": "ITM_700",
                            "targets": "[\"ITM_701\"]"
                        },
                        {
                            "key": "OPN_501",
                            "value": "Two",
                            "formStep": 0,
                            "source": "ITM_700",
                            "targets": "[\"ITM_702\"]"
                        },
                        {
                            "key": "OPN_502",
                            "value": "Three",
                            "formStep": 0,
                            "source": "ITM_700",
                            "targets": "[]"
                        }
                    ],
                    "tooltip": "",
                    "disabled": false
                },
                {
                    "type": "input",
                    "inputType": "text",
                    "key": "ITM_701",
                    "label": "One",
                    "order": 1,
                    "required": true,
                    "floatField": 0,
                    "value": "",
                    "options": [],
                    "min": "0",
                    "max": "50",
                    "tooltip": "",
                    "disabled": false,
                },
                {
                    "type": "input",
                    "inputType": "text",
                    "key": "ITM_702",
                    "label": "2",
                    "order": 2,
                    "required": true,
                    "floatField": 0,
                    "value": "",
                    "options": [],
                    "min": "0",
                    "max": "50",
                    "tooltip": "",
                    "disabled": false,
                }
            ]
        },
        {
            "step": {
                "formStep": 1,
                "stepName": "Step 2"
            },
            "items": [{
                "type": "input",
                "inputType": "text",
                "key": "ITM_703",
                "label": "New Field In Another Step",
                "order": 0,
                "required": true,
                "floatField": 0,
                "value": "",
                "options": [],
                "min": "0",
                "max": "50",
                "tooltip": "",
                "disabled": false
            }]
        }
    ],
    "Dependence": [{
            "formStep": 0,
            "source": "ITM_700",
            "target": "ITM_701",
            "termType": "=",
            "term": "OPN_500",
            "termValue": "One"
        },
        {
            "formStep": 0,
            "source": "ITM_700",
            "target": "ITM_702",
            "termType": "=",
            "term": "OPN_501",
            "termValue": "Two"
        }
    ]
}
```

## Interfaces

> IMPORTANT: -- the uploadfile and signature are still at work.

``` 
interface DynamicForm {
    Dependence: Dependence[];
    FullForm: FullForm[];
}

interface Dependence {
    formStep: number;
    source: string;
    target: string;
    termType: string;
    term: string;
}

interface FullForm {
    step: FormSteps;
    items: FormItem[];
}

interface FormSteps {
    formStep: number;
    stepName: string;
}

//> IMPORTANT: -- the uploadfile and signature are still at work.

interface FormItem {
    type: 'checkbox' | 'datepicker' | 'input' | 'radio' | 'dropdown' | 'slider' | 'slidetoggle' | 'textarea' | 'label' | 'paragraph' | 'signature' | 'uploadfile' | 'iframe';
    inputType: string;
    key: string;
    label: string;
    order: number;
    required: boolean;
    floatField: number;
    value: string;
    options: ItemOption[];
    tooltip: string;
    disabled: string;
    min: string;
    max: string;
}

interface ItemOption {
    key: string;
    value: string;
    formStep: number;
    source: string;
}

interface ISettings {
    formName: string;
    position: 'horizontal' | 'vertical';
    buttonText: {
        next: string,
        back: string,
        done: string
    };
    formFieldClassName: string;
    stepperClassName: string;
    dir: 'rtl' | 'ltr';
}
```

