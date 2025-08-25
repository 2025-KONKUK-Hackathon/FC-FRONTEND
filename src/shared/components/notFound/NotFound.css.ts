import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shakeAnimation = keyframes({
  "0%, 100%": {
    transform: "rotate(0deg)",
  },
  "10%": {
    transform: "rotate(-10deg)",
  },
  "20%": {
    transform: "rotate(10deg)",
  },
  "30%": {
    transform: "rotate(-8deg)",
  },
  "40%": {
    transform: "rotate(8deg)",
  },
  "50%": {
    transform: "rotate(-5deg)",
  },
  "60%": {
    transform: "rotate(5deg)",
  },
  "70%": {
    transform: "rotate(-3deg)",
  },
  "80%": {
    transform: "rotate(3deg)",
  },
  "90%": {
    transform: "rotate(-1deg)",
  },
});

const rainAnimation = keyframes({
  "0%": {
    transform: "translateY(-100px) translateX(0px)",
    opacity: 0,
  },
  "10%": {
    opacity: 1,
  },
  "90%": {
    opacity: 1,
  },
  "100%": {
    transform: "translateY(200px) translateX(20px)",
    opacity: 0,
  },
});

export const notFound = style({
  width: "100%",
  height: "100vh",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  boxSizing: "border-box",
  overflow: "hidden",

  color: vars.color.White,
});

export const umbrellaContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const notFoundEmoji = style({
  fontSize: "20rem",
  animation: `${shakeAnimation} 4s ease-in-out infinite`,
  transformOrigin: "center",
  zIndex: 2,
});

export const rainContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
});

export const raindrop = style({
  position: "absolute",
  fontSize: "2rem",
  animation: `${rainAnimation} 2s linear infinite`,
  opacity: 0,

  selectors: {
    "&:nth-child(1)": {
      left: "20%",
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      left: "30%",
      animationDelay: "0.3s",
    },
    "&:nth-child(3)": {
      left: "40%",
      animationDelay: "0.6s",
    },
    "&:nth-child(4)": {
      left: "50%",
      animationDelay: "0.9s",
    },
    "&:nth-child(5)": {
      left: "60%",
      animationDelay: "1.2s",
    },
    "&:nth-child(6)": {
      left: "70%",
      animationDelay: "1.5s",
    },
    "&:nth-child(7)": {
      left: "80%",
      animationDelay: "1.8s",
    },
    "&:nth-child(8)": {
      left: "90%",
      animationDelay: "2.1s",
    },
  },
});

export const notFoundTextWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const notFound404 = style({
  fontSize: "4rem",
  fontWeight: "bold",
});

export const notFoundText = style({
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1.5",
});
