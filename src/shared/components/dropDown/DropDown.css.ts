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
    border: `2px solid ${vars.color.grey700}`,
    borderRadius: '8px',
    color: vars.color.White,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':disabled': {
      backgroundColor: vars.color.grey600,
      color: vars.color.grey400,
      cursor: 'not-allowed',
    },
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
    },
    isSelected: {
      true: {
        borderColor: '#059212',
        color: '#059212',
      },
      false: {},
    },
  },
});

export const toggleIcon = style({
  marginLeft: '1rem',
  flexShrink: 0, // 아이콘이 줄어들지 않도록
  display: 'flex',
  alignItems: 'center',
});

export const dropdownText = style({
  flex: 1,
  minWidth: 0, // 텍스트가 줄어들 수 있도록
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const dropdownTriggerSelected = style({
  backgroundColor: vars.color.KU_Darkgreen,
  borderColor: vars.color.KU_Darkgreen,
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
    border: `1px solid ${vars.color.grey700}`,
    borderRadius: '8px',
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
      false: {},
    },
  },
});

export const dropdownOption = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: `1px solid ${vars.color.grey700}`,
    backgroundColor: vars.color.grey900,
    color: vars.color.White,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: vars.color.KU_Darkgreen,
    },
    ':focus': {
      backgroundColor: vars.color.KU_Darkgreen,
    },
    ':disabled': {
      color: vars.color.grey300,
      cursor: 'not-allowed',
    },
    selectors: {
      '&:disabled:hover': {
        backgroundColor: 'transparent',
      },
    },
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
    },
  },
});

export const dropdownIcon = recipe({
  base: {
    width: '1.2rem',
    height: '1.2rem',
    color: vars.color.grey200,
  },
  variants: {
    isSelected: {
      true: {
        color: '#059212',
      },
    },
  },
});
