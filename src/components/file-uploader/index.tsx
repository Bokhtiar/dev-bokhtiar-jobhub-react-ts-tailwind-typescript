import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { BiCheckDouble } from "react-icons/bi";
import { VscCloudUpload } from "react-icons/vsc";
import { networkErrorHandeller } from "utils/helper";
import { NetworkServices } from "network";
import { Images } from "utils/images";

type PropsTypes = {
  error: any;
  defaultValue: string | null;
  onUploded: (data: any) => void;
};

export const FileUploader: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const [data, setData] = useState<string | null>(props.defaultValue);
  const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle upload */
  const handleUpload = async (event: any) => {
    try {
      setLoading(true);
      const fileInfo = event.target.files[0];
      const formData = new FormData();
      formData.append("document", fileInfo);

      const response = await NetworkServices.PrivateFileUpload.upload(formData);
      if (response && response.status === 200) {
        setData(response.data.data);
        props.onUploded(response.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  /* Handle clear */
  const handleClear = () => setData(null);

  return (
    <div
      className={`w-full border ${
        props.error ? "border-red-500" : ""
      } rounded-lg overflow-hidden`}
    >
      {/* File selection handeller */}
      {!isLoading && !data ? (
        <label className="w-full h-[119px] flex flex-col items-center px-4 py-7 bg-white text-gray-400 transition-all hover:text-gray-500 cursor-pointer ">
          <VscCloudUpload size={35} />
          <span className="mt-2 text-sm">Choose a file.</span>
          <input
            type="file"
            className="hidden"
            onChange={(event) => handleUpload(event)}
          />
        </label>
      ) : null}

      {/* Loading spinner */}
      {isLoading && !data ? (
        <div className="w-full grid place-items-center h-[119px]">
          <CgSpinner size={40} className="animate-spin text-gray-400" />
        </div>
      ) : null}

      {/* File previewer */}
      {!isLoading && data ? (
        <div className="w-full flex px-4 py-7 h-[119px]">
          <div className="min-w-[63px]">
            <img
              src={Images.Avatar}
              alt="User avatar"
              className="w-[63px] h-[63px] rounded-full"
            />
          </div>
          <div className="grow overflow-hidden pl-2">
            <div className="inline-flex">
              <BiCheckDouble size={18} className="text-green-700" />
              <p className="text-xs text-gray-500">File uploaded</p>
            </div>
            <button
              type="button"
              className="text-xs ml-[18px] py-[6px] px-2 transition-all rounded-md bg-gray-100 hover:bg-gray-200 text-gray-500"
              onClick={handleClear}
            >
              Upload Another
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
