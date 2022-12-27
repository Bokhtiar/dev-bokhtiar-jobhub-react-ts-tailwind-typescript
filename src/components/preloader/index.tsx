import { arrayFromNumber } from "utils/helper";

type PropsTypes = {
  count: number;
};

/* Job list preloader */
export const JobListPreloader: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <>
      {arrayFromNumber(props.count).map((i: number) => (
        <div key={i} className="p-6 lg:p-7 mb-8 w-full bg-white rounded-lg">
          <div className="animate-pulse">
            <div className="lg:flex gap-7">
              <div className="flex-none mb-6 lg:mb-0">
                <div className="w-[85px] h-[85px] rounded bg-slate-200" />
              </div>

              <div className="grow mb-6 lg:mb-0">
                <div className="w-5/6 md:w-1/2 lg:w-1/3 h-6 rounded-full mb-6 bg-slate-200" />
                <div className="lg:flex lg:justify-start lg:gap-6">
                  <div className="w-1/2 lg:w-24 h-4 rounded-full mb-4 lg:mb-0 bg-slate-200" />
                  <div className="w-1/2 lg:w-24 h-4 rounded-full mb-4 lg:mb-0 bg-slate-200" />
                  <div className="w-1/2 lg:w-24 h-4 rounded-full mb-4 lg:mb-0 bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

/* User profile preloader */
export const ProfilePreloader: React.FC = (): JSX.Element => {
  return (
    <div className="w-full rounded-lg">
      <div className="animate-pulse flex gap-4">
        <div className="!w-[100px] !h-[100px] rounded-full bg-slate-200"></div>
        <div>
          <div className="w-[150px] md:w-[250px] h-6 bg-slate-200 rounded-full mt-3 lg:mt-2 mb-3"></div>
          <div className="w-[100px] md:w-[200px] h-4 bg-slate-200 rounded-full mb-3" />
          <div className="w-[100px] md:w-[200px] h-4 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

/* Input form preloader */
export const InputFormPreloader: React.FC = (): JSX.Element => {
  return (
    <div className="w-full rounded-lg">
      <div className="animate-pulse">
        <div className="w-full h-[58px] mb-6 bg-slate-200" />
        <div className="w-full h-[58px] mb-6 bg-slate-200" />
        <div className="w-full h-[58px] mb-6 bg-slate-200" />
        <div className="w-[142px] h-[64px] ml-auto bg-slate-200" />
      </div>
    </div>
  );
};

/* Resume preloader */
export const ResumePreloader: React.FC = (): JSX.Element => {
  return (
    <div className="w-[180px] h-[220px] border p-4">
      <div className="animate-pulse">
        {arrayFromNumber(11).map((i: number) => (
          <div key={i} className="w-full h-2 rounded-full mb-2 bg-slate-200" />
        ))}
      </div>
    </div>
  );
};
