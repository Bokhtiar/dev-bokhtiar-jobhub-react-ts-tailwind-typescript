import { Images } from "utils/images";
import { PrimaryButton } from "components/button";
import { FaMapMarkerAlt } from "react-icons/fa";

export const JobShow: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* Header */}
      <div className="w-full h-[260px] lg:h-[450px] overflow-hidden bg-aboutbackground bg-no-repeat bg-cover">
        <div className="w-full h-full bg-primary opacity-80 p-4 text-center grid place-items-center">
          <p className="text-white font-bold text-3xl lg:text-5xl">Job Title</p>
        </div>
      </div>

      {/* job detials */}
      <div className="w-full lg:w-3/4 mx-auto py-20 lg:py-24 px-4 lg:px-0">
        <div className="lg:flex gap-8">
          {/* Job card & description */}
          <div className="grow mb-6 lg:mb-0">
            {/* Job card */}
            <div className="p-6 lg:p-7 mb-8 rounded-lg bg-white w-full">
              <div className="lg:flex gap-7">
                <div className="flex-none mb-6 lg:mb-0">
                  <img
                    src={Images.Job}
                    alt="Company logo"
                    className="w-[85px] h-[85px]"
                  />
                </div>
                <div className="grow">
                  <p className="text-gray-600 text-2xl font-normal transition-all hover:text-primary mb-4">
                    Software Engineer
                  </p>
                  <div className="lg:flex lg:justify-start lg:gap-6">
                    <p className="text-gray-400 mb-2 lg:mb-0">ABC Inc.</p>
                    <div className="inline-flex">
                      <FaMapMarkerAlt
                        size={16}
                        className="text-gray-400 mt-[2px]"
                      />
                      <p className="text-gray-400 mb-2 lg:mb-0 ml-1">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <p className="text-gray-400 ">5000 - 6000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job description */}
            <p className="text-gray-900 text-lg mb-5">Job Description</p>

            <div className="text-gray-600 text-base leading-loose">
              <p>
                It is a long established fact that a reader will beff distracted
                by vbthe creadable content of a page when looking at its layout.
                The pointf of using Lorem Ipsum is that it has ahf mcore
                or-lgess normal distribution of letters, as opposed to using,
                Content here content here making it look like readable.
              </p>
            </div>
          </div>

          {/* Job Overview & company details */}
          <div className="flex-none w-full lg:!w-80 xl:!w-96">
            {/* Job Overview */}
            <div className="border p-6 mb-12">
              <p className="text-gray-800 text-lg mb-5">Job Overview</p>
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-gray-800 text-sm mb-3">Posted date :</p>
                  <p className="text-gray-800 text-sm mb-3">Location :</p>
                  <p className="text-gray-800 text-sm mb-3">Vacancy :</p>
                  <p className="text-gray-800 text-sm mb-3">Job nature :</p>
                  <p className="text-gray-800 text-sm mb-3">Salary :</p>
                  <p className="text-gray-800 text-sm mb-3">
                    Application date :
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 text-sm mb-3">12 Aug 2019</p>
                  <p className="text-gray-800 text-sm mb-3">New York</p>
                  <p className="text-gray-800 text-sm mb-3">02</p>
                  <p className="text-gray-800 text-sm mb-3">Full time</p>
                  <p className="text-gray-800 text-sm mb-3">$7,800 yearly</p>
                  <p className="text-gray-800 text-sm mb-3">12 Sep 2020</p>
                </div>
              </div>

              <PrimaryButton type="button" size="md">
                Apply Now
              </PrimaryButton>
            </div>

            {/* Company details */}
            <div>
              <p className="text-gray-800 text-lg mb-4">Company Information</p>
              <p className="text-gray-800 text-lg font-bold mb-4">
                Company name
              </p>
              <p className="text-gray-800 text-sm leading-loose mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex">
                <div className="w-[70px]">
                  <p className="text-gray-800 text-sm font-medium mb-2">
                    Name:
                  </p>
                  <p className="text-gray-800 text-sm font-medium mb-2">Web:</p>
                  <p className="text-gray-800 text-sm font-medium mb-2">
                    Email:
                  </p>
                </div>
                <div className="grow">
                  <p className="text-gray-800 text-sm mb-2">ABC Inc.</p>
                  <p className="text-gray-800 text-sm mb-2">abc.com</p>
                  <p className="text-gray-800 text-sm mb-2">
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
