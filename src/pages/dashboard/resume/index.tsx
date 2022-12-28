import { AiOutlinePlus, AiOutlineLink } from "react-icons/ai";
import { Images } from "utils/images";
import { NetworkServices } from "network";
import { NetworkError } from "components/501";
import { networkErrorHandeller } from "utils/helper";
import { ResumePreloader } from "components/preloader";
import { useState, useCallback, useEffect } from "react";
import { ResumeAddModal } from "components/modal/resume-add.modal";

export const ResumrIndex: React.FC = (): JSX.Element => {
  const [data, setData] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [serverError, setServerError] = useState<boolean>(false);

  /* Fetch data */
  const fetchData = useCallback(async () => {
    try {
      const response = await NetworkServices.PrivateProfile.showResume();
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* handle resume add modal */
  const handleResumeAddModal = () => setVisible(!visible);

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">My Resume</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Your latest uploaded resume.
      </p>

      {isLoading && !serverError && !data ? <ResumePreloader /> : null}
      {!isLoading && !data && serverError ? <NetworkError /> : null}

      {/* Resume add */}
      {!isLoading && !serverError && !data ? (
        <div className="text-center">
          <div
            className="w-[180px] h-[220px] overflow-hidden border mx-auto cursor-pointer grid place-items-center mb-5"
            onClick={handleResumeAddModal}
          >
            <AiOutlinePlus size={24} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-400 font-medium">
            No resume found. Add new resume.
          </p>
        </div>
      ) : null}

      {!isLoading && !serverError && data ? (
        <div className="sm:inline-flex gap-6">
          {/* Resume cover */}
          <div className="w-[180px] h-[220px] overflow-hidden border mx-auto mb-6 md:mb-0 grid place-items-center relative">
            <img
              src={Images.Resume}
              className="w-full h-full"
              alt="Resume avatar"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />

            <a href={data} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="p-2 rounded-full bg-gray-700 text-white absolute top-2 right-2 transition-all hover:bg-white hover:text-black"
              >
                <AiOutlineLink size={20} />
              </button>
            </a>
          </div>

          {/* Resume add */}
          <div
            className="w-[180px] h-[220px] overflow-hidden border mx-auto cursor-pointer grid place-items-center"
            onClick={handleResumeAddModal}
          >
            <AiOutlinePlus size={24} className="text-gray-400" />
          </div>
        </div>
      ) : null}

      {/* Resume add modal */}
      <ResumeAddModal
        visible={visible}
        toggleVisible={() => {
          setData(null);
          fetchData();
          handleResumeAddModal();
        }}
      />
    </div>
  );
};
