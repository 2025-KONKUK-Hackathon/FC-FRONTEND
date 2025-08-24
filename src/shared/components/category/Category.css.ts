import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@styles/theme.css";

export const categoryStyle = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.8rem",
    border: "1px solid",
    backgroundColor: vars.color.grey800,
    width: "fit-content",
  },
  variants: {
    color: {
      Pink: {
        color: vars.color.Pink,
        borderColor: vars.color.Pink,
      },
      Blue: {
        color: vars.color.Blue,
        borderColor: vars.color.Blue,
      },
      Green: {
        color: vars.color.Green,
        borderColor: vars.color.Green,
      },
      Orange: {
        color: vars.color.Orange,
        borderColor: vars.color.Orange,
      },
      Purple: {
        color: vars.color.Purple,
        borderColor: vars.color.Purple,
      },
      grey200: {
        color: vars.color.grey200,
        borderColor: vars.color.grey200,
      },
      grey300: {
        color: vars.color.grey300,
        borderColor: vars.color.grey300,
      },
      grey400: {
        color: vars.color.grey400,
        borderColor: vars.color.grey400,
      },
      grey500: {
        color: vars.color.grey500,
        borderColor: vars.color.grey500,
      },
      grey600: {
        color: vars.color.grey600,
        borderColor: vars.color.grey600,
      },
      grey700: {
        color: vars.color.grey700,
        borderColor: vars.color.grey700,
      },
      grey800: {
        color: vars.color.grey800,
        borderColor: vars.color.grey800,
      },
      grey900: {
        color: vars.color.grey900,
        borderColor: vars.color.grey900,
      },
      KU_Darkgreen: {
        color: vars.color.KU_Darkgreen,
        borderColor: vars.color.KU_Darkgreen,
      },
      White: {
        color: vars.color.White,
        borderColor: vars.color.White,
      },
      Black: {
        color: vars.color.Black,
        borderColor: vars.color.Black,
      },
      grey100: {
        color: vars.color.grey100,
        borderColor: vars.color.grey100,
      },
      Red: {
        color: vars.color.Red,
        borderColor: vars.color.Red,
      },
      Coral: {
        color: vars.color.Coral,
        borderColor: vars.color.Coral,
      },
      Ocean: {
        color: vars.color.Ocean,
        borderColor: vars.color.Ocean,
      },
      Mint: {
        color: vars.color.Mint,
        borderColor: vars.color.Mint,
      },
      Lime: {
        color: vars.color.Lime,
        borderColor: vars.color.Lime,
      },
      Yellow: {
        color: vars.color.Yellow,
        borderColor: vars.color.Yellow,
      },
      Charcoal: {
        color: vars.color.Charcoal,
        borderColor: vars.color.Charcoal,
      },
      KU_Lightgreen: {
        color: vars.color.KU_Lightgreen,
        borderColor: vars.color.KU_Lightgreen,
      },
      KU_Green: {
        color: vars.color.KU_Green,
        borderColor: vars.color.KU_Green,
      },
      KU_Magenta: {
        color: vars.color.KU_Magenta,
        borderColor: vars.color.KU_Magenta,
      },
      KU_Yellow: {
        color: vars.color.KU_Yellow,
        borderColor: vars.color.KU_Yellow,
      },
      KU_Violet: {
        color: vars.color.KU_Violet,
        borderColor: vars.color.KU_Violet,
      },
      KU_Orange: {
        color: vars.color.KU_Orange,
        borderColor: vars.color.KU_Orange,
      },
      KU_DarkGray: {
        color: vars.color.KU_DarkGray,
        borderColor: vars.color.KU_DarkGray,
      },
      KU_Blue: {
        color: vars.color.KU_Blue,
        borderColor: vars.color.KU_Blue,
      },
      KU_CoolGray: {
        color: vars.color.KU_CoolGray,
        borderColor: vars.color.KU_CoolGray,
      },
      KU_WarmGray: {
        color: vars.color.KU_WarmGray,
        borderColor: vars.color.KU_WarmGray,
      },
      KU_LightGray: {
        color: vars.color.KU_LightGray,
        borderColor: vars.color.KU_LightGray,
      },
      KU_Beige: {
        color: vars.color.KU_Beige,
        borderColor: vars.color.KU_Beige,
      },
      KU_Black: {
        color: vars.color.KU_Black,
        borderColor: vars.color.KU_Black,
      },
    },
    size: {
      small: {
        padding: "0.25rem 0.5rem",
        fontSize: "1rem",
        gap: "0.5rem",
      },
      medium: {
        padding: "0.5rem 1rem",
        fontSize: "1.2rem",
        gap: "0.8rem",
      },
      large: {
        padding: "0.5rem 0.75rem",
        fontSize: "1.4rem",
        gap: "1rem",
      },
    },
  },
});

export const iconStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
  },
  variants: {
    size: {
      small: {
        width: "1rem",
        height: "1rem",
      },
      medium: {
        width: "1.2rem",
        height: "1.2rem",
      },
      large: {
        width: "1.4rem",
        height: "1.4rem",
      },
    },
  },
});
