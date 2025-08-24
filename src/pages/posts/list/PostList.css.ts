import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "1rem 0",
});

export const studentCouncilSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const sectionTitle = style({
  fontSize: "1.9rem",
  fontWeight: "bold",
  color: vars.color.KU_Lightgreen,
  margin: "0 1.6rem",
});

export const studentCouncilContainer = style({
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  padding: "0 1.6rem",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const generalPostsSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});