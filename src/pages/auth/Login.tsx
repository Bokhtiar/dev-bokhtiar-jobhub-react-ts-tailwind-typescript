import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <section className="shadow-md w-72 md:w-96 mx-auto my-8 md:my-32 lg:my-48">
        <div className="">
          <img
            className="rounded-full h-16 mx-auto my-8"
            src="https://www.dewr.gov.au/sites/default/files/jobs_hub_updated_image_tile_newsroom.png"
            alt=""
          />
          <form action="" className="mx-4">
            <div className="my-4">
              <label htmlFor="" className="text-md">
                Email
              </label>
              <br />
              <input
                type="text"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-md">
                Password
              </label>
              <input
                type="password"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="my-2 ">
              <input type="checkbox" name="" id="" />
              <span className="ml-4">Remember me</span>
            </div>
            <button className="bg-blue-600 text-white w-32 rounded-md py-2">
              Login
            </button>
            <div className="pb-4">
              <Link className="underline text-blue-400" to="/register">
                Create new account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
