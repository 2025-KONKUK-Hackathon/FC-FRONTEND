import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const link = style({
  textDecoration: 'none',
  cursor: 'pointer',
  color: vars.color.grey300,
  border: `1px solid ${vars.color.grey700}`,
  padding: '2rem 1rem',
  fontSize: '1.3em',
  borderRadius: '1rem',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.grey700,
      color: vars.color.White,
    },
  },
});
