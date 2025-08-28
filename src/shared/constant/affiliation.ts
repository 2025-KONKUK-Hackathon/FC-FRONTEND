import type { DropDownOption } from '@shared/components/dropDown/constant/dropDown';

export const AFFILIATION_CATEGORY = {
  COMPUTER: { text: '컴공', icon: '💻', color: 'Blue' },
  SMART_ICT: { text: '스융공', icon: '🔧', color: 'Green' },
  DOUBLE_MINOR: { text: '다/부전공', icon: '📚', color: 'Purple' },
  UNDECLARED: { text: '자율전공', icon: '🎯', color: 'Orange' },
  TRANSFER: { text: '편입', icon: '🔄', color: 'Pink' },
} as const;

export const AFFILIATION_CATEGORY_OPTIONS: DropDownOption[] = Object.entries(
  AFFILIATION_CATEGORY
).map(([key, value]) => ({
  value: key,
  label: `${value.icon} ${value.text}`,
}));

export type AffiliationCategory = (typeof AFFILIATION_CATEGORY)[keyof typeof AFFILIATION_CATEGORY];

export type AffiliationCategoryKey = keyof typeof AFFILIATION_CATEGORY;
