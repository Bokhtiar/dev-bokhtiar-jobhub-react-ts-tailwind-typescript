import { ToastContainer } from "react-toastify";
import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "layouts/main.layout";
import { FourOFour } from "pages/404";
import { permittedRoutes } from "routes";

import { Home } from "pages/home";
import { JobIndex } from "pages/jobs";
import { JobShow } from "pages/jobs/show";
import { About } from "pages/about";
import { Contact } from "pages/contact";
import { Login } from "pages/auth/login";
import { Register } from "pages/auth/register";
import { Reset } from "pages/auth/reset";

export const App = () => {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Home /> },
      { path: "jobs", element: <JobIndex /> },
      { path: "jobs/:id", element: <JobShow /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "reset", element: <Reset /> },
      { path: "404", element: <FourOFour /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
      <ToastContainer />
    </>
  );
};
