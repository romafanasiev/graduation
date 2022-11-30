import React, { FC } from 'react';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { setTheme } from '../../store/user/user.reducer';
import { RootState, useAppDispatch } from '../../store/store';

export const ThemeSwitcher: FC = () => {
  const theme = useSelector((state: RootState) => state.user.whiteThemeColor);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(setTheme());
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Black</Typography>
      <Switch checked={theme} onChange={handleChange} defaultChecked />
      <Typography>White</Typography>
    </Stack>
  );
};
