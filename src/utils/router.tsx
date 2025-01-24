import { createBrowserRouter } from 'react-router';
import Favorite from 'src/pages/Favorite';
import Layout from 'src/pages/Layout';
import Login from 'src/pages/Login';
import MainPage from 'src/pages/MainPage';
import Register from 'src/pages/Register';
import SingleMovie from 'src/pages/SingleMovie';

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
        element: <SingleMovie />,
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
]);
