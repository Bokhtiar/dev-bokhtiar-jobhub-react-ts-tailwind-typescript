import { useEffect, useState } from "react";
import { NetworkServices } from "network";
import { useNavigate } from "react-router-dom";
import { Toastify } from "components/toastify";
import { RegisterForm } from "components/form/register.form";
import { networkErrorHandeller, setToken, getToken } from "utils/helper";

export const Register: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle register */
  const handleRegister = async (data: any) => {
    try {
      setLoading(true);
      const response = await NetworkServices.Authentication.register(data);
      if (response && response.status === 201) {
        Toastify.Success(response.data.message);
        await setToken(response.data.token);
        navigate("/dashboard");
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
      <div className="w-full lg:w-3/4 mx-auto p-8 lg:p-10 bg-white">
        <p className="text-gray-700 text-3xl mb-1">Register</p>
        <p className="text-gray-400 text-sm mb-10">Create new account.</p>
        <RegisterForm
          loading={isLoading}
          onSubmit={(data) => handleRegister(data)}
        />
      </div>
    </div>
  );
};
