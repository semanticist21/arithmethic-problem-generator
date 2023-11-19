"use client";

import { useTitlebarHeight } from "@hooks/use_size";
import clsx from "clsx";
import { SplashScreen } from "components/splash_screen";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const ContainerWithSplash: FC<PropsWithChildren> = ({ children }) => {
  const height = useTitlebarHeight();
  const [showSplash, setShowChild] = useState<boolean>(true);

  useEffect(() => {
    setShowChild(false);
  }, []);

  return (
    <div className="relative h-full" style={{ paddingTop: height }}>
      <SplashScreen isShow={showSplash} />
      <div className={clsx(showSplash ? "hidden" : "")}> {children}</div>
    </div>
  );
};

export default ContainerWithSplash;
