import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '100%',
  minWidth: 0,
  gap: '1rem',
});

export const eyes = style({
  position: 'absolute',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
});

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const inputStyle = style({
  width: '100%',
  height: '5rem',
  borderRadius: '1rem',
  border: `1px solid ${vars.color.grey700}`,
  padding: '0 1.6rem',
  fontSize: '1.4rem',
  color: vars.color.grey100,
  backgroundColor: vars.color.grey800,

  selectors: {
    '&:focus': {
      outline: 'none',
      border: `1px solid ${vars.color.KU_Darkgreen}`,
    },
    '&::placeholder': {
      fontSize: '1.3rem',
      color: vars.color.grey400,
    },
  },
});

export const inputIcon = style({
  width: '2.3rem',
  height: '2.3rem',
  cursor: 'pointer',
});

export const maxLength = style({
  fontSize: '1rem',
  color: vars.color.Red,
});
