import type { DropDownOption } from '@shared/components/dropDown/constant/dropDown';
import { CLASS_CATEGORY_OPTIONS } from '@shared/constant/class';

export const CLASS_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...CLASS_CATEGORY_OPTIONS,
];