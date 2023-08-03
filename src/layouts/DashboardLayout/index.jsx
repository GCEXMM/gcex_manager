import { useLocation } from 'react-router-dom';
import { setLayout, useUIController } from '../../context';
import { useEffect } from 'react';
import MUIBox from '../../components/MUIBox';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children, ...rest }) => {
  const [controller, dispatch] = useUIController();
  const { isMiniSidenav } = controller;
  const { pathname } = useLocation();

  const sxDashboardLayout = (theme) => {
    const { functions, transitions, breakpoints } = theme;

    const { pxToRem } = functions;

    return {
      p: 3,
      position: 'relative',

      [breakpoints.up('xl')]: {
        marginLeft: isMiniSidenav ? pxToRem(120) : pxToRem(274),
        transition: transitions.create(['margin-left', 'margin-right'], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },
    };
  };

  useEffect(() => {
    setLayout(dispatch, 'dashboard');
  }, [pathname, dispatch]);

  return (
    <MUIBox {...rest} sx={sxDashboardLayout}>
      {children}
    </MUIBox>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
