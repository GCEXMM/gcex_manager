import { forwardRef, createContext, useContext, useMemo } from 'react';
import MUIPaginationRoot from './MUIPaginationRoot';
import MUIBox from '../MUIBox';
import PropTypes from 'prop-types';
import { useUIController } from '../../context';

const Context = createContext();

const MUIPagination = forwardRef(
  ({ item, variant, size, active, children, ...rest }, ref) => {
    const [controller] = useUIController();
    const { sidenavColor: color } = controller;

    const context = useContext(Context);
    const paginationSize = context ? context.size : null;

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <MUIPaginationRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : 'outlined'}
            color={active ? context.color : 'secondary'}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MUIPaginationRoot>
        ) : (
          <MUIBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: 'none' }}
          >
            {children}
          </MUIBox>
        )}
      </Context.Provider>
    );
  }
);

MUIPagination.defaultProps = {
  item: false,
  variant: 'gradient',
  color: 'info',
  size: 'medium',
  active: false,
};

MUIPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(['gradient', 'contained']),
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MUIPagination;
