import { Images } from "utils/images";

type PropsTypes = {
  message: string;
};

export const NoContent: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="p-5 2xl:p-10 w-full rounded-xl overflow-hidden sm:w-[500px] text-center bg-white">
      <img
        src={Images.NoContent}
        alt="No content available."
        className="mx-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
      />
      <p className="text-base font-medium text-secondary mt-4">
        {props.message}
      </p>
    </div>
  );
};
