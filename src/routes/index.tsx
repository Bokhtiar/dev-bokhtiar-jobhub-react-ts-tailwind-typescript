import { Navigate } from "react-router-dom";

import { HomeLayout } from "layouts/home.layout";

import { Home } from "pages/home";
import { Products } from "pages/products";

export const appRoutes = [
  {
    path: "home",
    element: <HomeLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
      { path: "", element: <Home /> },

      { path: "products", element: <Products /> },
      { path: "jobs", element: <Products /> },
    ],
  },
];
