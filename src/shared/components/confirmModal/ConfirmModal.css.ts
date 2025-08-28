import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(1px)',
});

export const modal = style({
  // backgroundColor: vars.color.black,
  borderRadius: '16px',
  padding: '3rem 2rem 2.4rem',
  maxWidth: '280px',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  border: `1px solid ${vars.color.grey200}`,
  backgroundColor: vars.color.grey800,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'center',
});

export const title = style({
  fontSize: '1.7rem',
  fontWeight: '500',
  color: vars.color.grey100,
  margin: 0,
  letterSpacing: '-0.02em',
});

export const message = style({
  fontSize: '1.4rem',
  color: vars.color.grey300,
  lineHeight: '1.5',
  margin: 0,
});

export const buttonContainer = style({
  display: 'flex',
  gap: '1.2rem',
  justifyContent: 'center',
});

export const cancelButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.6rem 2rem',
  backgroundColor: vars.color.White,
  color: vars.color.grey900,
  borderRadius: '12px',
  fontSize: '1.5rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  minWidth: '80px',
});

export const confirmButton = style({
  padding: '1.2rem 2.4rem',
  border: 'none',
  backgroundColor: vars.color.KU_Darkgreen,
  color: vars.color.White,
  borderRadius: '12px',
  fontSize: '1.5rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  minWidth: '80px',
});