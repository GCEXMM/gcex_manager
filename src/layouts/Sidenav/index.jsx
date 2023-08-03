import { NavLink, useLocation } from 'react-router-dom';
import { setIsMiniSidenav, useUIController } from '../../context';
import SidenavRoot from './SidenavRoot';
import { useEffect } from 'react';
import MUIBox from '../../components/MUIBox';
import CloseRoundedIcon from '@mui/icons-material/CloseTwoTone';
import Brand from '../../examples/Brand';
import Divider from '@mui/material/Divider';
import SidenavItem from './SidenavItem';
import PropTypes from 'prop-types';
import MUITypography from '../../components/MUITypography';

const Sidenav = ({ brand, brandName, routes, ...rest }) => {
  const [controller, dispatch] = useUIController();
  const { isMiniSidenav, isTransparentSidenav, isWhiteSidenav, isDarkMode } = controller;

  const location = useLocation();
  const paths = location.pathname.split('/').slice(1);

  let textColor = 'white';

  if (isTransparentSidenav || (isWhiteSidenav && !isDarkMode)) {
    textColor = 'dark';
  } else if (isWhiteSidenav && isDarkMode) {
    textColor = 'white';
  }

  const handleCloseSidenav = () => {
    setIsMiniSidenav(dispatch, true);
  };

  useEffect(() => {
    const handleMiniSidenav = () => {
      setIsMiniSidenav(dispatch, window.innerWidth < 1200);
      // setIsTransparentSidenav(
      //   dispatch,
      //   window.innerWidth < 1200 ? false : isTransparentSidenav
      // );
      // setIsWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : isWhiteSidenav);
    };

    window.addEventListener('resize', handleMiniSidenav);

    handleMiniSidenav();

    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, isTransparentSidenav, isWhiteSidenav, location]);

  const renderRoutes = (routes) => {
    return routes.map(({ type, label, icon, title, key, route, items }) => {
      if (type === 'collapse') {
        const hasCollapse = !!items;

        return hasCollapse ? (
          <SidenavItem
            key={key}
            label={label}
            icon={icon}
            isActive={paths.includes(key)}
            hasCollapse={hasCollapse}
            renderedItems={items && renderRoutes(items)}
          />
        ) : (
          <NavLink key={key} to={route}>
            <SidenavItem label={label} icon={icon} isActive={paths.includes(key)} />
          </NavLink>
        );
      } else if (type === 'title') {
        return (
          <MUITypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MUITypography>
        );
      } else if (type === 'divider') {
        return (
          <Divider
            key={key}
            light={
              (!isDarkMode && !isWhiteSidenav && !isTransparentSidenav) ||
              (isDarkMode && !isTransparentSidenav && isWhiteSidenav)
            }
          />
        );
      }
    });
  };

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ isMiniSidenav, isTransparentSidenav, isWhiteSidenav, isDarkMode }}
    >
      <MUIBox pt={3} pb={1} px={4} textAlign="center">
        <MUIBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={handleCloseSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <CloseRoundedIcon fontSize="xs" color="inherit" />
        </MUIBox>
        <Brand
          brand={brand}
          brandName={brandName}
          color={textColor}
          isMiniSidenav={isMiniSidenav}
        />
      </MUIBox>
      <Divider
        light={
          (!isDarkMode && !isWhiteSidenav && !isTransparentSidenav) ||
          (isDarkMode && isWhiteSidenav && !isTransparentSidenav)
        }
      />
      {renderRoutes(routes)}
    </SidenavRoot>
  );
};

Sidenav.propTypes = {
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
