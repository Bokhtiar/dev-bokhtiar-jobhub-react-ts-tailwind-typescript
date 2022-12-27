import { useState } from "react";
import { NetworkServices } from "network";
import { Toastify } from "components/toastify";
import { networkErrorHandeller } from "utils/helper";
import { ChangePasswordForm } from "components/form/change-password.form";

export const ChangePassword: React.FC = (): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean>(false);

  /* handle form submission */
  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await NetworkServices.PrivateProfile.changePassword({
        data,
      });
      if (response && response.status === 200) {
        Toastify.Success(response.data.message);
      }

      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">Change Password</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Change your account password.
      </p>

      <ChangePasswordForm
        loading={isLoading}
        onSubmit={(data) => handleSubmit(data)}
      />
    </div>
  );
};
