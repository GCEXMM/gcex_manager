import { forwardRef } from 'react';
import { useUIController } from '../../context';
import MUIButtonRoot from './MUIButtonRoot';
import PropTypes from 'prop-types';

const MUIButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, disabled, children, ...rest }, ref) => {
    const [controller] = useUIController();

    const { isDarkMode } = controller;

    return (
      <MUIButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === 'gradient' ? 'contained' : variant}
        size={size}
        disabled={disabled}
        ownerState={{ color, variant, size, circular, iconOnly, isDarkMode }}
      >
        {children}
      </MUIButtonRoot>
    );
  }
);

MUIButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'white',
  circular: false,
  iconOnly: false,
  disabled: false,
};

// Typechecking props for the MDButton
MUIButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'gradient']),
  color: PropTypes.oneOf([
    'white',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default MUIButton;
