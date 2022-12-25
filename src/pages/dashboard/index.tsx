import { Sidebar } from "pages/dashboard/layouts/sidebar";
export const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-2">
          <h2 className="text-center text-4xl my-12 font-bold">Profile</h2>
          <div className="text-center">
            <div className="shadow-md  mx-48">
              <img
                className="h-32 mx-auto"
                src="https://static.vecteezy.com/system/resources/previews/002/192/008/non_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-background-vector.jpg"
                alt=""
              />

              <div className="">
                <span>Staveen smit</span>
                <br />
                <span>staveen@gmail.com</span>
                <br />
                <span>01918212912</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
