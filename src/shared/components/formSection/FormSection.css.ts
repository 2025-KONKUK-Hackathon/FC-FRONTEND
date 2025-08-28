import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const title = style({
  fontSize: '1.5rem',

  color: vars.color.White,
});

export const description = style({
  fontSize: '1rem',
  color: vars.color.grey300,
});

export const error = style({
  fontSize: '1.2rem',
  color: vars.color.Red,
});
