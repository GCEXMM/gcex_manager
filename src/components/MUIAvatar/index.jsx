import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MUIAvatarRoot from './MUIAvatarRoot';

const MUIAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => {
  return <MUIAvatarRoot {...rest} ownerState={{ bgColor, size, shadow }} ref={ref} />;
});

MUIAvatar.defaultProps = {
  bgColor: 'transparent',
  size: 'md',
  shadow: 'none',
};

MUIAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    'transparent',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  shadow: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']),
};

export default MUIAvatar;
