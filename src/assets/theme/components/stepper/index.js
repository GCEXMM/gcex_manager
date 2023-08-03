import colors from '../../base/colors';
import borders from '../../base/borders';
import pxToRem from '../../functions/pxToRem';

const { transparent } = colors;
const { borderRadius } = borders;

const stepper = {
  styleOverrides: {
    root: {
      background: transparent.main,
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,

      '&.MuiPaper-root': {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
