import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';
import { SearchField } from '../search-field';
import { UserInfo } from '../user-info';
import { Notification } from '../notification';

export const Header: FC = () => {
  const location = useLocation();
  const locations = location.pathname.split('/');
  const lastPath = locations[locations.length - 1];
  const path = lastPath.charAt(0).toUpperCase() + lastPath.slice(1);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Typography variant="h2" sx={{ display: 'inline-block' }}>
        {path.length <= 2 ? 'Messages' : path}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing="33px"
      >
        <SearchField />
        <Notification />
        <UserInfo />
      </Stack>
    </Stack>
  );
};
