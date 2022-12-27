import { Navigate } from "react-router-dom";
import { getToken } from "utils/helper";

import { DashboardLayout } from "layouts/dashboard.layout";
import { Dashboard } from "pages/dashboard";
import { ProfileEdit } from "pages/dashboard/edit";
import { ResumrIndex } from "pages/dashboard/resume";
import { JobIndex } from "pages/dashboard/jobs";
import { JobCreate } from "pages/dashboard/jobs/create";
import { JobShow } from "pages/dashboard/jobs/show";
import { ApplicationIndex } from "pages/dashboard/applications";
import { ChangePassword } from "pages/dashboard/change-password";

const appRoutes = [
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Dashboard /> },
      { path: "edit", element: <ProfileEdit /> },
      { path: "resume", element: <ResumrIndex /> },
      { path: "jobs", element: <JobIndex /> },
      { path: "jobs/create", element: <JobCreate /> },
      { path: "jobs/show/:id", element: <JobShow /> },
      { path: "applications", element: <ApplicationIndex /> },
      { path: "change-password", element: <ChangePassword /> },
    ],
  },
];

/* Generate permitted routes */
export const permittedRoutes = () => {
  const token = getToken();
  if (token) {
    return appRoutes;
  }

  return [];
};
