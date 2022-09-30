import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import MenuDrawer from "../menu/menu.component";
import Header from "../header/header.component";
import { getMessagesFetch } from "../../store/messages/messages.reducer";

const Navigation = function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessagesFetch());
  }, []);
  return (
    <>
      <AppBar color="primary">
        <MenuDrawer />
        <Header />
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
