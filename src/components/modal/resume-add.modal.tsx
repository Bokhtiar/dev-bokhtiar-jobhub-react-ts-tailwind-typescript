import { useState } from "react";
import { useForm } from "react-hook-form";
import { VscClose } from "react-icons/vsc";
import { Toastify } from "components/toastify";
import { PrimaryButton } from "components/button";
import { networkErrorHandeller } from "utils/helper";
import { FileUploader } from "components/file-uploader";
import { Modal, Button } from "react-daisyui";
import { NetworkServices } from "network";

type PropsTypes = {
  visible: boolean;
  toggleVisible: () => void;
};

export const ResumeAddModal: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle set value */
  const handleSetValue = ({ key, value }: { key: string; value: string }) => {
    setValue(`${key}`, value);
    clearErrors(key);
  };

  /* handle close modal */
  const handleClose = () => {
    reset();
    props.toggleVisible();
  };

  /* Handle form submit */
  const onSubmit = async (data: any) => {
    try {
      if (!data.resume) {
        return setError("resume", {
          type: "custom",
          message: "File is required.",
        });
      }

      setLoading(true);
      const formData = { resume: data.resume };
      const response = await NetworkServices.PrivateProfile.addResume({
        data: formData,
      });

      if (response && response.status === 200) {
        Toastify.Success(response.data.message);
      }

      setLoading(false);
      reset();
      props.toggleVisible();
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  return (
    <Modal open={props.visible}>
      <Modal.Header className="font-bold flex justify-between">
        <p className="mt-2">Upload Resume</p>

        {!isLoading ? (
          <Button
            color="ghost"
            onClick={handleClose}
            className="!p-3 rounded-full text-danger bg-gray-100"
          >
            <VscClose size={20} />
          </Button>
        ) : null}
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <FileUploader
              defaultValue={null}
              error={errors.resume && errors.resume.message}
              onUploded={(data) =>
                handleSetValue({ key: "resume", value: data })
              }
            />
          </div>

          <div className="text-right">
            <PrimaryButton type="submit" size="md" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload"}
            </PrimaryButton>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
