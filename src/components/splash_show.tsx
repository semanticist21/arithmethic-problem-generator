"use client";

import { SplashScreen } from "components/splash_screen";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const SplashShow: FC<PropsWithChildren> = ({ children }) => {
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  return showChild ? <div>{children}</div> : <SplashScreen />;
};

export default SplashShow;
