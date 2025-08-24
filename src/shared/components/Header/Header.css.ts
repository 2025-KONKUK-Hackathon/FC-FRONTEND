import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '4.5rem',
  backgroundColor: vars.color.White,
  // borderBottom: `1px solid ${vars.color.grey100}`,
  padding: '0 1.6rem',
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: vars.color.KU_Darkgreen,
  margin: 0,
});

export const backButton = style({
  position: 'absolute',
  left: '1.6rem',
  marginTop: '0.1rem',
  background: 'none',
  border: 'none',
  fontSize: '1.8rem',
  color: vars.color.grey400,
  borderRadius: '4px',
});