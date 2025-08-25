import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  cursor: "pointer",
  borderRadius: "10px",
  border: `1px solid ${vars.color.grey500}`,
  height: "fit-content",
  width: "29rem",
  minWidth: "29rem",
  maxWidth: "29rem",
  padding: "1.2rem 1.6rem",
  flexShrink: 0,
});

export const topSection = style({
  display: "flex",
  gap: "1rem",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "fit-content",
});

export const textSection = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const title = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
  lineHeight: "1.4",
  color: vars.color.grey100,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const content = style({
  fontSize: "1.2rem",
  fontWeight: "normal",
  lineHeight: "1.5",
  color: vars.color.grey300,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
});

export const imageSection = style({
  flexShrink: 0,
  width: "100%",
  height: "20rem",
});

export const image = style({
  width: "100%",
  borderRadius: "10px",
  objectFit: "cover",
});

export const bottomSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const categoriesContainer = style({
  display: "flex",
  gap: "0.5rem",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const metaInfo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1.3rem",
  fontSize: "1.2rem",
  color: vars.color.grey400,
});

export const createdAt = style({});

export const commentCount = style({});

export const authorName = style({});
