import { FC, PropsWithChildren } from "react";

const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};

export default MainWrapper;
