import { ICommentList } from "types/job.types";
import { Images } from "utils/images";

type PropsTypes = {
  data: ICommentList;
};

export const Comment: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="w-full flex gap-3 py-2 lg:py-4 mb-3">
      <div className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full overflow-hidden">
        <img
          src={props.data.created_by.profile_image || Images.Avatar}
          className="min-w-full min-h-full"
          alt="User avatar."
        />
      </div>
      <div>
        <p className="text-gray-600 font-semibold text-sm mb-1">
          {props.data.created_by.name}
        </p>
        <p className="text-gray-500 text-sm font-normal leading-relaxed">
          {props.data.description}
        </p>
      </div>
    </div>
  );
};
