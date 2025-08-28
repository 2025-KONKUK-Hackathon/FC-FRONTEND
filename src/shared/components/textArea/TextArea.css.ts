import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '1rem',
});

export const textAreaWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textAreaStyle = style({
  width: '100%',
  height: '15rem',
  borderRadius: '1rem',
  border: `1px solid ${vars.color.grey700}`,
  padding: '1.6rem',
  fontSize: '1.4rem',
  color: vars.color.grey100,
  backgroundColor: vars.color.grey800,
  resize: 'none',
  overflowY: 'auto',
  overflowX: 'hidden',
  wordWrap: 'break-word',
  whiteSpace: 'pre-wrap',

  selectors: {
    '&::placeholder': {
      fontSize: '1.3rem',
      color: vars.color.grey400,
    },
    '&:focus': {
      outline: 'none',
      border: `1px solid ${vars.color.KU_Darkgreen}`,
    },
    '&::-webkit-scrollbar': {
      height: '1.4rem',
      width: '0.2rem',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: '0.4rem',
    },
    '&::-webkit-scrollbar-thumb': {
      background: vars.color.grey700,
      borderRadius: '0.4rem',
      width: '0.2rem',
      height: '0.2rem',
    },
  },
});

export const characterCount = style({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  fontSize: '1.2rem',
  color: vars.color.grey400,
  pointerEvents: 'none',
});

export const maxLength = style({
  fontSize: '1rem',
  color: vars.color.Red,
});
