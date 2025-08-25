export const BUTTON_VARIANT = {
  FILL: 'fill',
  OUTLINE: 'outline',
} as const;

export const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];
export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];
