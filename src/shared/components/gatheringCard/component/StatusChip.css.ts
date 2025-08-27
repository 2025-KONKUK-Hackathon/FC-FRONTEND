import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    position: 'absolute',
    top: '0.2rem',
    left: '0.2rem',

    width: 'auto',
    height: 'auto',
    padding: '0.3rem',
    borderRadius: '0.3rem',

    backgroundColor: vars.color.Black,

    fontSize: '0.75rem',
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
