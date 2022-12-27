import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

type MenuButtonPropsTypes = {
  link: string;
  title: string;
  border?: boolean;
};

const MenuButton: React.FC<MenuButtonPropsTypes> = (
  props: MenuButtonPropsTypes
): JSX.Element => {
  return (
    <Link to={props.link}>
      <button
        type="button"
        className={`w-full pl-4 pr-2 py-4 ${
          props.border ? "border-b" : ""
        } text-sm inline-flex justify-between transition-all bg-white hover:text-gray-900 text-gray-400`}
      >
        <span>{props.title}</span>
        <HiOutlineChevronRight size={18} className="mt-[2px]" />
      </button>
    </Link>
  );
};

export const AccountMenu: React.FC = (): JSX.Element => {
  return (
    <div className="rounded-lg overflow-hidden bg-white">
      <MenuButton border link="/dashboard" title="Profile" />
      <MenuButton border link="/dashboard/resume" title="My Resume" />
      <MenuButton border link="/dashboard/jobs" title="My Jobs" />
      <MenuButton border link="/dashboard/jobs/create" title="Post a job" />
      <MenuButton
        border
        link="/dashboard/applications"
        title="My Applications"
      />
      <MenuButton link="/dashboard/change-password" title="Change Password" />
    </div>
  );
};
