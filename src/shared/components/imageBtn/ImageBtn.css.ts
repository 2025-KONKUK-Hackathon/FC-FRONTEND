import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '0.5rem',
});

export const imageBtn = style({
  width: '7rem',
  aspectRatio: '1/1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1.5px dashed ${vars.color.grey400}`,
  borderRadius: '4px',
  backgroundColor: vars.color.grey700,
  cursor: 'pointer',
});

export const image = style({
  width: '3rem',
  height: '3rem',
});

export const text = style({
  color: vars.color.grey400,
  fontSize: '1rem',
  textAlign: 'center',
  padding: '0.5rem 1rem',
});

export const imagePreview = style({
  width: '7rem',
  height: '7rem',
  objectFit: 'cover',
  borderRadius: '4px',
});
