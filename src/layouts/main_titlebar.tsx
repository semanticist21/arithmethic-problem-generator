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
import CloseFullscreenTwoToneIcon from "@mui/icons-material/CloseFullscreenTwoTone";

// layout styles defined in 'main_title.scss'
const MainTitle = () => {
  // state
  const theme = useTheme();
  const [dynamicBg, setDynamicBg] = useState<string>(theme.palette.grey[900]);
  const version = useTauriVersion();

  const boxRef = useRef<HTMLDivElement>(null);
  const appWindow = useTauriWindow();

  const [isMaximized, setIsMaximized] = useState<boolean>(false);

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

  //FIXME
  const maximize = () => {
    appWindow?.maximize();
    setIsMaximized(true);
  };

  const unMaximize = () => {
    appWindow?.unmaximize();
    setIsMaximized(false);
  };

  const close = () => appWindow?.close();

  const Minimize = genBtn(<HorizontalRuleTwoTone />, minimize);
  const Maximize = genBtn(<CropSquareTwoTone />, maximize);
  const UnMaximize = genBtn(<CloseFullscreenTwoToneIcon />, unMaximize);
  const Close = genBtn(<CloseTwoTone />, close);

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
        {isMaximized ? <UnMaximize /> : <Maximize />}
        <Close />
      </div>
    </Box>
  );
};

export default MainTitle;
