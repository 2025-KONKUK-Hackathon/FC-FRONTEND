import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '1rem 1.6rem 0 1.6rem',
  position: 'relative',
});

export const sectionTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1.9rem',
  fontWeight: 'bold',
  color: vars.color.White,
  marginTop: '1rem',
  marginBottom: '1rem',
});

export const studentCouncilSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const studentCouncilContainer = style({
  display: 'flex',
  gap: '1rem',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const slideIndicatorContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.9rem',
  marginTop: '1rem',
  height: '1.4rem',
});

export const slideIndicator = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  backgroundColor: vars.color.grey600,
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'all 0.3s ease',
});

export const slideIndicatorActive = style({
  backgroundColor: vars.color.grey500,
  width: '3rem',
  height: '1.4rem',
  borderRadius: '1rem',
  opacity: 1,
});

export const filterSection = style({
  // paddingRight: '1.6rem',
  marginTop: '1.2rem',
});

export const filterContainer = style({
  display: 'flex',
  gap: '1rem',
  paddingBottom: '0.5rem',
  // todo: 카테고리 추가 시 가로 스크롤 지원
});

export const filterDropdownWrapper = style({
  flex: '1',
  minWidth: '0', // flex item이 텍스트 길이보다 작아질 수 있도록
});

export const generalPostsSection = style({
  display: 'flex',
  flexDirection: 'column',
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
