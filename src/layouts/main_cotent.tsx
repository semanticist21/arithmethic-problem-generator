"use client";

import { useTitlebarHeight } from "@hooks/use_size";
import ContainerWithSplash from "components/container_with_splash";
import { FC } from "react";

//FIXME
export const MainContent: FC = () => {
  const height = useTitlebarHeight();

  return (
    <div className={`mt-[${height}px]`}>
      <ContainerWithSplash>ddddd</ContainerWithSplash>
    </div>
  );
};

export default MainContent;
