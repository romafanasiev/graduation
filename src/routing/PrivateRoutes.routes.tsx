import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

const PrivateRoutes = () => {
  const userAuth = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  return userAuth ? <Outlet /> : <Navigate to="/sign_in" />;
};

export default PrivateRoutes;
