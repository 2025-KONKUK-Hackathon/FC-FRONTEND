import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  width: '100%',
  maxWidth: '430px',
  display: 'flex',
  height: '6rem',
  backgroundColor: vars.color.grey900,
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '0.6rem',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  variants: {
    isActive: {
      true: {
        color: vars.color.KU_Darkgreen,
      },
      false: {
        color: vars.color.grey500,
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const navText = recipe({
  base: {
    fontSize: '1.2rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  variants: {
    isActive: {
      true: {
        color: vars.color.KU_Darkgreen,
        fontWeight: '600',
      },
      false: {
        color: vars.color.grey400,
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const icon = recipe({
  base: {
    width: '2.5rem',
    height: '2.5rem',
    fill: vars.color.grey500,
  },
  variants: {
    isActive: {
      true: {
        fill: vars.color.KU_Darkgreen,
      },
    },
  },
});
