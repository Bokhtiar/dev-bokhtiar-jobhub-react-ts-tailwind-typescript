import { arrayFromNumber } from "utils/helper";

export const JobListPreloader: React.FC = (): JSX.Element => {
  return (
    <>
      {arrayFromNumber(3).map((i: number) => (
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
