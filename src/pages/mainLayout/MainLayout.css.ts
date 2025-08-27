import { style } from "@vanilla-extract/css";

export const layout = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingTop: "4.5rem",
  paddingBottom: "6rem",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "calc(100vh - 12rem)",
});
