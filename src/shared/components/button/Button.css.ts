import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@styles/theme.css";

export const buttonStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    ":disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      fill: {
        color: vars.color.White,
      },
      outline: {
        backgroundColor: "transparent",
        border: `1.8px solid`,
      },
    },
    size: {
      small: {
        padding: "0.8rem 1.6rem",
        borderRadius: "8px",
        fontSize: "1.4rem",
      },
      medium: {
        padding: "1.2rem 2.4rem",
        borderRadius: "12px",
        fontSize: "1.6rem",
      },
      large: {
        width: "100%",
        padding: "2rem 0",
        borderRadius: "16px",
        fontSize: "1.6rem",
      },
    },
    bgColor: {
      Pink: {},
      Blue: {},
      Green: {},
      Orange: {},
      Purple: {},
      grey200: {},
      grey300: {},
      grey400: {},
      grey500: {},
      grey600: {},
      grey700: {},
      grey800: {},
      grey900: {},
      KU_Darkgreen: {},
      White: {},
      Black: {},
      grey100: {},
      Red: {},
      Coral: {},
      Ocean: {},
      Mint: {},
      Lime: {},
      Yellow: {},
      Charcoal: {},
      primary: {},
    },
  },
  compoundVariants: [
    // fill variant
    {
      variants: { variant: "fill", bgColor: "Pink" },
      style: { backgroundColor: vars.color.Pink },
    },
    {
      variants: { variant: "fill", bgColor: "Blue" },
      style: { backgroundColor: vars.color.Blue },
    },
    {
      variants: { variant: "fill", bgColor: "Green" },
      style: { backgroundColor: vars.color.Green },
    },
    {
      variants: { variant: "fill", bgColor: "Orange" },
      style: { backgroundColor: vars.color.Orange },
    },
    {
      variants: { variant: "fill", bgColor: "Purple" },
      style: { backgroundColor: vars.color.Purple },
    },
    {
      variants: { variant: "fill", bgColor: "grey200" },
      style: { backgroundColor: vars.color.grey200 },
    },
    {
      variants: { variant: "fill", bgColor: "grey300" },
      style: { backgroundColor: vars.color.grey300 },
    },
    {
      variants: { variant: "fill", bgColor: "grey400" },
      style: { backgroundColor: vars.color.grey400 },
    },
    {
      variants: { variant: "fill", bgColor: "grey500" },
      style: { backgroundColor: vars.color.grey500 },
    },
    {
      variants: { variant: "fill", bgColor: "grey600" },
      style: { backgroundColor: vars.color.grey600 },
    },
    {
      variants: { variant: "fill", bgColor: "grey700" },
      style: { backgroundColor: vars.color.grey700 },
    },
    {
      variants: { variant: "fill", bgColor: "grey800" },
      style: { backgroundColor: vars.color.grey800 },
    },
    {
      variants: { variant: "fill", bgColor: "grey900" },
      style: { backgroundColor: vars.color.grey900 },
    },
    {
      variants: { variant: "fill", bgColor: "KU_Darkgreen" },
      style: { backgroundColor: vars.color.KU_Darkgreen },
    },
    {
      variants: { variant: "fill", bgColor: "White" },
      style: { backgroundColor: vars.color.White, color: vars.color.Black },
    },
    {
      variants: { variant: "fill", bgColor: "Black" },
      style: { backgroundColor: vars.color.Black },
    },
    {
      variants: { variant: "fill", bgColor: "grey100" },
      style: { backgroundColor: vars.color.grey100 },
    },
    {
      variants: { variant: "fill", bgColor: "Red" },
      style: { backgroundColor: vars.color.Red },
    },
    {
      variants: { variant: "fill", bgColor: "Coral" },
      style: { backgroundColor: vars.color.Coral },
    },
    {
      variants: { variant: "fill", bgColor: "Ocean" },
      style: { backgroundColor: vars.color.Ocean },
    },
    {
      variants: { variant: "fill", bgColor: "Mint" },
      style: { backgroundColor: vars.color.Mint },
    },
    {
      variants: { variant: "fill", bgColor: "Lime" },
      style: { backgroundColor: vars.color.Lime },
    },
    {
      variants: { variant: "fill", bgColor: "Yellow" },
      style: { backgroundColor: vars.color.Yellow },
    },
    {
      variants: { variant: "fill", bgColor: "Charcoal" },
      style: { backgroundColor: vars.color.Charcoal },
    },
    // outline variant
    {
      variants: { variant: "outline", bgColor: "Pink" },
      style: { borderColor: vars.color.Pink, color: vars.color.Pink },
    },
    {
      variants: { variant: "outline", bgColor: "Blue" },
      style: { borderColor: vars.color.Blue, color: vars.color.Blue },
    },
    {
      variants: { variant: "outline", bgColor: "Green" },
      style: { borderColor: vars.color.Green, color: vars.color.Green },
    },
    {
      variants: { variant: "outline", bgColor: "Orange" },
      style: { borderColor: vars.color.Orange, color: vars.color.Orange },
    },
    {
      variants: { variant: "outline", bgColor: "Purple" },
      style: { borderColor: vars.color.Purple, color: vars.color.Purple },
    },
    {
      variants: { variant: "outline", bgColor: "grey200" },
      style: { borderColor: vars.color.grey200, color: vars.color.grey200 },
    },
    {
      variants: { variant: "outline", bgColor: "grey300" },
      style: { borderColor: vars.color.grey300, color: vars.color.grey300 },
    },
    {
      variants: { variant: "outline", bgColor: "grey400" },
      style: { borderColor: vars.color.grey400, color: vars.color.grey400 },
    },
    {
      variants: { variant: "outline", bgColor: "grey500" },
      style: { borderColor: vars.color.grey500, color: vars.color.grey500 },
    },
    {
      variants: { variant: "outline", bgColor: "grey600" },
      style: { borderColor: vars.color.grey600, color: vars.color.grey600 },
    },
    {
      variants: { variant: "outline", bgColor: "grey700" },
      style: { borderColor: vars.color.grey700, color: vars.color.grey700 },
    },
    {
      variants: { variant: "outline", bgColor: "grey800" },
      style: { borderColor: vars.color.grey800, color: vars.color.grey800 },
    },
    {
      variants: { variant: "outline", bgColor: "grey900" },
      style: { borderColor: vars.color.grey900, color: vars.color.grey900 },
    },
    {
      variants: { variant: "outline", bgColor: "KU_Darkgreen" },
      style: {
        borderColor: vars.color.KU_Darkgreen,
        color: vars.color.KU_Darkgreen,
      },
    },
    {
      variants: { variant: "outline", bgColor: "White" },
      style: { borderColor: vars.color.White, color: vars.color.White },
    },
    {
      variants: { variant: "outline", bgColor: "Black" },
      style: { borderColor: vars.color.Black, color: vars.color.Black },
    },
    {
      variants: { variant: "outline", bgColor: "grey100" },
      style: { borderColor: vars.color.grey100, color: vars.color.grey100 },
    },
    {
      variants: { variant: "outline", bgColor: "Red" },
      style: { borderColor: vars.color.Red, color: vars.color.Red },
    },
    {
      variants: { variant: "outline", bgColor: "Coral" },
      style: { borderColor: vars.color.Coral, color: vars.color.Coral },
    },
    {
      variants: { variant: "outline", bgColor: "Ocean" },
      style: { borderColor: vars.color.Ocean, color: vars.color.Ocean },
    },
    {
      variants: { variant: "outline", bgColor: "Mint" },
      style: { borderColor: vars.color.Mint, color: vars.color.Mint },
    },
    {
      variants: { variant: "outline", bgColor: "Lime" },
      style: { borderColor: vars.color.Lime, color: vars.color.Lime },
    },
    {
      variants: { variant: "outline", bgColor: "Yellow" },
      style: { borderColor: vars.color.Yellow, color: vars.color.Yellow },
    },
    {
      variants: { variant: "outline", bgColor: "Charcoal" },
      style: { borderColor: vars.color.Charcoal, color: vars.color.Charcoal },
    },
  ],
});
