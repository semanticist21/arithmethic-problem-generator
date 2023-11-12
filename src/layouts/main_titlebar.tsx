"use client";

import { useWindowListener } from "@hooks/use_window_listener";
import { useTauriEvent, useTauriWindow } from "@hooks/use_tauri";
import { useRef, useState } from "react";

import {
  CloseTwoTone,
  CropSquareTwoTone,
  HorizontalRuleTwoTone,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { SxProps, useTheme } from "@mui/material/styles";
import Exam from "@assets/svgs/exam.svg";

const MainTitle = () => {
  // state
  const theme = useTheme();
  const [dynamicBg, setDynamicBg] = useState<string>(theme.palette.grey[900]);

  const boxRef = useRef<HTMLDivElement>(null);
  const appWindow = useTauriWindow();

  // bind window events
  useWindowListener("titlebar-minimize", "click", appWindow?.minimize);
  useWindowListener("titlebar-maximize", "click", appWindow?.toggleMaximize);
  useWindowListener("titlebar-close", "click", appWindow?.close);

  // dynamic focus change
  const addAppUnfocusListener = () => setDynamicBg(theme.palette.grey[700]);
  const addAppFocusDownListener = () => setDynamicBg(theme.palette.grey[900]);

  useTauriEvent("blur", addAppUnfocusListener);
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

  return (
    <Box
      id="titlebar"
      className="flex"
      data-tauri-drag-region
      ref={boxRef}
      sx={titleBarStyle}
    >
      <div className="flex items-center transition-all duration-300 hover:opacity-80">
        <div className="w-4" />
        <Exam />
        <div className="w-2" />
        <span className="font-semibold text-sm text-gray-100">
          주산 문제 생성기
        </span>
        <div className="w-2" />
        <i className="text-xs self-end mb-[0.375rem] text-gray-400">1.0.0v</i>
      </div>
      <div className="ml-auto">
        <Button
          id="titlebar-minimize"
          size="small"
          variant="text"
          sx={buttonStyle}
        >
          <HorizontalRuleTwoTone />
        </Button>

        <Button
          id="titlebar-maximize"
          size="small"
          variant="text"
          sx={buttonStyle}
        >
          <CropSquareTwoTone />
        </Button>

        <Button
          id="titlebar-close"
          size="small"
          variant="text"
          sx={buttonStyle}
        >
          <CloseTwoTone />
        </Button>
      </div>
    </Box>
  );
};

export default MainTitle;
