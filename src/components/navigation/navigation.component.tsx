import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { MenuDrawer } from '../menu';
import { Header } from '../header';
import { getMessagesFetch } from '../../store/messages/messages.reducer';

export const Navigation: FC = () => {
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
