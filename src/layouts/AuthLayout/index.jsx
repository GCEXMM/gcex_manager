import { useEffect } from 'react';
import MUIBox from '../../components/MUIBox';
import { setLayout, useUIController } from '../../context';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const AuthLayout = ({ image, children }) => {
  const [, dispatch] = useUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, 'auth');
  }, [dispatch, pathname]);

  const sxLayout = (theme) => {
    const { functions, palette } = theme;

    const { linearGradient, rgba } = functions;
    const { gradients } = palette;

    return {
      overflowX: 'hidden',
      backgroundImage:
        image &&
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  };

  return (
    <MUIBox width="100vw" height="100vh" minHeight="100vh" sx={sxLayout}>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          {children}
        </Grid>
      </Grid>
    </MUIBox>
  );
};

AuthLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
