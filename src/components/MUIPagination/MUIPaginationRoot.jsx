import styled from '@emotion/styled';
import MUIButton from '../MUIButton';

export default styled(MUIButton)(({ theme, ownerState }) => {
  const { borders, functions, typography, palette } = theme;
  const { variant, paginationSize, active } = ownerState;

  const { borderColor } = borders;
  const { pxToRem } = functions;
  const { fontWeightRegular, size: fontSize } = typography;
  const { light, grey } = palette;

  // width, height, minWidth and minHeight values
  let sizeValue = pxToRem(36);

  if (paginationSize === 'small') {
    sizeValue = pxToRem(30);
  } else if (paginationSize === 'large') {
    sizeValue = pxToRem(46);
  }

  return {
    borderColor,
    margin: `0 ${pxToRem(2)}`,
    pointerEvents: active ? 'none' : 'auto',
    fontWeight: fontWeightRegular,
    fontSize: fontSize.sm,
    width: sizeValue,
    minWidth: sizeValue,
    height: sizeValue,
    minHeight: sizeValue,

    '&:disabled': {
      backgroundColor: light.main,
      borderColor,
    },

    '&:hover, &:focus, &:active': {
      transform: 'none',
      boxShadow: (variant !== 'gradient' || variant !== 'contained') && 'none !important',
      opacity: '1 !important',
    },

    '&:hover': {
      backgroundColor: grey[100],
      borderColor,
    },
  };
});
