import { FC } from "react";
import MainTitle from "layouts/main_titlebar";
import MainWrapper from "layouts/main_wrapper";
import ThemeCustomProvider from "layouts/theme_custom_provider";
import MainAppPage from "layouts/main_app_page";

const Home: FC = () => {
  return (
    <ThemeCustomProvider>
      <MainWrapper>
        <MainTitle />
        <MainAppPage />
      </MainWrapper>
    </ThemeCustomProvider>
  );
};

export default Home;
