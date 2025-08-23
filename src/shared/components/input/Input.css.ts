import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const inputContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "1rem",
});

export const eyes = style({
  width: "3rem",
  height: "3rem",
  position: "absolute",
  right: "1rem",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: vars.color.grey400,
  transition: "color 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

export const inputStyle = style({
  width: "100%",
  height: "5rem",
  borderRadius: "1rem",
  border: `1px solid ${vars.color.grey700}`,
  padding: "0 1.6rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  color: vars.color.grey100,
  backgroundColor: vars.color.grey800,

  selectors: {
    "&:focus": {
      outline: "none",
      border: `1px solid ${vars.color.KU_Darkgreen}`,
    },
  },
});

export const inputIcon = style({
  width: "2.5rem",
  height: "2.5rem",
  cursor: "pointer",
});

export const maxLength = style({
  fontSize: "1.2rem",
  transform: "translateY(-50%)",
});
