import { type DropDownOption } from '@shared/components/dropDown/constant/dropDown';
import { PART_CATEGORY } from '@shared/constant/part';
import { GRADE_CATEGORY } from '@shared/constant/grade';
import { SUBJECT_CATEGORY } from '@shared/constant/subject';
import { AFFILIATION_CATEGORY } from '@shared/constant/affiliation';

// 파트 옵션
export const PART_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...Object.entries(PART_CATEGORY).map(([key, value]) => ({
    value: key,
    label: value.text,
  })),
];

// 학년 옵션
export const GRADE_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...Object.entries(GRADE_CATEGORY).map(([key, value]) => ({
    value: key,
    label: value.text,
  })),
];

// 주제 옵션
export const TOPIC_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...Object.entries(SUBJECT_CATEGORY).map(([key, value]) => ({
    value: key,
    label: value.text,
  })),
];

// 소속 옵션
export const AFFILIATION_FILTER_OPTIONS: DropDownOption[] = [
  { value: 'ALL', label: '전체' },
  ...Object.entries(AFFILIATION_CATEGORY).map(([key, value]) => ({
    value: key,
    label: value.text,
  })),
];