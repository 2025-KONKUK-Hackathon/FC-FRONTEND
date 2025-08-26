import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  padding: "2rem",
  gap: "1rem",
  backgroundColor: vars.color.grey700,
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const title = style({
  fontSize: "2rem",

  color: vars.color.White,
});

export const icon = style({
  width: "3rem",
  height: "3rem",
});

export const description = style({
  fontSize: "1.4rem",

  color: vars.color.grey300,
});

export const error = style({
  fontSize: "1.4rem",

  color: vars.color.Red,
});
