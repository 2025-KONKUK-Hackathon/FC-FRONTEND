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
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.05)',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateY(0)',
    ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255, 255, 255, 0.05)',
        backgroundColor: '#024d37',
    },
    ':active': {
        transform: 'translateY(0)',
        transition: 'all 0.15s ease',
        boxShadow: '0 2px 8px rgba(255, 255, 255, 0.1)',
    },
})

export const icon = style({
    fill: vars.color.White,
    fontSize: '1.6rem',
    transition: 'transform 0.3s ease',
    selectors: {
        [`${wrapper}:hover &`]: {
            transform: 'rotate(12deg) scale(1.1)',
        }
    }
})