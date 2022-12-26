import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { HiMenuAlt1 } from "react-icons/hi";
import { Images } from "utils/images";
import { Link } from "react-router-dom";
import { PrimaryButton, PrimaryOutlineButton } from "components/button";

export const MainNavbar = () => {
  return (
    <div className="flex w-full p-3 items-center justify-center gap-2 fixed top-0 left-0 bg-white">
      <div className="w-full xl:w-3/4">
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button
                color="ghost"
                className="lg:hidden rounded-full px-[10px] py-2"
              >
                <HiMenuAlt1 size={25} />
              </Button>
            </Dropdown>
            <Link to={"/"}>
              <img src={Images.Logo} className="h-[40px]" alt="Logo" />
            </Link>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0 text-base">
              <Menu.Item>
                <Link to={"/"}>Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/"}>Find a Job</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/"}>About</Link>
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End className="hidden lg:flex">
            <PrimaryButton type="button" size="md">
              Register
            </PrimaryButton>
            <PrimaryOutlineButton type="button" size="md">
              Login
            </PrimaryOutlineButton>
          </Navbar.End>
        </Navbar>
      </div>
    </div>
  );
};
