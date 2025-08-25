export interface DropDownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export const DROPDOWN_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
} as const;

export type DropDownSize = typeof DROPDOWN_SIZE[keyof typeof DROPDOWN_SIZE];
