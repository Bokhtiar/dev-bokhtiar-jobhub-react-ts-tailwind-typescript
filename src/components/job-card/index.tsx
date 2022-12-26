import { Link } from "react-router-dom";
import { IJobList } from "types/job.types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PrimaryOutlineButton } from "components/button";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export const JobCard: React.FC<IJobList> = (props: IJobList): JSX.Element => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");

  return (
    <Link to={`/jobs/${props._id}`}>
      <div className="p-6 lg:p-7 transition-all mb-8 cursor-pointer rounded-lg bg-white hover:shadow-lg w-full">
        <div className="lg:flex gap-7">
          <div className="flex-none mb-6 lg:mb-0">
            <img
              src={props.company_logo}
              alt="Company logo"
              className="w-[85px] h-[85px]"
            />
          </div>
          <div className="grow mb-6 lg:mb-0">
            <p className="text-gray-600 text-2xl font-normal transition-all hover:text-primary mb-4">
              {props.title}
            </p>
            <div className="lg:flex lg:justify-start lg:gap-6">
              <p className="text-gray-400 mb-2 lg:mb-0">{props.company_name}</p>
              <div className="inline-flex">
                <FaMapMarkerAlt size={16} className="text-gray-400 mt-[2px]" />
                <p className="text-gray-400 mb-2 lg:mb-0 ml-1">
                  {props.location}
                </p>
              </div>
              <p className="text-gray-400 ">
                {props.start_salary} - {props.end_salary}
              </p>
            </div>
          </div>
          <div className="flex-none">
            <PrimaryOutlineButton
              type="button"
              size="md"
              className="rounded-full"
            >
              {props.job_type}
            </PrimaryOutlineButton>
            <p className="mt-3 text-gray-400 text-sm">
              {timeAgo.format(new Date(props.createdAt))}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
