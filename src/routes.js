import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import About from './Container/About';
import Contectus from './Container/Contectus';
import Home from './Container/Home';
import Medicine from './Container/Medicine';
import News from './Container/News';
import Onlinebuy from './Container/Onlinebuy';
import Layout from './Layout';

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to='/home' />,
        },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/medicine", element: <Medicine /> },
        { path: "/onlinebuy", element: <Onlinebuy /> },
        { path: "/News", element: <News /> },
        { path: "/Contectus", element: <Contectus /> },
      ],
    },
  ]);
}

export default Routes