import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const overlay = style({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
});

export const popUpWrapper = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  borderRadius: "1.2rem",
  padding: "2rem",
  width: "90%",
  height: "40rem",
  background: vars.color.grey800,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  border: `1px solid ${vars.color.grey700}`,

  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const popUpHeaderTitle = style({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: vars.color.grey100,
  paddingBottom: "1.5rem",
  borderBottom: `1px solid ${vars.color.grey700}`,
});

export const popUpHeaderClose = style({
  position: "absolute",
  bottom: "1.5rem",
  right: "0rem",
  width: "2rem",
  height: "2rem",
  cursor: "pointer",
  color: vars.color.grey400,
});

export const popUpContent = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  overflowY: "auto",
  flex: 1,
  padding: "0 0.5rem",
});

export const popUpContentItem = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  gap: "1rem",
  border: `1px solid ${vars.color.grey600}`,
  padding: "1.2rem",
  borderRadius: "0.8rem",
});

export const popUpContentItemInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  flex: 1,
});

export const popUpContentItemTopInfo = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  color: vars.color.grey100,
  fontSize: "1.2rem",
  fontWeight: "bold",
});

export const popUpContentItemRanking = style({
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: vars.color.grey100,
  width: "2rem",
});

export const popUpContentItemName = style({
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: vars.color.grey100,
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
});

export const popUpContentItemToHost = style({
  fontSize: "1rem",
  color: vars.color.grey300,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});
