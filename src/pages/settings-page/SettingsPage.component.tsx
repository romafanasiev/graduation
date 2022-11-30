import React, { useEffect, useState, FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Wrapper, ThemeSwitcher } from '../../components';
import { RootState } from '../../store/store';
import { UserData } from '../../firebase';

export const SettingsPage: FC = () => {
  const userData = useSelector((state: RootState) => state.user.currentUser);
  const userAvatar = useSelector((state: RootState) => state.user.avatar);
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <Wrapper>
      <ThemeSwitcher />
      {user ? (
        <Box>
          {userAvatar ? (
            <Avatar
              src={userAvatar}
              alt={user.displayName}
              sx={{ width: 100, height: 100 }}
            />
          ) : (
            <Avatar>
              <AccountCircleIcon color="icons" />
            </Avatar>
          )}
          <Typography variant="h2">Admin: {user.displayName}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
        </Box>
      ) : (
        <h2>User not found</h2>
      )}
    </Wrapper>
  );
};
