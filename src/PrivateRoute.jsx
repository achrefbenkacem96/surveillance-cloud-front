import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return  isAuthenticated ? <Outlet /> : <Navigate to="/auth/signin" />;
   
};

export default PrivateRoute;
