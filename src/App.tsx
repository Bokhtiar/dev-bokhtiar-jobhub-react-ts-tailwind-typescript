import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "layouts/main.layout";
import { FourOFour } from "pages/404";
import { appRoutes } from "routes";

export const App = () => {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <FourOFour /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...appRoutes]);

  return <>{routing}</>;
};
