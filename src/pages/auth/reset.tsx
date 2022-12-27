import { useEffect, useState } from "react";
import { NetworkServices } from "network";
import { useNavigate } from "react-router-dom";
import { Toastify } from "components/toastify";
import { ResetForm } from "components/form/reset.form";
import { networkErrorHandeller, getToken } from "utils/helper";

export const Reset: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle reset */
  const handleReset = async (data: any) => {
    try {
      setLoading(true);
      const response = await NetworkServices.Authentication.reset(data);
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

  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="w-full lg:w-3/4 mx-auto py-24 lg:py-32 px-4 lg:px-0">
      <div className="w-full md:w-[550px] mx-auto p-8 lg:p-10 bg-white">
        <p className="text-gray-700 text-3xl mb-1">Reset</p>
        <p className="text-gray-400 text-sm mb-10">
          Reset your account password.
        </p>
        <ResetForm loading={isLoading} onSubmit={(data) => handleReset(data)} />
      </div>
    </div>
  );
};
