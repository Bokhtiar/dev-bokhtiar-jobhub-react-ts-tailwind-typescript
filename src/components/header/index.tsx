import { JobSearchForm } from "components/form/job-search.form";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  /* handle navigate */
  const handleNavigate = (data: any) => navigate(`/jobs?query=${data.query}`);

  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-3/4 mx-auto">
        <div className="px-6 lg:px-0 py-24 lg:py-48">
          <div className="text-5xl lg:text-7xl xl:text-8xl text-center font-bold">
            Find the most exciting start new job
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/5 mx-auto my-20">
            <JobSearchForm
              loading={false}
              onSubmit={(data) => handleNavigate(data)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
