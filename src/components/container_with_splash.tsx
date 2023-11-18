"use client";

import clsx from "clsx";
import { SplashScreen } from "components/splash_screen";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const ContainerWithSplash: FC<PropsWithChildren> = ({ children }) => {
  const [showSplash, setShowChild] = useState<boolean>(true);

  // useEffect(() => {
  //   setShowChild(false);
  // }, []);

  return (
    <div>
      <SplashScreen isShow={showSplash} />
      <div className={clsx(showSplash ? "hidden" : "")}> {children}</div>
    </div>
  );
};

export default ContainerWithSplash;
