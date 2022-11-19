import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const Router = () => {
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
