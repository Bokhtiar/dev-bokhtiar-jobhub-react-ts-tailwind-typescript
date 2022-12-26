import { Outlet } from "react-router-dom";
import { MainNavbar } from "components/navbar";
import { Footer } from "components/footer";

export const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <MainNavbar />
      <div className="mt-[88px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
