import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    KU_Darkgreen: "#036B3F",
    White: "#FFFFFF",
    Black: "#000000",
    primary: "#036B3F",

    grey100: "#ECEFF5",
    grey200: "#D1D3DC",
    grey300: "#B6B8C1",
    grey400: "#9697A2",
    grey500: "#78787F",
    grey600: "#5A5A60",
    grey700: "#343438",
    grey800: "#212126",
    grey900: "#131316",

    Sub0: "#00A8A1",
    Sub1: "#F03939",
    Sub2: "#E16E05",
    Sub3: "#02B540",

    Login: "#0E5F39",
  },
});
