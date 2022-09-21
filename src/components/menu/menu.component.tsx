import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../logo/logo.component";
import MenuListItem from "../menu-list/menu-list.component";

import globalStyles from "../../utils/styles/style-vars";

export default function MenuDrawer() {
  const [state, setState] = useState(false);

  const navigationLinks = [
    "Overview",
    "Tickets",
    "Ideas",
    "Contacts",
    "Agents",
    "Articles",
  ];

  const settingsLinks = ["Settings", "Subscription"];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: globalStyles.vars.backgroundColor,
        color: globalStyles.vars.subtitleColor,
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",

          margin: "27px 0 59px",
        }}
      >
        <Logo />
        <Typography variant="h3">Dashboard Kit</Typography>
      </Box>
      <MenuListItem items={navigationLinks} />
      <Divider sx={{ height: "62px", width: "0" }} />
      <MenuListItem items={settingsLinks} />
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} aria-label="menu icon">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
