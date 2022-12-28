import { useState } from "react";
import { JobForm } from "components/form/job.form";
import { networkErrorHandeller } from "utils/helper";

export const JobCreate: React.FC = (): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean>(false);

  /* handle form submission */
  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      console.log(data);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">Create Job</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">Post a new job.</p>

      <JobForm loading={isLoading} onSubmit={(data) => handleSubmit(data)} />
    </div>
  );
};
