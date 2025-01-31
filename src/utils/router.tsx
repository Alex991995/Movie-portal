import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Favorite from 'src/pages/Favorite';
import Layout from 'src/pages/Layout';
import Login from 'src/pages/Login';
import MainPage from 'src/pages/MainPage';
import Register from 'src/pages/Register';
import Loader from 'src/components/Loader';
import NotFoundPage from 'src/pages/NotFoundPage';
// import NotFoundPage from 'src/components/NotFoundPage';

import SingleMovie from 'src/pages/SingleMovie';
// const SingleMovie = lazy( () => import('src/pages/SingleMovie'))


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
        element: <Suspense fallback={<Loader/>}><SingleMovie /></Suspense> ,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
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
