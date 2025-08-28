import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
  width: '100%',
  padding: '1.2rem 1.6rem 1.2rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  cursor: 'pointer',
  borderBottom: `1px solid ${vars.color.grey700}`,
});

export const topSection = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-start',
});

export const textSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  minWidth: 0, // flex item이 shrink할 수 있도록 설정
});

export const title = style({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  lineHeight: '1.4',
  color: vars.color.grey100,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const content = style({
  fontSize: '1.2rem',
  fontWeight: 'normal',
  lineHeight: '1.5',
  color: vars.color.grey300,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const imageSection = style({
  flexShrink: 0,
});

export const image = style({
  width: '60px',
  height: '60px',
  borderRadius: '10px',
  objectFit: 'cover',
});

export const bottomSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const categoriesContainer = style({
  display: 'flex',
  gap: '0.5rem',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const metaInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.3rem',
  fontSize: '1.2rem',
  color: vars.color.grey400,
});

// todo: 필요하면 추가하기
export const createdAt = style({});

export const commentCount = style({});

export const authorName = style({});
