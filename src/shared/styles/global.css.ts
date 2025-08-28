import { globalStyle, keyframes } from '@vanilla-extract/css';
import '@styles/layers.css.ts';
import '@styles/reset.css.ts';
import { vars } from '@styles/theme.css.ts';

globalStyle('html', {
  fontSize: '62.5%',
  scrollPaddingTop: '7rem',
});

globalStyle('body', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  background: vars.color.grey800,
});

globalStyle('main', {
  minHeight: '100vh',
  maxWidth: '430px',
  width: '100%',
  margin: '0 auto',
  flexGrow: 1,
  background: vars.color.grey900,
});

export const sparkleAnimation = keyframes({
  '0%': {
    transform: 'scale(1) rotate(0deg)',
    opacity: 0.7,
  },
  '50%': {
    transform: 'scale(1.2) rotate(180deg)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1) rotate(0deg)',
    opacity: 0.7,
  },
});
