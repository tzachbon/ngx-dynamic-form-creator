import { DynamicForm } from './Models/interfaces/dynamicForm.interface';


const x = {
  "formName": "טופס חדש",
  "guid": "18381843-aa76-47fc-8ade-10d0a6f18a6b",
  "FullForm": [
    {
      "step": {
        "formStep": 0,
        "stepName": "שלב ראשון"
      },
      "items": [
        {
          "type": "checkbox",
          "inputType": "text",
          "key": "ITM_701",
          "label": "תיבת סימון",
          "order": 0,
          "required": false,
          "floatField": 0,
          "value": "",
          "options": [
            {
              "key": "OPN_500",
              "value": "לחוץ",
              "formStep": 0,
              "source": "ITM_701",
              "targets": "[\"ITM_700\"]"
            },
            {
              "key": "OPN_501",
              "value": "לא לחוץ",
              "formStep": 0,
              "source": "ITM_701",
              "targets": "[]"
            }
          ],
          "api": null,
          "dependence": null,
          "isOnDependence": false,
          "hebName": "תיבת סימון",
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
          "key": "ITM_700",
          "label": "שדה טקסט",
          "order": 1,
          "required": true,
          "floatField": 0,
          "value": "",
          "options": [],
          "api": null,
          "dependence": {
            "formStep": 0,
            "source": "ITM_701",
            "target": "ITM_700",
            "termType": "=",
            "term": "OPN_500",
            "termValue": "לחוץ"
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
          "tooltip": "זה שדה חדש!",
          "disabled": false,
          "onlyPdf": false
        }
      ]
    }
  ],
  "Dependence": [
    {
      "formStep": 0,
      "source": "ITM_701",
      "target": "ITM_700",
      "termType": "=",
      "term": "OPN_500",
      "termValue": "לחוץ"
    }
  ],
  "urls": [
    {
      "text": "דף הבית",
      "icon": null,
      "url": "google.com"
    }
  ],
  "options": [
    {
      "key": "OPN_500",
      "value": "לחוץ",
      "formStep": 0,
      "source": "ITM_701",
      "targets": "[\"ITM_700\"]"
    },
    {
      "key": "OPN_501",
      "value": "לא לחוץ",
      "formStep": 0,
      "source": "ITM_701",
      "targets": "[]"
    }
  ],
  "flatItemsArray": [
    {
      "type": "checkbox",
      "inputType": "text",
      "key": "ITM_701",
      "label": "תיבת סימון",
      "order": 0,
      "required": false,
      "floatField": 0,
      "value": "",
      "options": [
        {
          "key": "OPN_500",
          "value": "לחוץ",
          "formStep": 0,
          "source": "ITM_701",
          "targets": "[\"ITM_700\"]"
        },
        {
          "key": "OPN_501",
          "value": "לא לחוץ",
          "formStep": 0,
          "source": "ITM_701",
          "targets": "[]"
        }
      ],
      "api": null,
      "dependence": null,
      "isOnDependence": false,
      "hebName": "תיבת סימון",
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
      "key": "ITM_700",
      "label": "שדה טקסט",
      "order": 1,
      "required": true,
      "floatField": 0,
      "value": "",
      "options": [],
      "api": null,
      "dependence": {
        "formStep": 0,
        "source": "ITM_701",
        "target": "ITM_700",
        "termType": "=",
        "term": "OPN_500",
        "termValue": "לחוץ"
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
      "tooltip": "זה שדה חדש!",
      "disabled": false,
      "onlyPdf": false
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
