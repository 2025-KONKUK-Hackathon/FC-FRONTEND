import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  width: "100%",
  height: "6rem",
  backgroundColor: vars.color.grey100,
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1000,
  //   boxShadow: "0 -2px 12px rgba(0, 0, 0, 0.08)",
});

export const navItem = recipe({
  base: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.6rem",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    textDecoration: "none", // Link 기본 스타일 제거
    transition: "color 0.3s ease",
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
    fontSize: "1.2rem",
    fontWeight: "500",
    transition: "color 0.2s ease",
  },
  variants: {
    isActive: {
      true: {
        color: vars.color.KU_Darkgreen,
        fontWeight: "600",
      },
      false: {
        color: vars.color.grey900,
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
