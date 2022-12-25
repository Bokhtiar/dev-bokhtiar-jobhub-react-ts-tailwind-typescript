import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-20">
      <ul className="w-72 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="py-4 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="py-4 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <Link to="/dashboard">Profile</Link>
        </li>
        <li className="py-4 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          <Link to="/applied-job"> Applied Jobs</Link>
        </li>
        <li className="py-4 px-4 w-full rounded-b-lg">
          <Link to="/your-job">Your jobs</Link>
        </li>
      </ul>
    </div>
  );
};
