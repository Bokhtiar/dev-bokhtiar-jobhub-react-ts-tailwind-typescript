import { Navigate } from "react-router-dom";

import { MainLayout } from "layouts/main.layout";
// import { DashboardLayout } from "layouts/dashboard.layout";

import { Home } from "pages/home";
import { JobIndex } from "pages/jobs";
import { JobShow } from "pages/jobs/show";
import { About } from "pages/about";
import { Contact } from "pages/contact";
export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
      { path: "", element: <Home /> },
      { path: "jobs", element: <JobIndex /> },
      { path: "jobs/:id", element: <JobShow /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
