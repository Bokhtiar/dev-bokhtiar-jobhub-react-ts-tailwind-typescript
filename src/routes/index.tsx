import { Navigate } from "react-router-dom";

import { HomeLayout } from "layouts/home.layout";

import { Home } from "pages/home";
import { Products } from "pages/products";
import {Job} from "pages/job"
import { About } from "pages/about";
import { Contact } from "pages/contact";

export const appRoutes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
      { path: "", element: <Home /> },

      { path: "products", element: <Products /> },
      { path: "job", element: <Job /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
