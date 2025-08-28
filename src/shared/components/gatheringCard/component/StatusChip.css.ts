import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    position: 'absolute',
    top: '0.5rem',
    left: '0.5rem',

    width: 'auto',
    height: 'auto',
    padding: '0.4rem 0.6rem',
    borderRadius: '0.4rem',

    backgroundColor: vars.color.Black,

    fontSize: '1rem',
    fontWeight: '500',
  },
  variants: {
    status: {
      NOT_STARTED: {
        color: vars.color.Lime,
        border: `1px solid ${vars.color.Lime}`,
      },
      IN_PROGRESS: {
        color: vars.color.Mint,
        border: `1px solid ${vars.color.Mint}`,
      },
      FINISHED: {
        color: vars.color.Ocean,
        border: `1px solid ${vars.color.Ocean}`,
      },
    },
  },
});
