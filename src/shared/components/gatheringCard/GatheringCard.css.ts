import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  gap: '1.3rem',

  padding: '1rem 0.5rem 1rem 0.5rem',
  height: '11.3rem',
  border: `1px solid ${vars.color.grey700}`,
  borderRadius: '0.8rem',

  backgroundColor: vars.color.grey800,
});

export const imageContainer = style({
  position: 'relative',

  width: '35%',
  aspectRatio: '16 / 9',
});

export const image = style({
  width: '100%',
  height: '100%',
  borderRadius: '0.8rem',
  objectFit: 'cover',
  backgroundColor: vars.color.grey900,
});

export const temp = style({
  width: '100%',
  height: '100%',
  borderRadius: '0.8rem',
  backgroundColor: 'white',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '0.8rem',
  flex: 1,
  padding: '0.2rem 0',
  minWidth: 0,
});

export const headerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  minWidth: 0,
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: '600',
  color: vars.color.White,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.3',
  width: '100%',
  minWidth: 0,
});

export const contentText = style({
  fontSize: '1.1rem',
  color: vars.color.grey300,
  lineHeight: '1.4',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  // marginTop: '0.4rem',
  marginBottom: 'auto',
  alignSelf: 'flex-start',
});

export const infoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const bottomRow = style({
  display: 'flex',
  // justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  marginTop: 'auto',
});

export const leftInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const categoryText = style({
  fontSize: '1rem',
  color: vars.color.grey400,
  fontWeight: '500',
});

export const countContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  backgroundColor: vars.color.grey700,
  padding: '0.3rem 0.6rem',
  borderRadius: '0.4rem',
});

export const count = style({
  color: vars.color.White,
  fontSize: '1.1rem',
  fontWeight: '500',
});

export const icon = style({
  width: '1.2rem',
  height: '1.2rem',
});

export const footer = style({
  color: vars.color.grey400,
  fontSize: '1.2rem',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '0.2rem',
});
