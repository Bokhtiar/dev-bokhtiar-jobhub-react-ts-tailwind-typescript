import { Button } from "react-daisyui";

type PropsTypes = {
  type: "button" | "submit";
  size: "lg" | "md" | "sm" | "xs";
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  onClick?: (data: any) => any;
  children: React.ReactNode;
};

export const PrimaryButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <Button
      type={props.type}
      tabIndex={props.tabIndex}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      color="primary"
      className="text-white text-sm rounded-none px-8 capitalize font-normal"
    >
      {props.children}
    </Button>
  );
};

export const PrimaryOutlineButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <Button
      type={props.type}
      tabIndex={props.tabIndex}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      color="primary"
      variant="outline"
      className="text-white text-sm rounded-none px-8 capitalize font-normal"
    >
      {props.children}
    </Button>
  );
};
