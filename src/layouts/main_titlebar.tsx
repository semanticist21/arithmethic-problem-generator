"use client";

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
import { APP_NAME } from "consts/consts";
import RestoreWindowIcon from "components/atoms/restore_window_icon";

// layout styles defined in 'main_title.scss'
const MainTitle = () => {
  // state
  const theme = useTheme();
  const [dynamicBg, setDynamicBg] = useState<string>(theme.palette.grey[900]);
  const version = useTauriVersion();

  const boxRef = useRef<HTMLDivElement>(null);
  const appWindow = useTauriWindow();

  const [isWindowMaximized, setIsWindowMaximized] = useState<boolean>(false);

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

  const genBtn = (icon: React.ReactNode, callback: () => void) => () => {
    return (
      <Button size="small" variant="text" sx={buttonStyle} onClick={callback}>
        {icon}
      </Button>
    );
  };

  // window control
  const minimize = () => appWindow?.minimize();
  const maximize = () => appWindow?.maximize();
  const unMaximize = () => appWindow?.unmaximize();
  const close = () => appWindow?.close();

  const Minimize = genBtn(<HorizontalRuleTwoTone />, minimize);
  const Maximize = genBtn(<CropSquareTwoTone />, maximize);
  const UnMaximize = genBtn(
    <RestoreWindowIcon bgColor={dynamicBg} />,
    unMaximize
  );
  const Close = genBtn(<CloseTwoTone />, close);

  // use effects
  // bind resize event
  const bindResizeEvent = () => {
    appWindow?.isMaximized().then((flag) => {
      flag ? setIsWindowMaximized(true) : setIsWindowMaximized(false);
    });
  };

  // bind resize event in the first time
  useEffect(() => {
    if (appWindow) appWindow.onResized(bindResizeEvent);
  }, [appWindow]);

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
            {APP_NAME}
          </span>
          <span className="w-1" />
          <i className="text-xs self-end text-gray-400">{version}</i>
        </p>
        <div className="w-2" />
      </div>
      <div className="ml-auto">
        <Minimize />
        {isWindowMaximized ? <UnMaximize /> : <Maximize />}
        <Close />
      </div>
    </Box>
  );
};

export default MainTitle;
