import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const userContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '5rem',
  padding: '2rem',
});

export const userInfoContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',
  color: vars.color.grey300,
});
export const userInfoImageContainer = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: `1px solid ${vars.color.grey500}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const userInfoImage = style({
  width: '3rem',
  height: '3rem',
});

export const userInfoTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '1.5rem',
});

export const userInfoName = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: vars.color.grey200,
});

export const userStampContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
});

export const userStampCirclesContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
});
export const userStampCircle = recipe({
  base: {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    border: `2px dotted ${vars.color.grey500}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  variants: {
    color: {
      Blue: {
        borderColor: '#9ECAD6',
      },
      Navy: {
        borderColor: '#748DAE',
      },
      Pink: {
        borderColor: '#FFEAEA',
      },
      Coral: {
        borderColor: '#F5CBCB',
      },
      White: {
        borderColor: vars.color.White,
      },
    },
  },
});

export const userStampCircleFilled = recipe({
  base: {},
  variants: {
    color: {
      Blue: {
        backgroundColor: '#9ECAD6',
      },
      Navy: {
        backgroundColor: '#748DAE',
      },
      Pink: {
        backgroundColor: '#FFEAEA',
      },
      Coral: {
        backgroundColor: '#F5CBCB',
      },
      White: {
        backgroundColor: vars.color.White,
      },
    },
  },
});

export const userStampImage = style({
  width: '5rem',
  height: '5rem',
});

export const userStampText = style({
  fontSize: '1.4rem',
  color: vars.color.grey300,
  textAlign: 'center',
  lineHeight: '1.5',
});

export const userMenuContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
export const userMenu = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0',
    width: '100%',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },

  variants: {
    isActive: {
      true: {
        color: vars.color.KU_Darkgreen,
        borderBottom: `2px solid ${vars.color.KU_Darkgreen}`,
        fontWeight: 'bold',
      },
      false: {
        color: vars.color.grey300,
        borderBottom: `2px solid ${vars.color.grey300}`,
      },
    },
  },
});

export const userPostContainer = style({
  width: '100%',
  height: '100%',
});
export const userGatheringContainer = style({
  width: '100%',
  height: '100%',
});
