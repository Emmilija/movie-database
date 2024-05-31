// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const user = useSelector((state) => state.auth.user);
//   return user ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getUser } from './useStorage';

export const RequireAuth = () => {
    const token = getUser()?.token;
    if (!token) return <Navigate to='/login' replace />;
    return <Outlet />;
  };


  export const RequireNoAuth = () => {
    const token = getUser()?.token;
    if (token) return <Navigate to='/favorites' replace />;
    return <Outlet />;
  };


