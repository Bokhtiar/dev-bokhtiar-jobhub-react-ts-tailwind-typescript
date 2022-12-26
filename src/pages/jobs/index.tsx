import { useCallback, useEffect, useState } from "react";
import { IJobList } from "types/job.types";
import { JobCard } from "components/job-card";
import { NetworkServices } from "network";
import { networkErrorHandeller } from "utils/helper";
import { JobListPreloader } from "components/preloader";
import { PrimaryOutlineButton } from "components/button";

export const JobIndex: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IJobList[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  /* Fetch data */
  const fetchData = useCallback(async (page: number) => {
    try {
      const response = await NetworkServices.PublicJob.index({
        page,
        limit: 20,
      });
      if (response && response.status === 200) {
        setData(response?.data?.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[260px] lg:h-[450px] overflow-hidden bg-aboutbackground bg-no-repeat bg-cover">
        <div className="w-full h-full bg-primary opacity-80 p-4 text-center grid place-items-center">
          <p className="text-white font-bold text-3xl lg:text-5xl">
            Get Your Job
          </p>
        </div>
      </div>

      {/* jobs */}
      <div className="w-full lg:w-3/4 mx-auto py-20 lg:py-24 px-4 lg:px-0">
        <div>
          <p className="text-base text-gray-500 mb-4">
            {!isLoading && !data.length ? 0 : data.length} Active jobs found
          </p>
        </div>

        {isLoading && !data.length ? <JobListPreloader /> : null}

        {!isLoading && data.length
          ? data.map((item, i) => {
              return <JobCard key={i} {...item} />;
            })
          : null}

        {!isLoading && data.length ? (
          <div className="text-center pt-6">
            <PrimaryOutlineButton type="button" size="lg" className="!px-12">
              Load More ...
            </PrimaryOutlineButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};
