import { useState, useCallback, useEffect } from "react";
import { Images } from "utils/images";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { NetworkServices } from "network";
import { NoContent } from "components/204";
import { useParams } from "react-router-dom";
import { NetworkError } from "components/501";
import { GoPrimitiveDot } from "react-icons/go";
import { IApplicant } from "types/applicant.types";
import { ProfilePreloader } from "components/preloader";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { PrimaryOutlineButton } from "components/button";
import { dateparse, networkErrorHandeller } from "utils/helper";

export const ApplicantProfile: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<IApplicant | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [serverError, setServerError] = useState<boolean>(false);

  /* Fetch data */
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await NetworkServices.PrivateJob.applicantProfile({
        id: id || "",
      });
      if (response && response.status === 200) {
        setData(response?.data?.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        setServerError(true);
        networkErrorHandeller(error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">
        Applicant Profile
      </p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Applicant profile information.
      </p>

      {isLoading && !serverError && !data ? <ProfilePreloader /> : null}
      {!isLoading && !data && serverError ? <NetworkError /> : null}
      {!isLoading && !data && !serverError ? (
        <NoContent message="Profile not found!!" />
      ) : null}

      {!isLoading && !serverError && data ? (
        <div>
          {/* Profile header */}
          <div className="flex gap-4 mb-10">
            <div className="!w-[100px] !h-[100px] rounded-full overflow-hidden">
              <img
                src={data.profile_image || Images.Avatar}
                className="min-w-full min-h-full"
                alt="Profile avatar"
              />
            </div>
            <div className="pt-3 lg:pt-2">
              <p className="text-gray-800 text-xl lg:text-3xl font-medium">
                {data.name}
              </p>
              <p className="text-gray-400 text-sm lg:text-base font-medium">
                {data.designation || "N/A"}
              </p>
              <div className="flex gap-1">
                <p className="text-gray-400 text-sm">{data.gender}</p>
                <GoPrimitiveDot size={15} className="mt-1 text-gray-400" />
                <p className="text-gray-400 text-sm">{dateparse(data.dob)}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">Contact</p>
            <div className="w-full inline-flex mb-3">
              <BsFillTelephonePlusFill size={15} className="text-gray-500" />
              <p className="text-gray-500 text-sm ml-3">+88{data.phone}</p>
            </div>
            <div className="w-full inline-flex mb-3">
              <MdEmail size={20} className="text-gray-500" />
              <p className="text-gray-500 text-sm ml-2">{data.email}</p>
            </div>
            <div className="w-full inline-flex">
              <FaGlobe size={18} className="text-gray-500" />
              <p className="text-gray-500 text-sm ml-[10px]">
                {data.website || "N/A"}
              </p>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">About</p>
            <p className="text-gray-500 text-sm">{data.about || "N/A"}</p>
          </div>

          {/* Address */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">Address</p>

            <table className="table-auto">
              <tbody>
                <tr>
                  <td>
                    <p className="text-gray-500 text-sm">Present Address</p>
                  </td>
                  <td className="pl-3">
                    <p className="text-gray-500 text-sm">
                      : {data.present_address || "N/A"}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-gray-500 text-sm">Permanent Address</p>
                  </td>
                  <td className="pl-3">
                    <p className="text-gray-500 text-sm">
                      : {data.permanent_address || "N/A"}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Link button */}
          <div>
            {data.resume ? (
              <a href={data.resume} target="_blank" rel="noopener noreferrer">
                <PrimaryOutlineButton
                  type="button"
                  size="md"
                  className="!px-4 lg:!px-7"
                >
                  View Resume
                </PrimaryOutlineButton>
              </a>
            ) : (
              <p className="text-gray-500 text-sm">Resume not found.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
