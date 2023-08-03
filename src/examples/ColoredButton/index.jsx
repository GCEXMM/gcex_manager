import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const ColoredButton = ({ color, currentColor, isDarkMode, ...rest }) => {
  const sxColoredButton = (theme) => {
    const { borders, palette, transitions, functions } = theme;

    const { borderWidth } = borders;
    const { white, dark, background, gradients } = palette;
    const { pxToRem, linearGradient } = functions;

    let borderColorValue = currentColor === color && dark.main;

    if (isDarkMode && currentColor === color) {
      borderColorValue = white.main;
    }

    return {
      width: pxToRem(24),
      height: pxToRem(24),
      padding: 0,
      border: `${borderWidth[1]} solid ${isDarkMode ? background.sidenav : white.main}`,
      borderColor: borderColorValue,
      transition: transitions.create('border-color', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
      backgroundImage: linearGradient(gradients[color].main, gradients[color].state),

      '&:not(:last-child)': {
        mr: 1,
      },

      '&:hover, &:focus, &:active': {
        borderColor: isDarkMode ? white.main : dark.main,
      },
    };
  };

  return <IconButton {...rest} sx={sxColoredButton} />;
};

ColoredButton.defaultProps = {
  isDarkMode: false,
};

ColoredButton.propTypes = {
  color: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};

export default ColoredButton;
