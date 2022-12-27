import { useState } from "react";
import { useForm } from "react-hook-form";
import { VscClose } from "react-icons/vsc";
import { Toastify } from "components/toastify";
import { PrimaryButton } from "components/button";
import { networkErrorHandeller } from "utils/helper";
import { Modal, Button, FileInput } from "react-daisyui";

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
  const handleSetValue = ({ key, value }: { key: string; value: any }) => {
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
      const formData = new FormData();
      formData.append("resume", data.resume);

      setTimeout(() => {
        setLoading(false);
        Toastify.Info("File upload inprogress.");
        reset();
        props.toggleVisible();
      }, 2000);
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
          <label className="label">
            {errors.resume && errors.resume.message ? (
              <span className="label-text text-danger">File is required.</span>
            ) : (
              <span className="label-text">Select a file</span>
            )}
          </label>
          <FileInput
            className="shadow-none"
            onChange={(event) =>
              handleSetValue({
                key: "resume",
                value: event.target.files ? event.target.files[0] : null,
              })
            }
          />

          <PrimaryButton type="submit" size="md" disabled={isLoading}>
            {isLoading ? "Uploading..." : "Upload"}
          </PrimaryButton>
        </form>
      </Modal.Body>
    </Modal>
  );
};
