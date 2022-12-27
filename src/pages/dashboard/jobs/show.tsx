import { useCallback, useEffect, useState } from "react";
import { IJob } from "types/job.types";
import { NetworkServices } from "network";
import { NoContent } from "components/204";
import { useParams } from "react-router-dom";
import { NetworkError } from "components/501";
import { FaMapMarkerAlt } from "react-icons/fa";
import { JobListPreloader } from "components/preloader";
import { networkErrorHandeller, dateparse } from "utils/helper";

export const JobShow: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<IJob | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [serverError, setServerError] = useState<boolean>(false);

  /* Fetch data */
  const fetchData = useCallback(async () => {
    try {
      const response = await NetworkServices.PrivateJob.show(id || "");
      if (response && response.status === 200) {
        setData(response?.data?.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        setServerError(true);
        networkErrorHandeller(error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">Job information</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">All details of job.</p>

      {/* Pre-loader handeller */}
      {isLoading && !serverError && !data ? (
        <div className="text-center">
          <JobListPreloader count={1} />
        </div>
      ) : null}

      {/* Network error handeller */}
      {!isLoading && !data && serverError ? (
        <div className="text-center">
          <NetworkError />
        </div>
      ) : null}

      {/* No content handeller */}
      {!isLoading && !data && !serverError ? (
        <div className="text-center">
          <NoContent message="Job not found." />
        </div>
      ) : null}

      {/* job detials */}
      {!isLoading && !serverError && data ? (
        <div>
          <div className="xl:flex gap-8">
            {/* Job card & description */}
            <div className="grow mb-6 xl:mb-0">
              {/* Job card */}
              <div className="mb-8 rounded-lg bg-white w-full">
                <div className="xl:flex gap-7">
                  <div className="flex-none mb-6 xl:mb-0">
                    <img
                      src={data.company_logo}
                      alt="Company logo"
                      className="w-[85px] h-[85px]"
                    />
                  </div>
                  <div className="grow">
                    <p className="text-gray-600 text-xl font-normal transition-all hover:text-primary mb-4">
                      {data.title}
                    </p>
                    <div className="xl:flex xl:justify-start xl:gap-6">
                      <p className="text-gray-400 text-sm mb-2 xl:mb-0">
                        {data.company_name}
                      </p>
                      <div className="inline-flex">
                        <FaMapMarkerAlt
                          size={16}
                          className="text-gray-400 mt-[2px]"
                        />
                        <p className="text-gray-400 text-sm mb-2 xl:mb-0 ml-1">
                          {data.location}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm">
                        TK {data.start_salary} - {data.end_salary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job description */}
              <p className="text-gray-900 text-lg mb-5">Job Description</p>

              <div className="text-gray-600 text-sm leading-loose">
                <p>{data.description}</p>
              </div>
            </div>

            {/* Job Overview & company details */}
            <div className="flex-none w-full xl:!w-[350px]">
              {/* Job Overview */}
              <div className="border p-6 mb-12">
                <p className="text-gray-800 text-lg mb-5">Job Overview</p>
                <div className="flex justify-between mb-3">
                  <div className="w-[120px]">
                    <p className="text-gray-800 text-sm mb-3">Posted date :</p>
                    <p className="text-gray-800 text-sm mb-3">Location :</p>
                    <p className="text-gray-800 text-sm mb-3">Vacancy :</p>
                    <p className="text-gray-800 text-sm mb-3">Job nature :</p>
                    <p className="text-gray-800 text-sm mb-3">Salary :</p>
                    <p className="text-gray-800 text-sm">Application date :</p>
                  </div>
                  <div className="text-end">
                    <p className="text-gray-800 text-sm mb-3">
                      {dateparse(data.createdAt)}
                    </p>
                    <p className="text-gray-800 text-sm mb-3">
                      {data.location}
                    </p>
                    <p className="text-gray-800 text-sm mb-3">{data.vacancy}</p>
                    <p className="text-gray-800 text-sm mb-3">
                      {data.job_type}
                    </p>
                    <p className="text-gray-800 text-sm mb-3">
                      TK {data.start_salary} - {data.end_salary}{" "}
                      <span className="capitalize">{data.salary_type}</span>
                    </p>
                    <p className="text-gray-800 text-sm">
                      {dateparse(data.expired_at)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company details */}
              <div>
                <p className="text-gray-800 text-lg mb-4">
                  Company Information
                </p>
                <p className="text-gray-800 text-lg font-bold mb-4 capitalize">
                  {data.company_name}
                </p>
                <p className="text-gray-800 text-sm leading-loose mb-4">
                  {data.company_short_description}
                </p>
                <div className="flex">
                  <div className="w-[70px]">
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      Name:
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      Web:
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      Email:
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-gray-800 text-sm mb-2">
                      {data.company_name}
                    </p>
                    <p className="text-gray-800 text-sm mb-2 lowercase">
                      {data.company_website}
                    </p>
                    <p className="text-gray-800 text-sm mb-2">
                      {data.company_email_address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
