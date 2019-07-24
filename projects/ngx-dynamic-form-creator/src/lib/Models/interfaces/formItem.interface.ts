import { Dependence } from './dependence.interface';
import { ItemOption } from './itemOption.interface';
export interface FormItem {
  type: string;
  inputType: string;
  key: string;
  label: string;
  order: number;
  required: boolean;
  floatField: number;
  value: string;
  options: ItemOption[];
  api: any;
  dependence: Dependence;
  isOnDependence: boolean;
  hebName: string;
  isRowItem: boolean;
  subItems: FormItem[];
  uploadValidator: string;
  min: string;
  max: string;
  formStep: number;
  settings: {};
}
