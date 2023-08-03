import { useEffect, useState } from 'react';
import {
  setIsConfiguratorOpened,
  setIsDarkMode,
  setIsFixedAppbar,
  setIsMiniSidenav,
  setIsTransparentSidenav,
  setIsWhiteSidenav,
  setSidenavColor,
  useUIController,
} from '../../context';
import ConfiguratorRoot from './ConfiguratorRoot';
import MUIBox from '../../components/MUIBox';
import MUITypography from '../../components/MUITypography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from '@mui/material/Divider';
import ColoredButton from '../../examples/ColoredButton';
import MUIButton from '../../components/MUIButton';
import Switch from '@mui/material/Switch';

const Configurator = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [controller, dispatch] = useUIController();
  const {
    isMiniSidenav,
    isTransparentSidenav,
    isWhiteSidenav,
    isFixedAppbar,
    isConfiguratorOpened,
    sidenavColor,
    isDarkMode,
  } = controller;

  const sidnavColors = [
    'primary',
    'dark',
    'info',
    'success',
    'warning',
    'error',
  ];

  useEffect(() => {
    const handleIsDisabled = () => {
      return window.innerWidth > 1200
        ? setIsDisabled(false)
        : setIsDisabled(true);
    };

    window.addEventListener('resize', handleIsDisabled);

    handleIsDisabled();

    return () => window.removeEventListener('resize', handleIsDisabled);
  }, []);

  const handleCloseConfigurator = () =>
    setIsConfiguratorOpened(dispatch, false);

  const handleChangeTransparentSidenav = () => {
    setIsTransparentSidenav(dispatch, true);
    setIsWhiteSidenav(dispatch, false);
  };

  const handleChangeWhiteSidenav = () => {
    setIsWhiteSidenav(dispatch, true);
    setIsTransparentSidenav(dispatch, false);
  };

  const handleChangeDarkSidenav = () => {
    setIsWhiteSidenav(dispatch, false);
    setIsTransparentSidenav(dispatch, false);
  };

  const handleChangeFixedNavbar = () =>
    setIsFixedAppbar(dispatch, !isFixedAppbar);

  const handleChangeMiniSidenav = () =>
    setIsMiniSidenav(dispatch, !isMiniSidenav);

  const handleChangeDarkMode = () => setIsDarkMode(dispatch, !isDarkMode);

  const handleChangeSidenavColor = (color) => setSidenavColor(dispatch, color);

  const sidenavTypeButtonStyles = (theme) => {
    const { functions, palette, borders } = theme;

    const { pxToRem } = functions;
    const { white, dark, background } = palette;
    const { borderWidth } = borders;

    return {
      height: pxToRem(39),
      background: isDarkMode ? background.sidenav : white.main,
      color: isDarkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${isDarkMode ? white.main : dark.main}`,

      '&:hover, &:focus, &:focus:not(:hover)': {
        background: isDarkMode ? background.sidenav : white.main,
        color: isDarkMode ? white.main : dark.main,
        border: `${borderWidth[1]} solid ${
          isDarkMode ? white.main : dark.main
        }`,
      },
    };
  };

  const sidenavTypeActiveButtonStyles = (theme) => {
    const { functions, palette } = theme;

    const { pxToRem, linearGradient } = functions;
    const { white, gradients, background } = palette;

    return {
      height: pxToRem(39),
      background: isDarkMode
        ? white.main
        : linearGradient(gradients.dark.main, gradients.dark.state),
      color: isDarkMode ? background.sidenav : white.main,

      '&:hover, &:focus, &:focus:not(:hover)': {
        background: isDarkMode
          ? white.main
          : linearGradient(gradients.dark.main, gradients.dark.state),
        color: isDarkMode ? background.sidenav : white.main,
      },
    };
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ isConfiguratorOpened }}>
      <MUIBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MUIBox>
          <MUITypography variant="h5">UI Configurations</MUITypography>
          {/* <MUITypography variant="body2" color="text">
            See our dashboard options.
          </MUITypography> */}
        </MUIBox>
        <CloseRoundedIcon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: isDarkMode ? white.main : dark.main,
            cursor: 'pointer',
          })}
          onClick={handleCloseConfigurator}
        />
      </MUIBox>

      <Divider />

      <MUIBox pt={0.5} pb={3} px={3}>
        <MUIBox>
          <MUITypography variant="h6">Sidenav Colors</MUITypography>

          <MUIBox mb={0.5}>
            {sidnavColors.map((color) => (
              <ColoredButton
                key={color}
                color={color}
                currentColor={sidenavColor}
                isDarkMode={isDarkMode}
                onClick={() => handleChangeSidenavColor(color)}
              />
            ))}
          </MUIBox>
        </MUIBox>

        <MUIBox mt={3} lineHeight={1}>
          <MUITypography variant="h6">Sidenav Type</MUITypography>
          <MUITypography variant="body2" color="text">
            Choose between different sidenav types.
          </MUITypography>

          <MUIBox sx={{ display: 'flex', mt: 2, mr: 1, gap: 1 }}>
            <MUIButton
              color="dark"
              variant="gradient"
              disabled={isDisabled}
              onClick={handleChangeDarkSidenav}
              sx={
                !isTransparentSidenav && !isWhiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonStyles
              }
            >
              Dark
            </MUIButton>
            <MUIButton
              color="dark"
              variant="gradient"
              disabled={isDisabled}
              onClick={handleChangeTransparentSidenav}
              sx={
                isTransparentSidenav && !isWhiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonStyles
              }
            >
              Transparent
            </MUIButton>
            <MUIButton
              color="dark"
              variant="gradient"
              disabled={isDisabled}
              onClick={handleChangeWhiteSidenav}
              sx={
                !isTransparentSidenav && isWhiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonStyles
              }
            >
              White
            </MUIButton>
          </MUIBox>
        </MUIBox>

        <MUIBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          lineHeight={1}
        >
          <MUITypography variant="h6">Navbar Fixed</MUITypography>
          <Switch checked={isFixedAppbar} onChange={handleChangeFixedNavbar} />
        </MUIBox>

        <Divider />

        <MUIBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight={1}
        >
          <MUITypography variant="h6">Sidenav Mini</MUITypography>
          <Switch checked={isMiniSidenav} onChange={handleChangeMiniSidenav} />
        </MUIBox>

        <Divider />

        <MUIBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight={1}
        >
          <MUITypography variant="h6">Light / Dark</MUITypography>
          <Switch checked={isDarkMode} onChange={handleChangeDarkMode} />
        </MUIBox>
      </MUIBox>
    </ConfiguratorRoot>
  );
};

export default Configurator;
