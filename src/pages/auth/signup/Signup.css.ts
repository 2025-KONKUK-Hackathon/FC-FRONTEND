import { style } from '@vanilla-extract/css';

export const signupWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '50rem',
  height: '100vh',
  margin: '0 auto',
  padding: '0 2rem',
});

export const buttonContainer = style({
  width: '100%',
});
