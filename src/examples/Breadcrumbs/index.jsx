import React from 'react';
import MUIBox from '../../components/MUIBox';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import MUITypography from '../../components/MUITypography';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ icon, isLight, routes }) => {
  const title = routes.slice(-1)[0];
  const paths = routes.slice(0, -1);

  return (
    <MUIBox mr={{ xs: 0, xl: 8 }}>
      <MUIBreadcrumbs
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: ({ palette: { white, grey } }) => (isLight ? white.main : grey[600]),
          },
        }}
      >
        <Link to="/">
          <MUITypography
            component="span"
            variant="body2"
            color={isLight ? 'white' : 'dark'}
            opacity={isLight ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            {icon}
          </MUITypography>
        </Link>

        {paths.map((el) => (
          <Link key={el} to={`/${el}`}>
            <MUITypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={isLight ? 'white' : 'dark'}
              opacity={isLight ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >
              {el}
            </MUITypography>
          </Link>
        ))}

        <MUITypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={isLight ? 'white' : 'dark'}
          sx={{ lineHeight: 0 }}
        >
          {title}
        </MUITypography>
      </MUIBreadcrumbs>
    </MUIBox>
  );
};

Breadcrumbs.defaultProps = {
  isLight: false,
};

Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  routes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  isLight: PropTypes.bool,
};

export default Breadcrumbs;
