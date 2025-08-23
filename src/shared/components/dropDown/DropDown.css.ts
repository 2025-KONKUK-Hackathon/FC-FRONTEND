import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const dropdownContainer = style({
  position: 'relative',
  width: '100%',
});

export const dropdownTrigger = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: vars.color.Charcoal,
    color: vars.color.White,
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: vars.color.grey600,
      color: vars.color.grey400,
      cursor: 'not-allowed',
    }
  },
  variants: {
    size: {
      small: {
        padding: '0.8rem 1.2rem',
        fontSize: '1.2rem',
      },
      medium: {
        padding: '1.2rem 1.6rem',
        fontSize: '1.4rem',
      },
      large: {
        padding: '1.6rem 2rem',
        fontSize: '1.6rem',
      }
    },
  }
});

export const placeholder = style({
  color: vars.color.grey200,
});

export const dropdownMenu = recipe({
  base: {
    position: 'absolute',
    top: 'calc(100% + 0.4rem)',
    left: 0,
    right: 0,
    border: `2px solid ${vars.color.Charcoal}`,
    borderRadius: '8px',
    backgroundColor: vars.color.White,
    zIndex: 1,
    overflowY: 'auto',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'all 0.2s ease',
  },
  variants: {
    isOpen: {
      true: {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      },
      false: {}
    }
  }
});

export const dropdownOption = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: 'none',
    color: vars.color.Charcoal,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: vars.color.grey300,
    },
    ':focus': {
      backgroundColor: vars.color.Charcoal,
      color: vars.color.White,
    },
    ':disabled': {
      color: vars.color.grey300,
      cursor: 'not-allowed',
    },
    selectors: {
      '&:disabled:hover': {
        backgroundColor: 'transparent',
      }
    }
  },
  variants: {
    size: {
      small: {
        padding: '0.8rem 1.2rem',
        fontSize: '1.2rem',
      },
      medium: {
        padding: '1.2rem 1.6rem',
        fontSize: '1.4rem',
      },
      large: {
        padding: '1.6rem 2rem',
        fontSize: '1.6rem',
      },
    }
  },
});
