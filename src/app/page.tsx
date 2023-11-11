import { FC } from "react";
import MainContent from "layouts/main_cotent";
import MainTitle from "layouts/main_titlebar";
import MainWrapper from "layouts/main_wrapper";
import ThemeProvder from "layouts/theme_provider";

const Home: FC = () => {
  return (
    <ThemeProvder>
      <MainWrapper>
        <MainTitle />
        <MainContent />
      </MainWrapper>
    </ThemeProvder>
  );
};

export default Home;
