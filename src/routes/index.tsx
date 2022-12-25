import { Navigate } from "react-router-dom";

import { HomeLayout } from "layouts/home.layout";

import { Home } from "pages/home";
import { Products } from "pages/products";
import {Job} from "pages/job"
import { About } from "pages/about";
import { Contact } from "pages/contact";
import { Sidebar } from "pages/dashboard/layouts/sidebar";
import { Applied_job } from "pages/dashboard/job/Applied_job";
import { Your_job } from "pages/dashboard/job/Your_job";
import { Dashboard } from "pages/dashboard";


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
      { path: "dashboard", element: <Dashboard /> },

      // dashboard routes
      { path: "applied-job", element: <Applied_job /> },
      { path: "your-job", element: <Your_job /> },
    ],
  },
];
