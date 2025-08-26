import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  padding: "5rem 0",
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "0 auto",
  width: "100%",
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
});

export const icon = style({
  width: "2.5rem",
  height: "2.5rem",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "bold",
  color: vars.color.White,
});

export const description = style({
  fontSize: "1.5rem",
  color: vars.color.grey300,
  padding: "0 2rem",
});

export const row = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
});
