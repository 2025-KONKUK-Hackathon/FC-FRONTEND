import { globalStyle } from '@vanilla-extract/css';
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

globalStyle("main", {
  minHeight: "100vh",
  maxWidth: "430px",
  width: "100%",
  margin: "0 auto",
  flexGrow: 1,
  background: vars.color.grey900,
});
