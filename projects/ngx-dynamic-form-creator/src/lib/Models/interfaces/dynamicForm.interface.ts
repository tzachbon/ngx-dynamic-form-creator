import { Dependence } from './dependence.interface';
import { FullForm } from './fullForm.interface';
import { dynamicFormStyle } from './dynamicFormStyle.interface';
import { UrlData } from './url-data.interface';
import { OptionItem } from './optionItem.interface';
import { FormItem } from './formItem.interface';

export interface DynamicForm {
  formName: string;
  guid: string;
  Dependence: Dependence[];
  FullForm: FullForm[];
  Style: dynamicFormStyle;
  urls: UrlData[];
  options: OptionItem[];
  flatItemsArray: FormItem[];
  isEditable: boolean;
}
