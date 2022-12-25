import { Sidebar } from "pages/dashboard/layouts/sidebar";
export const Your_job = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-2">
          <h2 className="text-center text-4xl my-12 font-bold">Applied Jobs</h2>

          <div className="flex shadow-sm hover:shadow-md p-4">
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
                  <p className="mt-4 text-gray-500">Ashulia saver dhaka</p>
                </div>

                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">$400-$500</p>
                </div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="px-8 py-1 text-sm text-gray-600 hover:bg-blue-400 hover:text-white rounded-full bg-transparent text-gray-700 font-semibold border border-gray-500">
                Full time
              </button>
              <br />
              <div className="mt-4 text-gray-600">7hours</div>
            </div>
          </div>

          <div className="flex shadow-sm hover:shadow-md p-4">
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
                  <p className="mt-4 text-gray-500">Ashulia saver dhaka</p>
                </div>

                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">$400-$500</p>
                </div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="px-8 py-1 text-sm text-gray-600 hover:bg-blue-400 hover:text-white rounded-full bg-transparent text-gray-700 font-semibold border border-gray-500">
                Full time
              </button>
              <br />
              <div className="mt-4 text-gray-600">7hours</div>
            </div>
          </div>

          <div className="flex shadow-sm hover:shadow-md p-4">
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
                  <p className="mt-4 text-gray-500">Ashulia saver dhaka</p>
                </div>

                <div className="flex-auto w-14">
                  <p className="mt-4 text-gray-500">$400-$500</p>
                </div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="px-8 py-1 text-sm text-gray-600 hover:bg-blue-400 hover:text-white rounded-full bg-transparent text-gray-700 font-semibold border border-gray-500">
                Full time
              </button>
              <br />
              <div className="mt-4 text-gray-600">7hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
