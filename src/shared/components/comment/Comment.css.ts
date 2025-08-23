import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const commentWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    gap: '1rem',
    padding: '1.6rem',
    borderRadius: '12px',
    border: `2px solid ${vars.color.Charcoal}`,
    backgroundColor: vars.color.grey800,
    color: vars.color.White,
  },
  variants: {
    variant: {
      default: {
        marginBottom: '1.6rem',
      },
      reply: {
        margin: '0 0 1.2rem 2.2rem',
        backgroundColor: vars.color.grey700,
      }
    },
  }
});

export const commentHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.8rem',
});

export const authorInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const authorAvatar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '100px',
  backgroundColor: vars.color.grey300,
  fontSize: '1.4rem',
  fontWeight: '700',
  color: vars.color.White,
  overflow: 'hidden',
});

export const authorDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const authorName = style({
  fontSize: '1.4rem',
  fontWeight: '600',
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
  marginBottom: '0.6rem',
  padding: '0 0.4rem',
  fontSize: '1.4rem',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export const commentFooter = style({
  display: 'flex',
  gap: '1.2rem',
});

export const likeButton = recipe({
  base: {
    padding: '0.4rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  variants: {
    isLiked: {
      true: {
        color: vars.color.Red,
      },
      false: {
        color: vars.color.White,
      }
    }
  }
});

export const replyFormWrapper = style({
  marginTop: '1.2rem',
  padding: '1.2rem',
  border: `1px solid ${vars.color.grey200}`,
  borderRadius: '8px',
  backgroundColor: vars.color.grey700,
});

export const replyInput = style({
  width: '100%',
  height: '8rem',
  padding: '1.2rem',
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: '8px',
  fontSize: '1.4rem',
  ':focus': {
    borderColor: vars.color.Mint,
  }
});

export const replyFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.8rem',
  marginTop: '0.8rem',
});

export const repliesContainer = style({
  marginTop: '1.2rem',
});
