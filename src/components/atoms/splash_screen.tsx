import { FC } from "react";
import clsx from "clsx";
import { CircularProgress } from "@mui/material";

export interface SplashScreenProps {
  isShow: boolean;
}

export const SplashScreen: FC<SplashScreenProps> = ({ isShow }) => {
  return (
    <div
      className={clsx(
        "absolute flex flex-col w-full h-full items-center justify-center",
        isShow ? "" : "hidden"
      )}
    >
      <CircularProgress />
    </div>
  );
};
