import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

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

export const navItem = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "0.6rem",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.grey500,
  fontSize: "1.4rem",
});

export const navText = style({
  color: vars.color.grey900,
});
