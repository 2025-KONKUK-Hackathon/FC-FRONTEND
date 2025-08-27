import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "1rem 0 0 1.6rem",
  position: "relative",
});

export const sectionTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  fontSize: "1.9rem",
  fontWeight: "bold",
  color: vars.color.White,
});

export const studentCouncilSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  paddingRight: "1.6rem",
});

export const studentCouncilContainer = style({
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const slideIndicatorContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9rem",
  marginTop: "1rem",
  height: "1.4rem",
});

export const slideIndicator = style({
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
  backgroundColor: vars.color.Red,
  cursor: "pointer",
  opacity: 0.7,
  transition: "all 0.3s ease",
});

export const slideIndicatorActive = style({
  backgroundColor: vars.color.Red,
  width: "3rem",
  height: "1.4rem",
  borderRadius: "1rem",
  opacity: 1,
});

export const generalPostsSection = style({
  display: "flex",
  flexDirection: "column",
});

export const createButtonWrapper = style({
  position: "fixed",
  bottom: "7rem",
  // 웹 환경 대응 위치 조정
  right: "50%",
  transform: "translateX(calc(215px - 1.3rem))",
  // 모바일 환경 대응 위치 조정
  "@media": {
    "screen and (max-width: 430px)": {
      right: "1.3rem",
      transform: "none",
    },
  },
})