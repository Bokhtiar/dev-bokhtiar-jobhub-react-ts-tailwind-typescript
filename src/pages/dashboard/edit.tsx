import { useState, useCallback, useEffect } from "react";
import { NetworkServices } from "network";
import { IProfile } from "types/profile.types";
import { NetworkError } from "components/501";
import { Toastify } from "components/toastify";
import { networkErrorHandeller } from "utils/helper";
import { InputFormPreloader } from "components/preloader";
import { ProfileForm } from "components/form/profile.form";
import { FileUploader } from "components/file-uploader";

export const ProfileEdit: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IProfile | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [serverError, setServerError] = useState<boolean>(false);
  const [isUpdating, setUpdating] = useState<boolean>(false);

  /* Fetch data */
  const fetchData = useCallback(async () => {
    try {
      const response = await NetworkServices.PrivateProfile.me();
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

  /* handle update profile image */
  const handleUpdateImage = async (data: string) => {
    try {
      const formData = { image: data };
      const response = await NetworkServices.PrivateProfile.changeProfileImage({
        data: formData,
      });

      if (response && response.status === 200) {
        Toastify.Success(response.data.message);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  };

  /* Handle updaet */
  const handleUpdate = async (data: any) => {
    try {
      setUpdating(true);
      const response = await NetworkServices.PrivateProfile.update({ data });
      if (response && response.status === 200) {
        Toastify.Success(response.data.message);
      }
      setUpdating(false);
    } catch (error: any) {
      if (error) {
        setUpdating(false);
        networkErrorHandeller(error);
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">Update profile</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Update personal information.
      </p>
      {isLoading && !serverError && !data ? <InputFormPreloader /> : null}
      {!isLoading && !data && serverError ? <NetworkError /> : null}
      {!isLoading && !serverError && data ? (
        <div>
          <div className="mb-6 xl:mb-8 w-full sm:w-[250px]">
            <FileUploader
              defaultValue={null}
              error={false}
              onUploded={(data) => handleUpdateImage(data)}
            />
          </div>
          <ProfileForm
            data={data}
            loading={isUpdating}
            onSubmit={(data) => handleUpdate(data)}
          />
        </div>
      ) : null}
    </div>
  );
};
