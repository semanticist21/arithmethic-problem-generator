import clsx from "clsx";
import { FC } from "react";

export interface RestoreWindowIconProps {
  bgColor?: string;
  hoverColor?: string;
}

const RestoreWindowIcon: FC<RestoreWindowIconProps> = ({
  bgColor,
  hoverColor,
}) => {
  // FIXME
  // TAILWIND CSS
  // HOVER COLOR DOES NOT WORK
  return (
    <div className="relative flex justify-center items-center w-full h-full overflow-visible">
      <div className="absolute top-2.5 left-4 w-3.5 h-3.5 rounded-sm border-2 border-[#E3F2FD]" />
      <div
        className={clsx(
          "absolute top-3.5 left-3 w-3.5 h-3.5 rounded-sm border-2 border-[#E3F2FD]",
          `bg-${bgColor}`,
          `hover:bg-${hoverColor}`
        )}
      />
    </div>
  );
};

export default RestoreWindowIcon;
