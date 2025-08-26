import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "5rem 0",
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "3.5rem",
  fontWeight: 700,
  color: vars.color.White,
});

export const description = style({
  fontSize: "2rem",
  color: vars.color.grey400,
  padding: "2rem",
});

export const row = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  color: vars.color.grey300,
  fontSize: "1.6rem",
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
  marginBottom: "1rem",
});

export const icon = style({
  width: "4rem",
  height: "4rem",
});
