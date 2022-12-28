import { PrimaryButton } from "components/button";
import { useForm, SubmitHandler } from "react-hook-form";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

type Inputs = {
  query: string;
};

export const JobSearchForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const { register, handleSubmit } = useForm<Inputs>();

  /* Handle form submit */
  const onSubmit: SubmitHandler<Inputs> = (data) => props.onSubmit(data);

  return (
    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="py-4 p-4 rounded-sm w-full focus-visible:outline-none"
        placeholder="Job title or keyword"
        {...register("query", { required: true })}
      />
      <PrimaryButton type="submit" size="lg">
        Find Job
      </PrimaryButton>
    </form>
  );
};
