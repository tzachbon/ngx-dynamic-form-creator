
import { DynamicForm } from '../../dist/ngx-dynamic-form-creator/lib/Models/interfaces/dynamicForm.interface.d';

const x = {
  "formName": "טופס דמו",
  "guid": "e227b0d7-1aa0-4259-8ac1-f80e7df07199",
  "FullForm": [
    {
      "step": {
        "formStep": 0,
        "stepName": "שלב ראשון"
      },
      "items": [
        {
          "type": "dropdown",
          "inputType": "text",
          "key": "ITM_710",
          "label": "רשימה נפתחת",
          "order": 0,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [
            {
              "key": "OPN_502",
              "value": "1",
              "formStep": 0,
              "source": "ITM_710",
              "targets": "[\"ITM_703\"]"
            },
            {
              "key": "OPN_503",
              "value": "2",
              "formStep": 0,
              "source": "ITM_710",
              "targets": "[\"ITM_705\"]"
            },
            {
              "key": "OPN_504",
              "value": "3",
              "formStep": 0,
              "source": "ITM_710",
              "targets": "[]"
            }
          ],
          "api": {
            "name": null,
            "url": null
          },
          "dependence": null,
          "isOnDependence": false,
          "hebName": "רשימה נפתחת",
          "isRowItem": false,
          "subItems": [],
          "uploadValidator": "",
          "formStep": 0,
          "settings": {
            "arrangeOption": false
          },
          "group": "",
          "duplicatorKey": "",
          "tooltip": "",
          "disabled": false
        },
        {
          "type": "input",
          "inputType": "text",
          "key": "ITM_703",
          "label": "1",
          "order": 1,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [],
          "api": null,
          "dependence": {
            "formStep": 0,
            "source": "ITM_710",
            "target": "ITM_703",
            "termType": "=",
            "term": "OPN_502",
            "termValue": "1"
          },
          "isOnDependence": true,
          "hebName": "שדה טקסט",
          "isRowItem": false,
          "subItems": [],
          "uploadValidator": "",
          "min": "0",
          "max": "50",
          "formStep": 0,
          "settings": null,
          "group": "",
          "duplicatorKey": "",
          "tooltip": "",
          "disabled": false,
          "onlyPdf": false
        },
        {
          "type": "input",
          "inputType": "text",
          "key": "ITM_705",
          "label": "2",
          "order": 2,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [],
          "api": null,
          "dependence": {
            "formStep": 0,
            "source": "ITM_710",
            "target": "ITM_705",
            "termType": "=",
            "term": "OPN_503",
            "termValue": "2"
          },
          "isOnDependence": true,
          "hebName": "שדה טקסט",
          "isRowItem": false,
          "subItems": [],
          "uploadValidator": "",
          "min": "0",
          "max": "50",
          "formStep": 0,
          "settings": null,
          "group": "",
          "duplicatorKey": "",
          "tooltip": "",
          "disabled": false,
          "onlyPdf": false
        }
      ]
    },
    {
      "step": {
        "formStep": 1,
        "stepName": "שלב 2"
      },
      "items": [
        {
          "type": "input",
          "inputType": "text",
          "key": "ITM_711",
          "label": "שדה טקסט",
          "order": 0,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [],
          "api": null,
          "dependence": null,
          "isOnDependence": false,
          "hebName": "שדה טקסט",
          "isRowItem": false,
          "subItems": [],
          "uploadValidator": "",
          "min": "0",
          "max": "50",
          "formStep": 1,
          "settings": null,
          "group": "",
          "duplicatorKey": "",
          "tooltip": "",
          "disabled": false
        }
      ]
    }
  ],
  "Dependence": [
    {
      "formStep": 0,
      "source": "ITM_710",
      "target": "ITM_703",
      "termType": "=",
      "term": "OPN_502",
      "termValue": "1"
    },
    {
      "formStep": 0,
      "source": "ITM_710",
      "target": "ITM_705",
      "termType": "=",
      "term": "OPN_503",
      "termValue": "2"
    }
  ],
  "urls": [],
  "options": [
    {
      "key": "OPN_502",
      "value": "1",
      "formStep": 0,
      "source": "ITM_710",
      "targets": "[\"ITM_703\"]"
    },
    {
      "key": "OPN_503",
      "value": "2",
      "formStep": 0,
      "source": "ITM_710",
      "targets": "[\"ITM_705\"]"
    },
    {
      "key": "OPN_504",
      "value": "3",
      "formStep": 0,
      "source": "ITM_710",
      "targets": "[]"
    }
  ],
  "flatItemsArray": [
    {
      "type": "dropdown",
      "inputType": "text",
      "key": "ITM_710",
      "label": "רשימה נפתחת",
      "order": 0,
      "required": true,
      "floatField": 0,
      "value": "",
      "options": [
        {
          "key": "OPN_502",
          "value": "1",
          "formStep": 0,
          "source": "ITM_710",
          "targets": "[\"ITM_703\"]"
        },
        {
          "key": "OPN_503",
          "value": "2",
          "formStep": 0,
          "source": "ITM_710",
          "targets": "[\"ITM_705\"]"
        },
        {
          "key": "OPN_504",
          "value": "3",
          "formStep": 0,
          "source": "ITM_710",
          "targets": "[]"
        }
      ],
      "api": {
        "name": null,
        "url": null
      },
      "dependence": null,
      "isOnDependence": false,
      "hebName": "רשימה נפתחת",
      "isRowItem": false,
      "subItems": [],
      "uploadValidator": "",
      "formStep": 0,
      "settings": {
        "arrangeOption": false
      },
      "group": "",
      "duplicatorKey": "",
      "tooltip": "",
      "disabled": false
    },
    {
      "type": "input",
      "inputType": "text",
      "key": "ITM_703",
      "label": "1",
      "order": 1,
      "required": true,
      "floatField": 0,
      "value": "",
      "options": [],
      "api": null,
      "dependence": {
        "formStep": 0,
        "source": "ITM_710",
        "target": "ITM_703",
        "termType": "=",
        "term": "OPN_502",
        "termValue": "1"
      },
      "isOnDependence": true,
      "hebName": "שדה טקסט",
      "isRowItem": false,
      "subItems": [],
      "uploadValidator": "",
      "min": "0",
      "max": "50",
      "formStep": 0,
      "settings": null,
      "group": "",
      "duplicatorKey": "",
      "tooltip": "",
      "disabled": false,
      "onlyPdf": false
    },
    {
      "type": "input",
      "inputType": "text",
      "key": "ITM_705",
      "label": "2",
      "order": 2,
      "required": true,
      "floatField": 0,
      "value": "",
      "options": [],
      "api": null,
      "dependence": {
        "formStep": 0,
        "source": "ITM_710",
        "target": "ITM_705",
        "termType": "=",
        "term": "OPN_503",
        "termValue": "2"
      },
      "isOnDependence": true,
      "hebName": "שדה טקסט",
      "isRowItem": false,
      "subItems": [],
      "uploadValidator": "",
      "min": "0",
      "max": "50",
      "formStep": 0,
      "settings": null,
      "group": "",
      "duplicatorKey": "",
      "tooltip": "",
      "disabled": false,
      "onlyPdf": false
    },
    {
      "type": "input",
      "inputType": "text",
      "key": "ITM_711",
      "label": "שדה טקסט",
      "order": 0,
      "required": true,
      "floatField": 0,
      "value": "",
      "options": [],
      "api": null,
      "dependence": null,
      "isOnDependence": false,
      "hebName": "שדה טקסט",
      "isRowItem": false,
      "subItems": [],
      "uploadValidator": "",
      "min": "0",
      "max": "50",
      "formStep": 1,
      "settings": null,
      "group": "",
      "duplicatorKey": "",
      "tooltip": "",
      "disabled": false
    }
  ],
  "Style": {
    "logoUrl": "",
    "formSubTitle": "תיאור הטופס שלי",
    "formTheme": "#0868a7",
    "itemDesign": {
      "name": "fill",
      "hebName": "עם רקע"
    },
    "direction": "rtl",
    "formFooterTitle": "",
    "formFooterSubtitle": ""
  },
  "isEditable": true,
  "groups": []
}
export const demoData: DynamicForm = JSON.parse(JSON.stringify(x));
