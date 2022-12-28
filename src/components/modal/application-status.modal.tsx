import { useState } from "react";
import { useForm } from "react-hook-form";
import { VscClose } from "react-icons/vsc";
import { Toastify } from "components/toastify";
import { PrimaryButton } from "components/button";
import { networkErrorHandeller } from "utils/helper";
import { Modal, Button, Form, Radio } from "react-daisyui";
import { IApplicantList } from "types/applicant.types";
import { NetworkServices } from "network";

type PropsTypes = {
  visible: boolean;
  data: IApplicantList;
  toggleVisible: () => void;
};

export const ApplicationStatusModal: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const { handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(props.data.status);
  const status_types: string[] = ["Pending", "Approved", "Canceled"];

  /* Handle form submit */
  const onSubmit = async () => {
    try {
      setLoading(true);
      const formData = {
        id: props.data._id,
        status: selectedValue,
      };
      const response = await NetworkServices.PrivateJob.changeApplicationStatus(
        { data: formData }
      );

      if (response && response.status === 200) {
        Toastify.Success(response.data.message);
      }
      setLoading(false);
      reset();
      props.toggleVisible();
      console.log(response);
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
        <p className="mt-2">Change application status</p>

        {!isLoading ? (
          <Button
            color="ghost"
            onClick={props.toggleVisible}
            className="!p-3 rounded-full text-danger bg-gray-100"
          >
            <VscClose size={20} />
          </Button>
        ) : null}
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            {status_types.map((item, i) => (
              <Form.Label key={i} title={item}>
                <Radio
                  name="radio-button"
                  className="checked:bg-primary"
                  defaultChecked={selectedValue === item}
                  onChange={() => setSelectedValue(item)}
                />
              </Form.Label>
            ))}
          </div>

          <PrimaryButton type="submit" size="md" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </PrimaryButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
