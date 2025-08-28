import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const postDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 2.4rem',
  color: vars.color.White,
  gap: '1.2rem',
});

export const postHeader = style({
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1.8rem 0',
  backgroundColor: vars.color.grey900,
  zIndex: 2,
});

export const headerButton = style({
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
});

export const postContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const postTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const keywordsContainer = style({
  display: 'flex',
  gap: '0.8rem',
  margin: '1rem 0',
});

export const postTitle = style({
  margin: '1rem 0',
  fontSize: '2rem',
  fontWeight: 'bold',
  overflow: 'hidden',
});

export const postMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const writerName = style({
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: vars.color.grey200,
});

export const createdAt = style({
  fontSize: '1.2rem',
  color: vars.color.grey400,
});

export const imageWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const scrollButton = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: vars.color.KU_Darkgreen,
  borderRadius: '50%',
  cursor: 'pointer',
  opacity: 0.3,
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },
});
export const scrollButtonLeft = style({
  left: '1rem',
});
export const scrollButtonRight = style({
  right: '1rem',
});
export const scrollButtonIcon = style({
  width: '1.2rem',
  height: '1.2rem',
  color: vars.color.White,
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  flex: 1,
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollBehavior: 'smooth',
  WebkitOverflowScrolling: 'touch',
  scrollSnapType: 'x mandatory',

  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
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
  fontSize: '1.4rem',
  lineHeight: '1.7',
});

export const commentsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '7rem',
  borderTop: `2px dotted ${vars.color.grey200}`,
  paddingTop: '1.5rem',
  gap: '1rem',
});

export const commentsCount = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const commentList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const commentInputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  height: '7rem',
  bottom: 0,
  left: '50%',
  gap: '0.5rem',
  width: '100%',
  maxWidth: '43rem',
  padding: '1.4rem',
  backgroundColor: vars.color.grey900,
  transform: 'translateX(-50%)',
});

export const commentInputContainer = style({
  flex: 1,
});
