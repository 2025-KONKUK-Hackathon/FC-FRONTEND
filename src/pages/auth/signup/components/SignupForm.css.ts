import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '94%',
  height: '11rem',
  paddingBottom: '2rem',
});

export const formTitle = style({
  marginBottom: '1rem',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  color: vars.color.White,
});

export const formInputContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const inputContainer = style({
  flex: 1,
  marginRight: '1rem',
});

export const validationMessage = recipe({
  base: {
    display: 'flex',
    margin: '0.4rem 0 0 0.8rem',
    fontSize: '1.2rem',
  },
  variants: {
    success: {
      true: {
        color: vars.color.Mint,
      },
      false: {
        color: vars.color.Red,
      },
    },
  },
});
