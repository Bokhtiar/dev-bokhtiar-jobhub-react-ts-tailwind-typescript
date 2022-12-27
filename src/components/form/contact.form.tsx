import { useForm } from "react-hook-form";
import { PrimaryOutlineButton } from "components/button";
import { TextInput, TextAreaInput } from "components/input";
import { isValidEmail } from "utils/helper";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const ContactForm: React.FC<PropsTypes> = (
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
      <div className="mb-6">
        <TextAreaInput
          label="Message"
          name="message"
          type="text"
          placeholder="Your message"
          control={control}
          rows={8}
          error={errors.message && errors.message.message}
          defaultvalue={""}
          rules={{ required: "Message is required" }}
        />
      </div>

      <div className="lg:flex gap-6">
        {/* Name */}
        <div className="grow mb-6">
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            control={control}
            error={errors.name && errors.name.message}
            defaultvalue={""}
            rules={{ required: "Name is required" }}
          />
        </div>

        {/* Email */}
        <div className="grow mb-6">
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
      </div>

      {/* Subject */}
      <div className="grow mb-6">
        <TextInput
          label="Subject"
          name="subject"
          type="text"
          placeholder="Email subject"
          control={control}
          error={errors.subject && errors.subject.message}
          defaultvalue={""}
          rules={{ required: "Subject is required" }}
        />
      </div>

      {/* Submit button */}
      <div className="text-right">
        <PrimaryOutlineButton type="submit" size="lg" disabled={props.loading}>
          {props.loading ? "Sending..." : "Send Message"}
        </PrimaryOutlineButton>
      </div>
    </form>
  );
};
