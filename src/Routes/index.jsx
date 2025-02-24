import { useContext } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';

export const AppRoutes = () => {
  const { signOut, hasAnAccount } = useContext(ShoppingCartContext);
  const { hasUserAnAccount } = hasAnAccount();
  const isUserSignOut = signOut;

  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    {
      path: '/my-account',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyAccount />
        ) : (
          <Navigate replace to={'/sign-in'} />
        ),
    },
    {
      path: '/my-orders',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrders />
        ) : (
          <Navigate replace to={'/sign-in'} />
        ),
    },
    {
      path: '/my-orders/last',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrder />
        ) : (
          <Navigate replace to={'/sign-in'} />
        ),
    },
    {
      path: '/my-orders/:id',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrder />
        ) : (
          <Navigate replace to={'/sign-in'} />
        ),
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
};
