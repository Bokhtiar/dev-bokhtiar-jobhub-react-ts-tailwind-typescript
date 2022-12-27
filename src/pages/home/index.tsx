import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "components/header";
import { IJobList } from "types/job.types";
import { JobCard } from "components/job-card";
import { NetworkServices } from "network";
import { networkErrorHandeller } from "utils/helper";
import { JobListPreloader } from "components/preloader";
import { PrimaryButton, PrimaryOutlineButton } from "components/button";

export const Home: React.FC = (): JSX.Element => {
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
      <Header />

      {/* Featured jobs */}
      <div className="w-full lg:w-3/4 mx-auto py-24 lg:py-32 px-4 lg:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary mb-6">RECENT JOB</p>
          <p className="text-gray-700 font-bold text-4xl lg:text-5xl">
            Featured jobs
          </p>
        </div>

        {isLoading && !data.length ? <JobListPreloader count={4} /> : null}
        {!isLoading && !data.length ? (
          <div className="text-center">
            <p className="text-gray-400 text-lg font-bold">
              No jobs available.
            </p>
          </div>
        ) : null}

        {!isLoading && data.length
          ? data.map((item, i) => {
              return <JobCard key={i} {...item} />;
            })
          : null}

        {!isLoading && data.length ? (
          <div className="text-center pt-6">
            <Link to={"/jobs"}>
              <PrimaryOutlineButton type="button" size="lg" className="!px-12">
                View More Jobs
              </PrimaryOutlineButton>
            </Link>
          </div>
        ) : null}
      </div>

      {/* Resume */}
      <div className="w-full pb-24 lg:pb-32">
        <div className="w-full h-[550px] overflow-hidden bg-cvbackground bg-no-repeat bg-cover">
          <div className="w-full h-full bg-primary opacity-80 p-4 text-center grid place-items-center">
            <div>
              <p className="text-white mb-5">FEATURED TOURS PACKAGES</p>
              <p className="text-white font-bold text-4xl lg:text-6xl mb-8">
                Make a Difference with Your Online Resume!
              </p>
              <Link to={"/"}>
                <PrimaryOutlineButton
                  type="button"
                  size="lg"
                  className="!text-white hover:!border-white"
                >
                  UPLOAD YOUR CV
                </PrimaryOutlineButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE ARE DOING */}
      <div className="w-full lg:w-3/4 mx-auto pb-24 lg:pb-32 px-4 lg:px-0 text-center">
        <p className="text-primary mb-5">WHAT WE ARE DOING</p>

        <div className="w-full lg:w-1/2 mx-auto">
          <p className="text-gray-700 font-bold text-4xl lg:text-5xl mb-10">
            24k Talented people are getting Jobs
          </p>
        </div>

        <p className="font-medium text-base text-gray-900 mb-7">
          Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore
          eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit
          cillum.
        </p>
        <p className="font-light text-base text-gray-700 mb-14">
          Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit
          esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa
          cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut
          labore mollit anim laborum suis aute.
        </p>

        <Link to={"/"}>
          <PrimaryButton type="button" size="lg" className="!px-12">
            Post a Job
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};
