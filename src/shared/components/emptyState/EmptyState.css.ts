import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  textAlign: 'center',
  minHeight: '20rem',
  color: vars.color.grey400,
});

export const iconWrapper = style({
  marginBottom: '1.5rem',
  padding: '1.5rem',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${vars.color.grey700} 0%, ${vars.color.grey600} 100%)`,
  boxShadow: `0 4px 12px ${vars.color.Black}20`,
});

export const icon = style({
  fontSize: '3rem',
  display: 'block',
  opacity: 0.7,
});

export const message = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: vars.color.White,
  marginBottom: '0.8rem',
  lineHeight: 1.4,
});

export const subMessage = style({
  fontSize: '1.4rem',
  color: vars.color.grey300,
  lineHeight: 1.5,
  maxWidth: '30rem',
});