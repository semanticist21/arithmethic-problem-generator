import { FC } from "react";
import MainContent from "./main_cotent";
import { MainSidebar } from "./main_sidebar";
import ContainerWithSplash from "components/molecules/container_with_splash";

export const MainAppPage: FC = () => {
  return (
    <ContainerWithSplash>
      <div className="flex">
        <MainSidebar />
        <MainContent />
      </div>
    </ContainerWithSplash>
  );
};

export default MainAppPage;
