import { Link } from "react-router-dom";
export const JobDetails = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          {/* job*/}
          <div className="flex shadow-sm hover:shadow-md p-4 my-8">
            <div className="flex-auto-16 m-4">
              <img
                src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/icon/job-list2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-64 ml-8 m-4">
              <h2 className="text-2xl text-blue-400">Digital Marketing</h2>
              <div className="flex">
                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">Ride Care ltd</p>
                </div>

                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">Ashulia saver</p>
                </div>

                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">$400-$500</p>
                </div>
              </div>
            </div>
          </div>

          {/* job description */}
          <div>
            <h3 className="text-gray-600 text-xl">Job Description</h3>
            <p className="text-gray-500 my-6">
              It is a long established fact that a reader will beff distracted
              by vbthe creadable content of a page when looking at its layout.
              The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess
              normal distribution of letters, as opposed to using, Content here
              content here making it look like readable.
            </p>
            {/* Required Knowledge skill */}
            <h3 className="text-gray-600 text-xl">
              Required Knowledge, Skills, and Abilities
            </h3>
            <p className="my-6 mx-4">
              <ul className="text-gray-500">
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
              </ul>
            </p>
            {/* education & experience */}
            <h3 className="text-gray-600 text-xl">Education + Experience</h3>
            <p className="my-6 mx-4">
              <ul className="text-gray-500">
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
                <li className="flex my-2 text-sm">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  &nbsp; System Software Development
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="grid-cols-3 md:col-span-1 lg:col-span-1">
          {/* job overview */}
          <div className="shadow-md w-60 md:w-96 ">
            <h2 className="text-gray-600 text-xl mx-6 my-8">Job Overview</h2>
            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>

            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>

            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>

            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>

            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>
            <div className="flex justify-between mx-6 text-gray-500 my-2">
              <span>Posted date</span>
              <span>12 Aug 20022</span>
            </div>

            {/* applied button */}
            <button className="mx-6 bg-orange-600 text-white py-2 px-8 rounded-md mb-8 my-8">
              Apply Now
            </button>
          </div>
          <div className="my-8">
            <h2 className="text-xl text-gray-600 my-2">Company Information</h2>
            <h4 className="txxt-xl text-gray-500">Colorlib</h4>
            <p className="my-6 text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            {/* company info */}
            <div className="flex gap-4 my-2">
              <span className="text-xl text-gray-600">Name:</span>
              <span className="text-gray-500 text-md">Colorlib</span>
            </div>

            <div className="flex gap-4 my-2">
              <span className="text-xl text-gray-600">Email:</span>
              <span className="text-gray-500 text-md">Colorlib@gmail.com</span>
            </div>

            <div className="flex gap-4 my-2">
              <span className="text-xl text-gray-600">Phone:</span>
              <span className="text-gray-500 text-md">01938732783</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
