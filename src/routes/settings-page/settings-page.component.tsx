import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Wrapper from "../../components/wrapper/wrapper.component";
import { RootState } from "../../store/store";
import { UserData } from "../../utils/firebase/firebase.utils";
import ThemeSwitcher from "../../components/theme-switcher/theme-switcher.component";

const SettingsPage: React.FC = function SettingsPage() {
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

export default SettingsPage;
