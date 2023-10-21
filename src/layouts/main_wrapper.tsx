import { FC, PropsWithChildren } from "react";

const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-c1280 min-w-c1280">{children}</div>;
};

export default MainWrapper;
