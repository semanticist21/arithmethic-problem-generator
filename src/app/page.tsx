import { FC } from "react";
import MainContent from "layouts/main_cotent";
import MainTitle from "layouts/main_titlebar";
import MainWrapper from "layouts/main_wrapper";
import ThemeCustomProvider from "layouts/theme_custom_provider";
import { SplashShow } from "layouts/splash_show";

const Home: FC = () => {
  return (
    <ThemeCustomProvider>
      <MainWrapper>
        <MainTitle />
        <MainContent />
      </MainWrapper>
    </ThemeCustomProvider>
  );
};

export default Home;
