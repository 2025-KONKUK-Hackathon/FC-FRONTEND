import { style } from "@vanilla-extract/css";

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",

  width: "100%",
  height: "100vh",
  padding: "8rem 0",
});

export const dotTransition = style({
  transition: "all 150ms ease-linear",
});

export const airplaneTransition = style({
  transition: "all 150ms ease-linear",
});
