import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';

const routes = isLoggedIn => [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        path: '',
        element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />
      }
    ]
  }
];

export default routes;
