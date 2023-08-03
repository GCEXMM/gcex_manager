import { forwardRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MUIBox from '../../components/MUIBox';
import Link from '@mui/material/Link';
import MUITypography from '../../components/MUITypography';
import PropTypes from 'prop-types';

const NotificationItem = forwardRef(({ icon, title, ...rest }, ref) => {
  const sxMenuItem = (theme) => {
    const { palette, borders, transitions } = theme;

    const { secondary, light, dark } = palette;
    const { borderRadius } = borders;

    return {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      color: secondary.main,
      borderRadius: borderRadius.md,
      transition: transitions.create('background-color', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
      '& *': {
        transition: 'color 100ms linear',
      },

      '&:not(:last-child)': {
        mb: 1,
      },

      '&:hover': {
        backgroundColor: light.main,

        '& *': {
          color: dark.main,
        },
      },
    };
  };

  return (
    <MenuItem {...rest} ref={ref} sx={sxMenuItem}>
      <MUIBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
        <MUITypography variant="body1" color="secondary" lineHeight={0.75}>
          {icon}
        </MUITypography>
        <MUITypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
          {title}
        </MUITypography>
      </MUIBox>
    </MenuItem>
  );
});

NotificationItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default NotificationItem;
