import { vars } from "@shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const gatheringWrapper = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  flexDirection: "column",
  paddingBottom: "2rem",
  position: "relative",
});

export const gatheringDetailBackButton = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.grey200,
  cursor: "pointer",
  position: "absolute",
  top: "1rem",
  left: "1rem",
});

export const gatheringDetailWrapper = style({
  display: "flex",
  gap: "2rem",
  width: "100%",
  flexDirection: "column",
  padding: "0.5rem 1.5rem",
});

export const gatheringDetailImage = style({
  width: "100%",
  height: "30rem",
  objectFit: "cover",
});

export const gatheringDetailHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const gatheringDetailHeaderTop = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const gatheringDetailDate = style({
  fontSize: "1.2rem",
  color: vars.color.grey400,
});

export const gatheringDetailStudyLeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: vars.color.grey200,
});

export const gatheringDetailTitle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: vars.color.grey100,
});

export const gatheringDetailStudyLeaderIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.grey200,
});

export const gatheringDetailContentWrapper = style({
  display: "flex",
  gap: "3rem",
  width: "100%",
  flexDirection: "column",
});

export const gatheringDetailContentTitle = style({
  width: "100%",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: vars.color.grey100,
  borderBottom: `1px solid ${vars.color.grey200}`,
  paddingBottom: "1rem",
});

export const gatheringDetailButtonWrapper = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
});

export const gatheringDetailContent = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  flexDirection: "column",
  color: vars.color.grey300,
});

export const gatheringDetailDescriptionTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: vars.color.grey100,
  marginBottom: "1rem",
});

export const gatheringDetailDescription = style({
  lineHeight: "1.5",
  width: "100%",
  wordBreak: "keep-all",
});

export const gatheringDetailContentPeriod = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  flexDirection: "column",
});

export const gatheringDetailDescriptionTitleIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.grey200,
});

export const gatheringDetailImageWrapper = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

