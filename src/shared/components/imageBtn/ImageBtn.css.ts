import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '0.5rem',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const imageBtn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '7rem',
  aspectRatio: '1/1',
  flexShrink: 0,

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
  textAlign: 'center',
  fontSize: '1rem',
  color: vars.color.grey400,
  padding: '0.5rem 1rem',
});

export const imagePreview = style({
  width: '7rem',
  height: '7rem',
  objectFit: 'cover',
  borderRadius: '4px',
});
