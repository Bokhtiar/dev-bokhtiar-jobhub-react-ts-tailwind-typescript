import { useForm } from "react-hook-form";
import { PasswordInput } from "components/input";
import { PrimaryOutlineButton } from "components/button";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const ChangePasswordForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  /* Handle form submit */
  const onSubmit = (data: any) => {
    if (data.new_password !== data.re_type_new_password) {
      return setError("re_type_new_password", {
        type: "re_type_new_password",
        message: "Password doesn't match with new password.",
      });
    }
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Old password input control */}
      <div className="mb-6">
        <PasswordInput
          label="Old password"
          name="old_password"
          type="text"
          placeholder="********"
          control={control}
          error={errors.old_password && errors.old_password.message}
          defaultvalue={""}
          rules={{ required: "Old password is required." }}
        />
      </div>

      {/* New password input control */}
      <div className="mb-6">
        <PasswordInput
          label="New password"
          name="new_password"
          type="text"
          placeholder="********"
          control={control}
          error={errors.new_password && errors.new_password.message}
          defaultvalue={""}
          rules={{ required: "New password is required." }}
        />
      </div>

      {/* Re-type new password input control */}
      <div className="mb-6">
        <PasswordInput
          label="Re-type new password"
          name="re_type_new_password"
          type="text"
          placeholder="********"
          control={control}
          error={
            errors.re_type_new_password && errors.re_type_new_password.message
          }
          defaultvalue={""}
          rules={{ required: "Re-type new password is required." }}
        />
      </div>

      {/* Submit button */}
      <div className="text-right">
        <PrimaryOutlineButton
          type="submit"
          size="lg"
          className="!px-12"
          disabled={props.loading}
        >
          {props.loading ? "Loading..." : "Save Changes"}
        </PrimaryOutlineButton>
      </div>
    </form>
  );
};
