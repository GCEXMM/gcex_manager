import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { useUIController } from '../../context';
import MUIBox from '../../components/MUIBox';
import PropTypes from 'prop-types';
import MUITypography from '../../components/MUITypography';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

const SidenavItem = ({ icon, label, isActive, hasCollapse, renderedItems, ...rest }) => {
  const [controller] = useUIController();
  const {
    isMiniSidenav,
    isTransparentSidenav,
    isWhiteSidenav,
    sidenavColor,
    isDarkMode,
  } = controller;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sxListItem = (theme) => {
    const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;

    const { white, transparent, dark, grey, gradients } = palette;
    const { md } = boxShadows;
    const { borderRadius } = borders;
    const { pxToRem, rgba, linearGradient } = functions;

    let backgroundValue = transparent.main;
    let colorValue = dark.main;

    if (isWhiteSidenav) {
      if (isActive) {
        backgroundValue = hasCollapse
          ? grey[200]
          : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state);
        colorValue = hasCollapse ? dark.main : white.main;
      }
    } else if (isTransparentSidenav && !isDarkMode) {
      if (isActive) {
        backgroundValue = hasCollapse
          ? grey[300]
          : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state);
        colorValue = hasCollapse ? dark.main : white.main;
      }
    } else {
      if (isActive) {
        backgroundValue = hasCollapse
          ? rgba(white.main, 0.2)
          : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state);
      }
      colorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: `${pxToRem(8)} ${pxToRem(16)}`,
      margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      cursor: 'pointer',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      boxShadow:
        isActive && !isWhiteSidenav && !isDarkMode && !isTransparentSidenav ? md : 'none',
      [breakpoints.up('xl')]: {
        transition: transitions.create(['box-shadow', 'background-color'], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.shorter,
        }),
      },

      '&:hover, &:focus': {
        backgroundColor: () => {
          let backgroundValue;

          if (!isActive) {
            backgroundValue =
              isTransparentSidenav && !isDarkMode
                ? grey[300]
                : rgba(isWhiteSidenav ? grey[400] : white.main, 0.2);
          }

          return backgroundValue;
        },
      },
    };
  };

  const sxListItemIcon = (theme) => {
    const { palette, transitions, borders, functions } = theme;

    const { white, dark } = palette;
    const { borderRadius } = borders;
    const { pxToRem } = functions;

    let colorValue = dark.main;

    if (isWhiteSidenav) {
      if (isActive) {
        colorValue = hasCollapse ? dark.main : white.main;
      }
    } else if (isTransparentSidenav && !isDarkMode) {
      if (isActive) {
        colorValue = hasCollapse ? dark.main : white.main;
      }
    } else {
      colorValue = white.main;
    }

    return {
      minWidth: pxToRem(32),
      minHeight: pxToRem(32),
      color: colorValue,

      flexShrink: 0,
      borderRadius: borderRadius.md,
      display: 'grid',
      placeItems: 'center',
      transition: transitions.create('margin', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),

      '& svg, svg g': {
        color: colorValue,
      },
    };
  };

  const sxListItemText = (theme) => {
    const { typography, transitions, breakpoints, functions } = theme;

    const { size, fontWeightRegular, fontWeightLight } = typography;
    const { pxToRem } = functions;

    return {
      marginLeft: pxToRem(10),

      [breakpoints.up('xl')]: {
        opacity: isMiniSidenav || (isMiniSidenav && isTransparentSidenav) ? 0 : 1,
        maxWidth: isMiniSidenav || (isMiniSidenav && isTransparentSidenav) ? 0 : '100%',
        marginLeft:
          isMiniSidenav || (isMiniSidenav && isTransparentSidenav) ? 0 : pxToRem(10),
        transition: transitions.create(['opacity', 'margin'], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },

      '& span': {
        fontWeight: isActive ? fontWeightRegular : fontWeightLight,
        fontSize: size.sm,
        lineHeight: 0,
      },
    };
  };

  const sxChevron = (theme) => {
    const { palette, transitions, breakpoints, functions } = theme;

    const { dark } = palette;
    const { rgba } = functions;

    return {
      [breakpoints.up('xl')]: {
        opacity: isMiniSidenav || (isMiniSidenav && isTransparentSidenav) ? 0 : 1,
        color:
          isActive ||
          isCollapsed ||
          isDarkMode ||
          (!isWhiteSidenav && !isTransparentSidenav)
            ? 'inherit'
            : rgba(dark.main, 0.25),
        transform: isCollapsed ? 'rotate(0deg)' : `rotate(-180deg)`,
        transition: transitions.create(['opacity', 'color', 'transform'], {
          easing: transitions.easing.easeIn,
          duration: transitions.duration.short,
        }),
      },
    };
  };

  return (
    <MUIBox>
      <ListItem component="li" onClick={handleToggleCollapse}>
        <MUIBox {...rest} sx={sxListItem}>
          <ListItemIcon sx={sxListItemIcon}>
            {typeof icon === 'string' ? (
              <MUITypography fontSize={14} color="inherit">
                {icon}
              </MUITypography>
            ) : (
              icon
            )}
          </ListItemIcon>
          <ListItemText primary={label} sx={sxListItemText} />
          {hasCollapse && !isMiniSidenav && (
            <ExpandLessRoundedIcon fontSize="inherit" sx={sxChevron} />
          )}
        </MUIBox>
      </ListItem>
      {hasCollapse && (
        <Collapse in={isCollapsed} timeout={300} unmountOnExit>
          {renderedItems}
        </Collapse>
      )}
    </MUIBox>
  );
};

SidenavItem.defaultProps = {
  isActive: false,
  hasCollapse: false,
};

// Typechecking props for the SidenavCollapse
SidenavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  hasCollapse: PropTypes.bool,
  renderedItems: PropTypes.arrayOf(PropTypes.object),
};

export default SidenavItem;
