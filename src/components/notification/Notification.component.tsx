import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import globalStyles from '../../styles/style-vars';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    width: '6px',
    height: '6px',
    backgroundColor: globalStyles.vars.buttonColor,
    color: globalStyles.vars.buttonColor,
    borderRadius: '50%',
    boxShadow: `0 0 0 3px ${globalStyles.vars.whiteColor}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Notification: FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
      >
        <NotificationsIcon color="icons" sx={{ fontSize: '20px' }} />
      </StyledBadge>
    </Stack>
  );
};
