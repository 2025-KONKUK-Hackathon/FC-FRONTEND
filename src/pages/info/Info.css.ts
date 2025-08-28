import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '4.5rem',
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: 'calc(100vh - 12rem)',
  padding: '2rem',
  gap: '3rem',
});

export const title = style({
  fontSize: 16,
  fontWeight: 700,
  color: vars.color.White,
});

export const linkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});
