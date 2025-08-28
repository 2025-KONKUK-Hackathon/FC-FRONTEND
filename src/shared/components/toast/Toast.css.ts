import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '10px 20px',
  borderRadius: '30px',
  backgroundColor: vars.color.grey400,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
});

export const text = style({
  fontSize: '1.4rem',
  fontWeight: '500',
  color: vars.color.White,
  lineHeight: '1.4',
});