import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isValidEmail } from "utils/helper";
import { PrimaryOutlineButton } from "components/button";
import { TextInput, PasswordInput } from "components/input";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const LoginForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Handle form submit */
  const onSubmit = (data: any) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-6">
        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="example@gmail.com"
          control={control}
          error={errors.email && errors.email.message}
          defaultvalue={""}
          rules={{
            required: "Email is required.",
            pattern: {
              value: isValidEmail(),
              message: "Invalid email address.",
            },
          }}
        />
      </div>

      {/* Password input control */}
      <div className="mb-2">
        <PasswordInput
          label="Password"
          name="password"
          type="text"
          placeholder="********"
          control={control}
          error={errors.password && errors.password.message}
          defaultvalue={""}
          rules={{ required: "Password is required" }}
        />
      </div>

      {/* Another page links */}
      <div className="text-right mb-8">
        <Link to="/reset">
          <p className="text-sm font-medium text-muted hover:text-primary">
            Click here to reset password.
          </p>
        </Link>
      </div>

      {/* Submit button */}
      <div className="text-right">
        <PrimaryOutlineButton
          type="submit"
          size="lg"
          className="!px-12"
          disabled={props.loading}
        >
          {props.loading ? "Loading..." : "Submit"}
        </PrimaryOutlineButton>
      </div>
    </form>
  );
};
