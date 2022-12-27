import { Images } from "utils/images";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "utils/helper";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { PrimaryButton, PrimaryOutlineButton } from "components/button";

export const MainNavbar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const token = getToken();

  /* handle logout */
  const handleLogout = async () => {
    await removeToken();
    navigate("/");
  };

  return (
    <div className="flex w-full p-3 items-center justify-center gap-2 fixed top-0 z-20 left-0 bg-white">
      <div className="w-full xl:w-3/4">
        <Navbar>
          {/* Sidebar toggle button */}
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

          {/* Page links */}
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0 text-sm">
              <Menu.Item>
                <Link to={"/"}>Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/jobs"}>Find a Job</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/about"}>About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/contact"}>Contact Us</Link>
              </Menu.Item>
            </Menu>
          </Navbar.Center>

          {/* Authentication button */}
          {!token ? (
            <Navbar.End className="hidden lg:flex">
              <Link to="/register">
                <PrimaryButton type="button" size="md">
                  Register
                </PrimaryButton>
              </Link>

              <Link to="/login">
                <PrimaryOutlineButton type="button" size="md">
                  Login
                </PrimaryOutlineButton>
              </Link>
            </Navbar.End>
          ) : null}

          {/* Profile dropdown */}
          {token ? (
            <Navbar.End>
              <Dropdown vertical="end">
                <Button color="ghost" className="avatar" shape="circle">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://api.lorem.space/image/face?hash=33791"
                      alt="User avatar"
                    />
                  </div>
                </Button>
                <Dropdown.Menu className="w-52 menu-compact">
                  <Link to="/dashboard">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Link to="/dashboard/change-password">
                    <Dropdown.Item>Change Password</Dropdown.Item>
                  </Link>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.End>
          ) : null}
        </Navbar>
      </div>
    </div>
  );
};
