import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    KU_Darkgreen: "#036B3F",
    White: "#FFFFFF",
    Black: "#000000",

    grey100: '#ECEFF5',
    grey200: '#D1D3DC',
    grey300: '#B6B8C1',
    grey400: '#9697A2',
    grey500: '#78787F',
    grey600: '#5A5A60',
    grey700: '#343438',
    grey800: '#212126',
    grey900: '#131316',

    Red: '#F03939',
    // Category colors
    Pink: '#FF0066',
    Blue: '#0046FF',
    Green: '#B4E50D',
    Orange: '#FF6D28',
    Purple: '#9400FF',
    Coral: '#FF9E9E',
    Ocean: '#00F5FF',
    Mint: '#00FF99',
    Lime: '#B4E50D',
    Yellow: '#FFEB00',
    Charcoal: '#007965',
  },
});

export type Color = keyof typeof vars.color;
