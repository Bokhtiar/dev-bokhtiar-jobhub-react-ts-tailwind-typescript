import { useForm } from "react-hook-form";
import { PrimaryOutlineButton } from "components/button";
import {
  TextInput,
  TextAreaInput,
  SingleSelect,
  DateInput,
} from "components/input";
import { isValidEmail, jobTypeList, salaryTypeList } from "utils/helper";
import { FileUploader } from "components/file-uploader";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const JobForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  /* Handle set value */
  const handleSetValue = ({ key, value }: { key: string; value: string }) => {
    setValue(`${key}`, value);
    clearErrors(key);
  };

  /* Handle form submit */
  const onSubmit = (data: any) => {
    if (!data.company_logo) {
      return setError("company_logo", {
        type: "custom",
        message: "Company logo is required.",
      });
    }

    const formData = {
      ...data,
      job_type: data.job_type.value,
      salary_type: data.salary_type.value,
      start_salary: parseInt(data.start_salary),
      end_salary: parseInt(data.end_salary),
      vacancy: parseInt(data.vacancy),
    };

    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Company logo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-6">
        <FileUploader
          defaultValue={null}
          error={errors.company_logo && errors.company_logo.message}
          onUploded={(data) =>
            handleSetValue({ key: "company_logo", value: data })
          }
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
        {/* Company name */}
        <div>
          <TextInput
            label="Company name"
            name="company_name"
            type="text"
            placeholder="Company name"
            control={control}
            error={errors.company_name && errors.company_name.message}
            defaultvalue={""}
            rules={{ required: "Company name is required." }}
          />
        </div>

        {/* Company website */}
        <div>
          <TextInput
            label="Company website"
            name="company_website"
            type="text"
            placeholder="www.abc.inc"
            control={control}
            error={errors.company_website && errors.company_website.message}
            defaultvalue={""}
            rules={{ required: "Company website is required." }}
          />
        </div>

        {/* Company email address */}
        <div>
          <TextInput
            label="Company email"
            name="company_email_address"
            type="email"
            placeholder="example@gmail.com"
            control={control}
            error={
              errors.company_email_address &&
              errors.company_email_address.message
            }
            defaultvalue={""}
            rules={{
              required: "Email address is required.",
              pattern: {
                value: isValidEmail(),
                message: "Invalid email address.",
              },
            }}
          />
        </div>

        {/* Job title */}
        <div>
          <TextInput
            label="Job title"
            name="title"
            type="text"
            placeholder="Job title"
            control={control}
            error={errors.title && errors.title.message}
            defaultvalue={""}
            rules={{ required: "Job title is required." }}
          />
        </div>

        {/* Job category */}
        <div>
          <TextInput
            label="Job category"
            name="category"
            type="text"
            placeholder="Job category"
            control={control}
            error={errors.category && errors.category.message}
            defaultvalue={""}
            rules={{ required: "Job category is required." }}
          />
        </div>

        {/* Job location */}
        <div>
          <TextInput
            label="Job location"
            name="location"
            type="text"
            placeholder="Job location"
            control={control}
            error={errors.location && errors.location.message}
            defaultvalue={""}
            rules={{ required: "Job location is required." }}
          />
        </div>

        {/* Job type */}
        <div>
          <SingleSelect
            label="Job type"
            name="job_type"
            control={control}
            error={errors.job_type && errors.job_type.message}
            defaultvalue={null}
            options={jobTypeList}
            isClearable={true}
            placeholder="Select type"
            rules={{ required: "Job type is required." }}
          />
        </div>

        {/* Salary type */}
        <div>
          <SingleSelect
            label="Salary type"
            name="salary_type"
            control={control}
            error={errors.salary_type && errors.salary_type.message}
            defaultvalue={null}
            options={salaryTypeList}
            isClearable={true}
            placeholder="Select type"
            rules={{ required: "Salary type is required." }}
          />
        </div>

        {/* Start salary */}
        <div>
          <TextInput
            label="Start salary"
            name="start_salary"
            type="number"
            placeholder="60,000"
            control={control}
            error={errors.start_salary && errors.start_salary.message}
            defaultvalue={""}
            rules={{ required: "Start salary is required." }}
          />
        </div>

        {/* End salary */}
        <div>
          <TextInput
            label="End salary"
            name="end_salary"
            type="number"
            placeholder="600,000"
            control={control}
            error={errors.end_salary && errors.end_salary.message}
            defaultvalue={""}
            rules={{ required: "End salary is required." }}
          />
        </div>

        {/* Vacancy */}
        <div>
          <TextInput
            label="Vacancy"
            name="vacancy"
            type="number"
            placeholder="10"
            control={control}
            error={errors.vacancy && errors.vacancy.message}
            defaultvalue={""}
            rules={{ required: "Vacancy is required." }}
          />
        </div>

        {/* Expired time */}
        <div>
          <DateInput
            label="Expire time"
            name="expired_at"
            placeholder="Select date"
            control={control}
            error={errors.expired_at && errors.expired_at.message}
            defaultvalue={new Date().toString()}
            rules={{ required: "Expire time is required." }}
          />
        </div>

        {/* Company short description */}
        <div>
          <TextAreaInput
            label="Company short description"
            name="company_short_description"
            type="text"
            placeholder="Write about company"
            control={control}
            rows={4}
            error={
              errors.company_short_description &&
              errors.company_short_description.message
            }
            defaultvalue={""}
            rules={{ required: "Company short description is required." }}
          />
        </div>

        {/* Job description */}
        <div>
          <TextAreaInput
            label="Job description"
            name="description"
            type="text"
            placeholder="Write job description"
            control={control}
            rows={7}
            error={errors.description && errors.description.message}
            defaultvalue={""}
            rules={{ required: "Job description is required." }}
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="text-right">
        <PrimaryOutlineButton type="submit" size="lg" disabled={props.loading}>
          {props.loading ? "Loading..." : "Post Job"}
        </PrimaryOutlineButton>
      </div>
    </form>
  );
};
