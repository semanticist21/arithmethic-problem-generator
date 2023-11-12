"use client";

import { invoke } from "@tauri-apps/api/tauri";
import { FC, PropsWithChildren, useEffect } from "react";

const SplashHandler: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    invoke("close_splashscreen");
  }, []);

  return <>{children}</>;
};

export default SplashHandler;
