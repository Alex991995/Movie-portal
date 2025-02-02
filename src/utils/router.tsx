import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Favorite from 'src/pages/Favorite';
import Layout from 'src/pages/Layout';
// import Login from 'src/pages/Login';
import MainPage from 'src/pages/MainPage';
// import Register from 'src/pages/Register';
import Loader from 'src/components/Loader';
import NotFoundPage from 'src/pages/NotFoundPage';
// import NotFoundPage from 'src/components/NotFoundPage';

import SingleMovie from 'src/pages/SingleMovie';
// const SingleMovie = lazy( () => import('src/pages/SingleMovie'))
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
        // element: <Loader/>,
        element: <Suspense fallback={<Loader/>}><SingleMovie /></Suspense>
      },
      {
        path: 'login',
        element: <Suspense fallback={<Loader/>}><Login /></Suspense>
        // element: <Loader />,
      },
      {
        path: 'register',
        element: <Suspense fallback={<Loader/>}><Register /></Suspense>
        // element: <Register />,
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
