# NgxDynamicFormCreator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## OWNER 
All rights reserved to Tzach Bonfil.
The use of this package is free of charge.

## Description

This library generate dynamic form from a simple json object.
this form build with angular material components and support the angular materials APIs.
The final component is a form which build with mat stepper and mat form fields.
The form UI will change based on the values the end user enters.

the examples and the interfaces are shown below.

## Example

"FullForm": [
    {
      "step": {
        "formStep": 0,
        "stepName": "First Step"
      },
      "items": [
        {
          "type": "dropdown",
          "inputType": "text",
          "key": "ITM_700",
          "label": "Select",
          "order": 0,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [
            {
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
      "items": [
        {
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
        }
      ]
    }
  ],

  "Dependence": [
    {
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
  ],

## Interfaces

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


// IMPORTANT -- the uploadfile and signature are still at work.
interface FormItem {
  type: 'checkbox' | 'datepicker' | 'input' | 'radio' | 'dropdown' | 'slider' | 'slidetoggle' | 'textarea' | 'label' | 'paragraph' |  'signature' | 'uploadfile' | 'iframe';
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


