import type { DropDownOption } from '@shared/components/dropDown/constant/dropDown';
import { CLASS_CATEGORY_OPTIONS } from '@shared/constant/class';
import { STATUS } from '@shared/constant/status';

export const CLASS_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...CLASS_CATEGORY_OPTIONS,
];

export const STATUS_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  { value: 'NOT_STARTED', label: STATUS.NOT_STARTED },
  { value: 'IN_PROGRESS', label: STATUS.IN_PROGRESS },
  { value: 'FINISHED', label: STATUS.FINISHED },
];