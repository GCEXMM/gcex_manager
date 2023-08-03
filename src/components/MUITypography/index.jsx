import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MUITypographyRoot from './MUITypographyRoot';
import { useUIController } from '../../context';

const MUITypography = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => {
    const [controller] = useUIController();
    const { isDarkMode } = controller;

    return (
      <MUITypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          isDarkMode,
        }}
      >
        {children}
      </MUITypographyRoot>
    );
  }
);

MUITypography.defaultProps = {
  color: 'dark',
  fontWeight: false,
  textTransform: 'none',
  verticalAlign: 'unset',
  textGradient: false,
  opacity: 1,
};

MUITypography.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'white',
  ]),
  fontWeight: PropTypes.oneOf([false, 'light', 'regular', 'medium', 'bold']),
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
  verticalAlign: PropTypes.oneOf([
    'unset',
    'baseline',
    'sub',
    'super',
    'text-top',
    'text-bottom',
    'middle',
    'top',
    'bottom',
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default MUITypography;
