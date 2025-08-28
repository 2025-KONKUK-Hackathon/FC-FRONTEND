import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const loginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: '2rem',
});

export const loginCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '40rem',
  padding: '4rem 3rem',
});

export const title = style({
  fontSize: '4.2rem',
  fontWeight: '700',
  color: vars.color.KU_Darkgreen,
  marginBottom: '1rem',
  textAlign: 'center',
});

export const title2 = style({
  fontSize: '4.2rem',
  fontWeight: '700',
  color: vars.color.Mint,
  textAlign: 'center',
});

export const subtitle = style({
  fontSize: '1.6rem',
  color: vars.color.grey400,
  margin: '6rem 0 4rem 0',
  textAlign: 'center',
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.8rem',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '6.2rem',
});

export const errorMessage = style({
  margin: '0.4rem 0 0 0.8rem',
  fontSize: '1rem',
  color: vars.color.Red,
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
});

export const divider = style({
  display: 'flex',
  alignItems: 'center',
  margin: '2rem 0',
  '::before': {
    content: '""',
    flex: 1,
    height: '1px',
    backgroundColor: vars.color.grey300,
  },
  '::after': {
    content: '""',
    flex: 1,
    height: '1px',
    backgroundColor: vars.color.grey300,
  },
});

export const dividerText = style({
  padding: '0 1rem',
  fontSize: '1.4rem',
  color: vars.color.grey500,
});

export const logo = style({
  width: '100rem',
  height: '10rem',
});
