import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import MainLayout from './MainLayout';
import Saved from './Saved';
import Search from './Search';

function Pages() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />
        },
        {
          path: "saved",
          element: <Saved />
        },
        {
          path: "search",
          element: <Search/>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Pages