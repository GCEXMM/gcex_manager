import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

export default styled(Avatar)(({ theme, ownerState }) => {
  const { palette, functions, boxShadows, typography } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients, transparent, white } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightRegular } = typography;

  const backgroundValue =
    bgColor === 'transparent'
      ? transparent.main
      : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

  let sizeValue;

  switch (size) {
    case 'xs':
      sizeValue = {
        height: pxToRem(24),
        width: pxToRem(24),
        fontSize: fontSize.xs,
      };
      break;
    case 'sm':
      sizeValue = {
        height: pxToRem(36),
        width: pxToRem(36),
        fontSize: fontSize.sm,
      };
      break;
    case 'lg':
      sizeValue = {
        height: pxToRem(58),
        width: pxToRem(58),
        fontSize: fontSize.lg,
      };
      break;
    case 'xl':
      sizeValue = {
        height: pxToRem(74),
        width: pxToRem(74),
        fontSize: fontSize.xl,
      };
      break;
    case 'xxl':
      sizeValue = {
        height: pxToRem(110),
        width: pxToRem(110),
        fontSize: fontSize.xxl,
      };
      break;
    default:
      sizeValue = {
        height: pxToRem(48),
        width: pxToRem(48),
        fontSize: fontSize.md,
      };
  }

  return {
    background: backgroundValue,
    color: white.main,
    fontWeight: fontWeightRegular,
    boxShadow: boxShadows[shadow],
    ...sizeValue,
  };
});
