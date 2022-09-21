import React from "react";

import { useLocation } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import Notification from "../notification/notification";
import UserInfo from "../user-info/user-info.component";
import SearchField from "../search-field/search-field";

const Header = function Header() {
  const location = useLocation();
  const locations = location.pathname.split("/");
  const lastPath = locations[locations.length - 1];
  const path = lastPath.charAt(0).toUpperCase() + lastPath.slice(1);

  return (
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
  );
};

export default Header;
