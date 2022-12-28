import { useForm } from "react-hook-form";
import { TextAreaInput } from "components/input";
import { PrimaryButton } from "components/button";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const CommentForm: React.FC<PropsTypes> = (
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
      {/* Content */}
      <div className="flex gap-4">
        <div className="grow">
          <TextAreaInput
            label=""
            name="description"
            type="text"
            placeholder="Write your comment..."
            control={control}
            rows={1}
            error={errors.description && errors.description.message}
            defaultvalue={""}
            rules={{ required: true }}
          />
        </div>

        {/* Submit button */}
        <div className="flex-none pt-1">
          <PrimaryButton type="submit" size="md" disabled={props.loading}>
            {props.loading ? "Loading..." : "Comment"}
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
};
