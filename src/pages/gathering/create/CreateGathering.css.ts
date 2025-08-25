import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "5rem 2rem",
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "3.5rem",
  fontWeight: 700,
  marginBottom: "16px",
  color: vars.color.White,
});

export const description = style({
  fontSize: "2rem",
  color: vars.color.grey400,
});

export const row = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  color: vars.color.grey300,
  fontSize: "1.6rem",
});
