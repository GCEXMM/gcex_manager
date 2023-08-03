import { useEffect, useState } from 'react';
import {
  setIsConfiguratorOpened,
  setIsMiniSidenav,
  setIsTransparentAppbar,
  useUIController,
} from '../../context';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import MUIBox from '../../components/MUIBox';
import Breadcrumbs from '../../examples/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import NotificationItem from '../../examples/NotificationItem';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Appbar = ({ absolute, isLight, isMini }) => {
  const [position, setPosition] = useState();
  const [controller, dispatch] = useUIController();
  const {
    isMiniSidenav,
    isTransparentAppbar,
    isFixedAppbar,
    isConfiguratorOpened,
    isDarkMode,
  } = controller;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const routes = useLocation().pathname.split('/').slice(1);

  useEffect(() => {
    if (isFixedAppbar) {
      setPosition('sticky');
    } else {
      setPosition('static');
    }

    const handleChangeTransparentAppbar = () => {
      setIsTransparentAppbar(
        dispatch,
        (isFixedAppbar && window.scrollY === 0) || !isFixedAppbar
      );
    };

    window.addEventListener('scroll', handleChangeTransparentAppbar);

    handleChangeTransparentAppbar();

    return () => window.removeEventListener('scroll', handleChangeTransparentAppbar);
  }, [isFixedAppbar, dispatch]);

  const handleChangeMiniSidenav = () => setIsMiniSidenav(dispatch, !isMiniSidenav);
  const handleOpenConfigurator = () => setIsConfiguratorOpened(dispatch, true);
  const handleOpenMenu = (event) => setIsMenuOpened(event.currentTarget);
  const handleCloseMenu = () => setIsMenuOpened(false);

  const renderMenu = () => (
    <Menu
      anchorEl={isMenuOpened}
      anchorReference={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={isMenuOpened}
      sx={{ mt: 2 }}
      onClose={handleCloseMenu}
    >
      <NotificationItem icon={<EmailRoundedIcon />} title="Check new messages" />
      <NotificationItem icon={<EmailRoundedIcon />} title="Check new messages" />
      <NotificationItem icon={<EmailRoundedIcon />} title="Check new messages" />
    </Menu>
  );

  const sxAppbar = (theme) => {
    const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;

    const { dark, white, text, transparent, background } = palette;
    const { navbarBoxShadow } = boxShadows;
    const { rgba, pxToRem } = functions;
    const { borderRadius } = borders;

    let colorValue;

    if (isLight) {
      colorValue = white.main;
    } else if (isTransparentAppbar) {
      colorValue = text.main;
    } else {
      colorValue = dark.main;
    }

    return {
      boxShadow: isTransparentAppbar || absolute ? 'none' : navbarBoxShadow,
      backdropFilter:
        isTransparentAppbar || absolute ? 'none' : `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor:
        isTransparentAppbar || absolute
          ? `${transparent.main} !important`
          : rgba(isDarkMode ? background.default : white.main, 0.8),

      color: colorValue,
      top: absolute ? 0 : pxToRem(12),
      minHeight: pxToRem(75),
      display: 'grid',
      alignItems: 'center',
      borderRadius: borderRadius.xl,
      paddingTop: pxToRem(8),
      paddingBottom: pxToRem(8),
      paddingRight: absolute ? pxToRem(8) : 0,
      paddingLeft: absolute ? pxToRem(16) : 0,

      '& > *': {
        transition: transitions.create('all', {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },

      '& .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [breakpoints.up('sm')]: {
          minHeight: 'auto',
          padding: `${pxToRem(4)} ${pxToRem(16)}`,
        },
      },
    };
  };

  const sxToolbar = (theme) => {
    const { breakpoints } = theme;

    return {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      py: 0.5,

      [breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '0',
        paddingBottom: '0',
      },
    };
  };

  const sxTool = (theme) => {
    const { breakpoints } = theme;

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',

      [breakpoints.up('md')]: {
        justifyContent: isMini ? 'space-between' : 'stretch',
        width: isMini ? '100%' : 'max-content',
      },

      [breakpoints.up('xl')]: {
        justifyContent: 'stretch !important',
        width: 'max-content !important',
      },
    };
  };

  const sxToolIconButton = (theme) => {
    const { typography, breakpoints, palette } = theme;

    const { white, text, dark } = palette;
    const { size } = typography;

    let colorValue;

    if (isLight) {
      colorValue = white.main;
    } else if (isTransparentAppbar) {
      colorValue = text.main;
    } else {
      colorValue = dark.main;
    }

    return {
      px: 1,
      color: colorValue,

      '& .material-icons, .material-icons-round': {
        fontSize: `${size.xl} !important`,
      },

      '& .MuiTypography-root': {
        display: 'none',

        [breakpoints.up('sm')]: {
          display: 'inline-block',
          lineHeight: 1.2,
          ml: 0.5,
        },
      },
    };
  };

  return (
    <AppBar position={absolute ? 'absolute' : position} color="inherit" sx={sxAppbar}>
      <Toolbar sx={sxToolbar}>
        <MUIBox color="inherit" mb={{ xs: 1, md: 0 }} sx={sxTool}>
          <Breadcrumbs icon={<HomeRoundedIcon />} routes={routes} isLight={isLight} />
        </MUIBox>

        {!isMini && (
          <MUIBox sx={sxTool}>
            <MUIBox color={isLight ? 'white' : 'inherit'}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={sxToolIconButton}
                onClick={handleChangeMiniSidenav}
              >
                {isMiniSidenav ? (
                  <MenuRoundedIcon fontSize="small" />
                ) : (
                  <MenuOpenRoundedIcon fontSize="small" />
                )}
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={sxToolIconButton}
                onClick={handleOpenConfigurator}
              >
                <SettingsRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                disableRipple
                color="inherit"
                sx={sxToolIconButton}
                onClick={handleOpenMenu}
              >
                <AccountCircleRoundedIcon fontSize="small" />
              </IconButton>
              {renderMenu()}
            </MUIBox>
          </MUIBox>
        )}
      </Toolbar>
    </AppBar>
  );
};

Appbar.defaultProps = {
  absolute: false,
  isLight: false,
  isMini: false,
};

Appbar.propTypes = {
  absolute: PropTypes.bool,
  isLight: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default Appbar;
