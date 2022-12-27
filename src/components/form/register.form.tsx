import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isValidEmail, isValidPhone, genderList } from "utils/helper";
import { PrimaryOutlineButton } from "components/button";
import {
  TextInput,
  PasswordInput,
  DateInput,
  SingleSelect,
} from "components/input";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const RegisterForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Handle form submit */
  const onSubmit = (data: any) => {
    const formData = {
      ...data,
      gender: data.gender.value,
    };

    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            control={control}
            error={errors.name && errors.name.message}
            defaultvalue={""}
            rules={{ required: "Name is required." }}
          />
        </div>

        {/* Phone */}
        <div>
          <TextInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="01X-XXXX-XXXX"
            control={control}
            error={errors.phone && errors.phone.message}
            defaultvalue={""}
            rules={{
              required: "Phone is required.",
              pattern: {
                value: isValidPhone(),
                message: "Invalid phone number.",
              },
            }}
          />
        </div>

        {/* Email */}
        <div>
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

        {/* DOB */}
        <div>
          <DateInput
            label="Date of birth"
            name="dob"
            placeholder="Select date"
            control={control}
            error={errors.dob && errors.dob.message}
            defaultvalue={new Date().toString()}
            rules={{ required: "Date of birth required." }}
          />
        </div>

        {/* Gender */}
        <div>
          <SingleSelect
            label="Gender"
            name="gender"
            control={control}
            error={errors.gender && errors.gender.message}
            defaultvalue={null}
            options={genderList}
            isClearable={true}
            placeholder="Select gender"
            rules={{ required: "Gender is required." }}
          />
        </div>

        {/* Password input control */}
        <div>
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
      </div>

      {/* Another page links */}
      <div className="text-right mt-2 mb-8">
        <Link to="/login">
          <p className="text-sm font-medium text-muted hover:text-primary">
            Back to login.
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
