import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const postDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',
  padding: '0 2.4rem',
  color: vars.color.White,
});

export const postHeader = style({
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.8rem 0',
  backgroundColor: vars.color.grey800,
});

export const headerButton = style({
  cursor: 'pointer',
});

export const postTitle = style({
  margin: '1rem 0',
  fontSize: '2.8rem',
  fontWeight: 'bold',
});

export const postMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '1.8rem',
});

export const writerName = style({
  fontSize: '1.6rem',
  fontWeight: 'bold',
  color: vars.color.Mint,
});

export const createdAt = style({
  fontSize: '1.2rem',
  color: vars.color.grey400,
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  marginBottom: '2.4rem',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollBehavior: 'smooth',
  WebkitOverflowScrolling: 'touch',
  scrollSnapType: 'x mandatory',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const postImage = style({
  width: '100%',
  height: '24rem',
  borderRadius: '10px',
  backgroundColor: vars.color.grey200,
  flexShrink: 0,
  objectFit: 'cover',
  scrollSnapAlign: 'start',
});

export const postContent = style({
  fontSize: '1.6rem',
  lineHeight: '1.6',
});

export const commentsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '3rem 0 7rem 0',
  paddingTop: '3rem',
  borderTop: `1px solid ${vars.color.grey200}`,
});

export const commentsCount = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
});

export const commentList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const commentInputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  gap: '0.8rem',
  padding: '1.4rem',
  backgroundColor: vars.color.grey800,
});

export const commentInputContainer = style({
  flex: 1,
});
