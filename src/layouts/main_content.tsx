"use client";

import { Box, SxProps, useTheme } from "@mui/material";
import PrintPage from "pages/print_page";
import SettingPage from "pages/setting_page";
import { FC } from "react";
import useNavStore from "store/nav_store";

export const MainContent: FC = () => {
  // props
  const { getActiveKey } = useNavStore();

  // styles
  const mainContentBoxStyle: SxProps = {
    flexGrow: 1,
    p: 1,
  };

  const ActivePage = () =>
    getActiveKey() === 0 ? <SettingPage /> : <PrintPage />;

  return (
    <Box id="main-content" component="main" sx={mainContentBoxStyle}>
      <ActivePage />
    </Box>
  );
};

export default MainContent;
