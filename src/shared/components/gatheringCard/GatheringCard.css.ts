import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  gap: '1rem',

  padding: '1rem 0',
  border: `1px solid ${vars.color.grey700}`,
  borderRadius: '0.8rem',

  backgroundColor: vars.color.grey800,
});

export const imageContainer = style({
  position: 'relative',

  width: '35%',
});

export const image = style({
  width: '100%',
  height: '100%',
  borderRadius: '0.8rem',

  objectFit: 'cover',
  backgroundColor: vars.color.grey900,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const title = style({
  width: '22rem',

  fontSize: '1.5rem',
  color: vars.color.White,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const description = style({
  width: '22rem',

  fontSize: '1rem',
  color: vars.color.grey300,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const row = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '3rem',
});

export const countContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const count = style({
  color: vars.color.grey300,
});

export const footer = style({
  color: vars.color.grey300,
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
