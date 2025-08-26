import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '94%',
});

export const formTitle = style({
  marginBottom: '1rem',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: vars.color.White,
});

export const formInputContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const inputContainer = style({
  flex: 1,
  marginRight: '1.6rem',
});