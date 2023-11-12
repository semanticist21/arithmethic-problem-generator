import { FC } from "react";
import MainContent from "layouts/main_cotent";
import MainTitle from "layouts/main_titlebar";
import MainWrapper from "layouts/main_wrapper";
import ThemeProvder from "layouts/theme_provider";
import SplashHandler from "components/splash";

const Home: FC = () => {
  return (
    <SplashHandler>
      <ThemeProvder>
        <MainWrapper>
          <MainTitle />
          <MainContent />
        </MainWrapper>
      </ThemeProvder>
    </SplashHandler>
  );
};

export default Home;
