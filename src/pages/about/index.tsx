import { PrimaryButton } from "components/button";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/helper";
import { Images } from "utils/images";

export const About: React.FC = (): JSX.Element => {
  const navigation = useNavigate();

  /* handle navigation */
  const handleNavigation = async (path: string) => {
    const token = await getToken();
    if (!token) {
      navigation("/login");
    } else {
      navigation(path);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[260px] lg:h-[450px] overflow-hidden bg-aboutbackground bg-no-repeat bg-cover">
        <div className="w-full h-full bg-primary opacity-80 p-4 text-center grid place-items-center">
          <p className="text-white font-bold text-3xl lg:text-5xl">About Us</p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto py-24 lg:py-32 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-center lg:text-left mb-10">
            <p className="text-primary mb-5">WHAT WE ARE DOING</p>
            <p className="text-gray-700 font-bold text-4xl lg:text-5xl mb-10">
              24k Talented people are getting Jobs
            </p>

            <p className="font-medium text-base text-gray-900 mb-7">
              Mollit anim laborum duis au dolor in voluptate velit ess cillum
              dolore eu lore dsu quality mollit anim laborumuis au dolor in
              voluptate velit cillum.
            </p>
            <p className="font-light text-base text-gray-700 mb-14">
              Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate
              velit esscillumlore eu quife nrulla parihatur. Excghcepteur
              signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp
              incididbnt ut labore mollit anim laborum suis aute.
            </p>

            <PrimaryButton
              type="button"
              size="lg"
              className="!px-12"
              onClick={() => handleNavigation("/dashboard/jobs/create")}
            >
              Post a Job
            </PrimaryButton>
          </div>

          <div className="text-center">
            <img
              src={Images.Support}
              className="max-w-full max-h-[700px] rounded-lg mx-auto"
              alt="Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
