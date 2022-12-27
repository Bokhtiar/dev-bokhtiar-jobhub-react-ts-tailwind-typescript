import { useForm } from "react-hook-form";
import { genderList } from "utils/helper";
import { IProfile } from "types/profile.types";
import { PrimaryOutlineButton } from "components/button";
import {
  TextInput,
  DateInput,
  SingleSelect,
  TextAreaInput,
} from "components/input";

type PropsTypes = {
  data: IProfile;
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const ProfileForm: React.FC<PropsTypes> = (
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
        {/* Name */}
        <div>
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            control={control}
            error={errors.name && errors.name.message}
            defaultvalue={props.data.name}
            rules={{ required: "Name is required." }}
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
            defaultvalue={props.data.dob}
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
            defaultvalue={{
              label: props.data.gender,
              value: props.data.gender,
            }}
            options={genderList}
            isClearable={true}
            placeholder="Select gender"
            rules={{ required: "Gender is required." }}
          />
        </div>

        {/* Designation */}
        <div>
          <TextInput
            label="Designation"
            name="designation"
            type="text"
            placeholder="Your designation"
            control={control}
            error={errors.designation && errors.designation.message}
            defaultvalue={props.data.designation || ""}
            rules={{ required: "Designation is required." }}
          />
        </div>

        {/* Present address */}
        <div>
          <TextInput
            label="Present address"
            name="present_address"
            type="text"
            placeholder="Present address"
            control={control}
            error={errors.present_address && errors.present_address.message}
            defaultvalue={props.data.present_address || ""}
            rules={{ required: "Present address is required." }}
          />
        </div>

        {/* Permanent address */}
        <div>
          <TextInput
            label="Permanent address"
            name="permanent_address"
            type="text"
            placeholder="Permanent address"
            control={control}
            error={errors.permanent_address && errors.permanent_address.message}
            defaultvalue={props.data.permanent_address || ""}
            rules={{ required: "Permanent address is required." }}
          />
        </div>
      </div>

      {/* Website */}
      <div className="mb-6 lg:mb-8">
        <TextInput
          label="Website"
          name="website"
          type="text"
          placeholder="abc.com"
          control={control}
          error={errors.website && errors.website.message}
          defaultvalue={props.data.website || ""}
          rules={{ required: "Website is required." }}
        />
      </div>

      {/* About */}
      <div className="mb-6 lg:mb-8">
        <TextAreaInput
          label="About"
          name="about"
          type="text"
          placeholder="About yourself"
          control={control}
          rows={8}
          error={errors.about && errors.about.message}
          defaultvalue={props.data.about || ""}
          rules={{ required: "About is required" }}
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
