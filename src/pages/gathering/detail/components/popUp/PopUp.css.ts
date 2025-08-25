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
    borderRadius: "1rem",
    padding: "2rem",
    width: "80%",
    height: "45%",
    background: vars.color.grey800,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.5rem",
});



export const popUpHeaderTitle = style({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: vars.color.grey100,
    position: "relative",
});

export const popUpHeaderClose = style({
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
});

export const popUpContent = style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    overflowY: "auto",
});

export const popUpContentItem = style({ 
    display: "flex",
    width: "100%",
    height: "13rem",
    alignItems: "center",
    flexDirection: "row",
    gap: "1rem",
    backgroundColor: vars.color.grey800,
    border: `1px solid ${vars.color.grey700}`,
    padding:"1rem",
    borderRadius: "1rem",
});

export const popUpContentItemInfo = style({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

});

export const popUpContentItemRanking = style({
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: vars.color.grey100,
    width: "2rem",
}); 

export const popUpContentItemName = style({
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: vars.color.grey100,
});

export const popUpContentItemPhoneNumber = style({
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: vars.color.grey200,
});