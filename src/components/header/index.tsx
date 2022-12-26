import { PrimaryButton } from "components/button";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-3/4 mx-auto">
        <div className="px-6 lg:px-0 py-24 lg:py-48">
          <div className="text-5xl lg:text-7xl xl:text-8xl text-center font-bold">
            Find the most exciting start new job
          </div>
          <div className="flex w-full md:w-1/2 lg:w-2/3 xl:w-2/5 mx-auto my-20">
            <input
              type="text"
              className="py-4 p-4 rounded-sm w-full focus-visible:outline-none"
              placeholder="Job title or keyword"
            />
            <PrimaryButton type="submit" size="lg">
              Find Job
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
