import { Navigate } from "react-router-dom";
import { getToken } from "utils/helper";

import { DashboardLayout } from "layouts/dashboard.layout";
import { Dashboard } from "pages/dashboard";
import { ProfileEdit } from "pages/dashboard/edit";
import { ResumrIndex } from "pages/dashboard/resume";
import { JobIndex } from "pages/dashboard/jobs";
import { JobCreate } from "pages/dashboard/jobs/create";
import { JobShow } from "pages/dashboard/jobs/show";
import { ApplicantsIndex } from "pages/dashboard/jobs/applicants";
import { ApplicantProfile } from "pages/dashboard/jobs/applicant.profile";
import { ApplicationIndex } from "pages/dashboard/applications";
import { ApplicationShow } from "pages/dashboard/applications/show";
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
      { path: "jobs/applicants/:id", element: <ApplicantsIndex /> },
      { path: "jobs/applicants/profile/:id", element: <ApplicantProfile /> },
      { path: "applications", element: <ApplicationIndex /> },
      { path: "applications/:id", element: <ApplicationShow /> },
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
