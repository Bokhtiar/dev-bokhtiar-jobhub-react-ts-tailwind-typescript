import { Outlet } from "react-router-dom";
import { MainNavbar } from "components/navbar";
import { AccountMenu } from "components/account-menu";
import { Footer } from "components/footer";

export const DashboardLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <MainNavbar />
      <div className="mt-[88px]">
        <div className="w-full lg:w-4/5 mx-auto py-10 lg:py-16 px-4 lg:px-0 lg:flex gap-6">
          <div className="w-full lg:min-w-[260px] lg:max-w-[260px] mb-6 lg:mb-0">
            <AccountMenu />
          </div>
          <div className="grow overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
