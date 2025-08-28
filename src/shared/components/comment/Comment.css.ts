import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const commentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.2rem 1.6rem',
  borderRadius: '12px',
  border: `2px solid ${vars.color.Charcoal}`,
  backgroundColor: vars.color.grey800,
  color: vars.color.White,
});

export const commentHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const authorAvatarIcon = style({
  width: '2.6rem',
  height: '2.6rem',
});

export const authorInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexGrow: 1,
});

export const authorDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const authorName = style({
  fontSize: '1.3rem',
  fontWeight: 'bold',
});

export const commentDate = style({
  fontSize: '1.2rem',
  color: vars.color.grey500,
});

export const actionButton = style({
  padding: '0.4rem',
  fontSize: '1.2rem',
  cursor: 'pointer',
});

export const commentContent = style({
  fontSize: '1.3rem',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});
