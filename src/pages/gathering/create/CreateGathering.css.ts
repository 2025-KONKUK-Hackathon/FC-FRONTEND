import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: vars.color.grey900,
});

export const scrollableContent = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '6rem',
  marginBottom: '8rem',
  padding: '2rem',
  gap: '2rem',
  backgroundColor: vars.color.grey900,
  overflowY: 'auto',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: vars.color.White,
});

export const description = style({
  fontSize: '1.5rem',
  color: vars.color.grey500,
});

export const row = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  color: vars.color.grey300,
  fontSize: '1.6rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const icon = style({
  width: '4rem',
  height: '4rem',
});

export const buttonContainer = style({
  width: '100%',
  backgroundColor: vars.color.grey900,
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  padding: '2rem',
  zIndex: 1000,
});
