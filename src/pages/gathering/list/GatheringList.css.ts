import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { sparkleAnimation } from '@shared/styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1rem',
  gap: '2rem',
  position: 'relative',
});

export const sectionTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1.9rem',
  fontWeight: 'bold',
  color: vars.color.White,
});

export const motivationalSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.5rem',
  padding: '1.5rem 0',
  marginLeft: '0.7rem',
  // background: `linear-gradient(135deg, ${vars.color.KU_Darkgreen} 0%, ${vars.color.KU_Darkgreen} 100%)`,
  borderRadius: '1.2rem',
  position: 'relative',
  overflow: 'hidden',
});

export const motivationalText = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: vars.color.White,
  textAlign: 'center',
  lineHeight: '1.4',
  zIndex: 2,
});

export const motivationalSubText = style({
  fontSize: '1.2rem',
  color: vars.color.White,
  opacity: 0.9,
  textAlign: 'center',
  zIndex: 2,
});

export const sparkleLeft = style({
  position: 'absolute',
  top: '15px',
  left: '58%',
  fontSize: '1.2rem',
  opacity: 0.7,
  animation: `${sparkleAnimation} 2s ease-in-out infinite`,
  zIndex: 1,
});

export const sparkleRight = style({
  position: 'absolute',
  bottom: '15px',
  right: '15px',
  fontSize: '1rem',
  opacity: 0.6,
  animation: `${sparkleAnimation} 2s ease-in-out infinite 1s`,
  zIndex: 1,
});

export const filterSection = style({
  // todo: 필터 개수 늘어났을 때 필요
});

export const filterContainer = style({
  display: 'flex',
  gap: '1rem',
  // todo: 카테고리 추가 시 가로 스크롤 지원
});

export const filterDropdownWrapper = style({
  flex: '1',
  minWidth: '0', // flex item이 텍스트 길이보다 작아질 수 있도록
});

export const generalPostsSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const createButtonWrapper = style({
  position: 'fixed',
  bottom: '7rem',
  // 웹 환경 대응 위치 조정
  right: '50%',
  transform: 'translateX(calc(215px - 1.3rem))',
  // 모바일 환경 대응 위치 조정
  '@media': {
    'screen and (max-width: 430px)': {
      right: '1.3rem',
      transform: 'none',
    },
  },
});
