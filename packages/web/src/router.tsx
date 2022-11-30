import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter';

export const Router = () => {
  axeAccessibilityReporter();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
