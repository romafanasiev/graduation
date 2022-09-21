import React from "react";

import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import MenuDrawer from "../menu/menu.component";
import Header from "../header/header.component";

const Navigation = function Navigation() {
  return (
    <>
      <AppBar>
        <MenuDrawer />
        <Header />
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
