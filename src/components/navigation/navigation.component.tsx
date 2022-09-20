import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Typography, Stack } from "@mui/material";
import Notification from "../notification/notification";
import UserInfo from "../user-info/user-info.component";
import SearchField from "../search-field/search-field";

const Navigation = function Navigation() {
  const location = useLocation();
  const path =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <>
      <AppBar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="h2" sx={{ display: "inline-block" }}>
            {path}
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
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
