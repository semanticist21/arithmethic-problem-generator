"use client";

import { useWindowListener } from "@hooks/use_window_listener";
import {
  useTauriEvent,
  useTauriVersion,
  useTauriWindow,
} from "@hooks/use_tauri";
import { useEffect, useRef, useState } from "react";

import {
  CloseTwoTone,
  CropSquareTwoTone,
  HorizontalRuleTwoTone,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { SxProps, useTheme } from "@mui/material/styles";
import Exam from "@assets/svgs/exam.svg";

// layout styles defined in 'main_title.scss'
const MainTitle = () => {
  // state
  const theme = useTheme();
  const [dynamicBg, setDynamicBg] = useState<string>(theme.palette.grey[900]);
  const version = useTauriVersion();

  const boxRef = useRef<HTMLDivElement>(null);
  const appWindow = useTauriWindow();

  // bind window events
  useWindowListener("titlebar-minimize", "click", appWindow?.minimize);
  useWindowListener("titlebar-maximize", "click", appWindow?.toggleMaximize);
  useWindowListener("titlebar-close", "click", appWindow?.close);

  // dynamic focus change
  const addAppBlurListener = () => setDynamicBg(theme.palette.grey[700]);
  const addAppFocusDownListener = () => setDynamicBg(theme.palette.grey[900]);

  useTauriEvent("blur", addAppBlurListener);
  useTauriEvent("focus", addAppFocusDownListener);

  // styles
  const titleBarStyle: SxProps = {
    backgroundColor: dynamicBg,
  };

  const buttonStyle: SxProps = {
    color: theme.palette.primary.light,
    height: "100%",
    minWidth: "2.5rem",
    padding: 0,
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  };

  const genBtn = (id: string, icon: React.ReactNode) => () => {
    return (
      <Button id={id} size="small" variant="text" sx={buttonStyle}>
        {icon}
      </Button>
    );
  };

  const Minimize = genBtn("titlebar-minimize", <HorizontalRuleTwoTone />);
  const Maximize = genBtn("titlebar-maximize", <CropSquareTwoTone />);
  const Close = genBtn("titlebar-close", <CloseTwoTone />);

  return (
    <Box
      id="titlebar"
      className="flex"
      data-tauri-drag-region
      ref={boxRef}
      sx={titleBarStyle}
    >
      <div className="flex items-center cursor-default">
        <div className="w-4" />
        <Exam />
        <div className="w-2" />
        <p className="flex">
          <span className="font-semibold text-sm text-gray-100">
            주산 문제 생성기
          </span>
          <span className="w-1" />
          <i className="text-xs self-end text-gray-400">{version}</i>
        </p>
        <div className="w-2" />
      </div>
      <div className="ml-auto">
        <Minimize />
        <Maximize />
        <Close />
      </div>
    </Box>
  );
};

export default MainTitle;
