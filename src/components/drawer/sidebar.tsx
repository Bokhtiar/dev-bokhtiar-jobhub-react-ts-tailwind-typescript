import { Link } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";

/* ------------ Link button start ------------ */
type LinkButtonPropsTypes = {
  title: string;
  path: string;
};

const LinkButton: React.FC<LinkButtonPropsTypes> = (
  props: LinkButtonPropsTypes
): JSX.Element => {
  return (
    <>
      <Link to={props.path}>
        <button
          type="button"
          className="w-full py-4 text-sm rounded-none inline-flex justify-between border-b text-gray-500 bg-white"
        >
          <span>{props.title}</span>
          <RxChevronRight size={18} className="mt-[3px]" />
        </button>
      </Link>
    </>
  );
};
/* ------------ Link button end ------------ */

type PropsTypes = {
  show: boolean;
  onClick?: () => any;
};

export const SidebarDrawer: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <>
      <div
        className={
          props.show
            ? "fixed top-0 visible left-0 w-full h-[100vh] z-[90] transition-all duration-300 bg-black opacity-75"
            : "fixed top-0 invisible left-0 w-full h-[100vh] z-[90] transition-all duration-300 bg-black opacity-0"
        }
        onClick={props.onClick}
      />
      <div
        className={
          props.show
            ? "p-4 fixed top-0 left-0 w-[300px] h-[100vh] shadow-lg bg-white z-[100] transition-all duration-300"
            : "p-4 fixed top-0 -left-[300px] w-[300px] h-[100vh] shadow-lg bg-white z-[100] transition-all duration-300"
        }
      >
        <LinkButton path="/" title="Home" />
        <LinkButton path="/jobs" title="Find a Job" />
        <LinkButton path="/about" title="About" />
        <LinkButton path="/contact" title="Contact Us" />
      </div>
    </>
  );
};
