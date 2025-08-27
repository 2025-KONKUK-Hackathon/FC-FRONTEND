import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const wrapper = style({
    display: 'flex',
    gap: '0.6rem',
    padding: '1rem 1.4rem',
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.KU_Darkgreen,
    fontSize: '1.6rem',
    fontWeight: '300',
    color: vars.color.White,
    borderRadius: '999px',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
})

export const icon = style({
    fill: vars.color.White,
    fontSize: '1.6rem',
})