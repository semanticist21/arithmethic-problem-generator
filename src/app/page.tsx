import MainContent from "@/layouts/main_cotent";
import MainTitle from "@/layouts/main_titlebar";
import MainWrapper from "@/layouts/main_wrapper";
import { FC } from "react";

const Home: FC = () => {
  return (
    <MainWrapper>
      <MainTitle />
      <MainContent />
    </MainWrapper>
  );
};

export default Home;
