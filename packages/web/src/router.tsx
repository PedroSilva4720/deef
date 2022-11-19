import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/test',
      element: <p>Teste</p>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
