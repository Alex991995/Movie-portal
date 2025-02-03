import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

import Favorite from 'src/pages/Favorite';
import Layout from 'src/pages/Layout';
import MainPage from 'src/pages/MainPage';
import Loader from 'src/components/Loader';
import NotFoundPage from 'src/pages/NotFoundPage';
import SingleMovie from 'src/pages/SingleMovie';

const Register = lazy( () => import('src/pages/Register'))
const Login = lazy( () => import('src/pages/Login'))


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'movie/:id',
        element: <Suspense fallback={<Loader/>}><SingleMovie /></Suspense>
      },
      {
        path: 'login',
        element: <Suspense fallback={<Loader/>}><Login /></Suspense>
      },
      {
        path: 'register',
        element: <Suspense fallback={<Loader/>}><Register /></Suspense>
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
