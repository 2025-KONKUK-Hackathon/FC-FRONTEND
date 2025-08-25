import * as styles from './Button.css';
import type { ButtonVariant, ButtonSize } from './constant/button';
import type { Color } from '@styles/theme.css';

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  bgColor?: Color;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ 
  text = 'Button', 
  variant = 'fill',
  size = 'large',
  bgColor = 'Charcoal',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type='button'
      className={styles.buttonStyle({ variant, size, bgColor })}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
