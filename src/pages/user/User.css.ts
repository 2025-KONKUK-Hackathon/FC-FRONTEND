import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const userContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "10rem",
  padding: "2rem",
  paddingTop: "10rem",
});

export const userInfoContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "2rem",
  color: vars.color.grey300,
});
export const userInfoImageContainer = style({
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  border: `1px solid ${vars.color.grey500}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const userInfoImage = style({
  width: "3rem",
  height: "3rem",
});

export const userInfoTextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "0.5rem",
  fontSize: "1.5rem",
});

export const userInfoName = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: vars.color.grey200,
});

export const userMenuContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
export const userMenu = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0",
    width: "100%",
    fontSize: "1.5rem",
    cursor: "pointer",
  },

  variants: {
    isActive: {
      true: {
        color: vars.color.KU_Darkgreen,
        borderBottom: `2px solid ${vars.color.KU_Darkgreen}`,
        fontWeight: "bold",
      },
      false: {
        color: vars.color.grey300,
        borderBottom: `2px solid ${vars.color.grey300}`,
      },
    },
  },
});
