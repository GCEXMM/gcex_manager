import { forwardRef } from 'react';
import MUIInputRoot from './MUIInputRoot';
import PropTypes from 'prop-types';

const MUIInput = forwardRef(({ error, success, disabled, ...rest }, ref) => {
  return <MUIInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />;
});

MUIInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

MUIInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MUIInput;
