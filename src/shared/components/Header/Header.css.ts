import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  maxWidth: '430px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '4.5rem',
  backgroundColor: vars.color.grey900,
  // borderBottom: `1px solid ${vars.color.grey100}`,
  padding: '0 1.6rem',

  zIndex: 1000,
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: vars.color.KU_Darkgreen,
  margin: 0,
});

export const logo = style({
  width: '9rem',
  height: '7rem',
  marginTop: '1rem',
});

export const backButton = style({
  position: 'absolute',
  left: '1.6rem',
  background: 'none',
  border: 'none',
  fontSize: '1.8rem',
  color: vars.color.grey400,
  cursor: 'pointer',
});

export const menuButton = style({
  position: 'absolute',
  right: '1.6rem',
  background: 'none',
  border: 'none',
  fontSize: '1.8rem',
  color: vars.color.grey400,
  cursor: 'pointer',
});
