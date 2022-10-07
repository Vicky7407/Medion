import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import About from './Container/About';
import Cart from './Container/Cart';
import Contectus from './Container/Contectus';
import Forgotpassword from './Container/Forgotpassword';
import Home from './Container/Home';
import LoginFormik from './Container/Login';
import Medicine from './Container/Medicine';
import News from './Container/News';
import Onlinebuy from './Container/Onlinebuy';
import SignUp from './Container/Signup';
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
        { path: "/Login", element: <LoginFormik /> },
        { path: "/Signup", element: <SignUp />},
        { path: "/Cart", element: <Cart />},
        { path: "/Forgotpassword", element: <Forgotpassword />}
      ],
    },
  ]);
}

export default Routes