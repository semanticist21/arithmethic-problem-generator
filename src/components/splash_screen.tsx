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
        "absolute flex flex-col w-full h-full items-center justify-center bg-black",
        isShow ? "" : "hidden"
      )}
    >
      <CircularProgress />
      <p className="text-center mt-8 font-semibold">
        <span>로딩 중입니다.</span>
        <br />
        <span>잠시만 기다려주세요...</span>
      </p>
    </div>
  );
};
