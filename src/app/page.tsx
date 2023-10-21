import MainContent from "@/layouts/main_cotent";
import MainTitlebar from "@/layouts/main_header";
import MainWrapper from "@/layouts/main_wrapper";
import { FC } from "react";

const Home: FC = () => {
  return (
    <MainWrapper>
      <MainTitlebar />
      <MainContent />
    </MainWrapper>
  );
};

export default Home;
