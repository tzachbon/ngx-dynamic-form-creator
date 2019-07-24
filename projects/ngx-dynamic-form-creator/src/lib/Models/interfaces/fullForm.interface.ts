import { FormSteps } from './formStep.interface';
import { FormItem } from './formItem.interface';
export interface FullForm {
  step: FormSteps;
  items: FormItem[];
}
