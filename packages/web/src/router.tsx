import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { Quest } from './pages/quests';
import { globalStyle } from './styles';
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter';

export const Router = () => {
  globalStyle();
  axeAccessibilityReporter();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/quest/:company',
      element: <Quest />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
