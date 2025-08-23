import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css'

export const container = style({
    display: 'flex',
    width: '100%',
    height: '6rem',
    backgroundColor: vars.color.grey100,
});

export const navItem = style({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '0.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.color.grey500,
    fontSize: '1.3rem',
})