"use client";

import { useEffect, useState } from "react";
import { useTauriWindow } from "./use_tauri";

/**
 *
 * @returns titlebar height in pixels
 */
export const useTitlebarHeight = () => {
  const [height, setHeight] = useState<number>(0);
  const appWindow = useTauriWindow();
  useEffect(() => {
    if (!appWindow) return;

    const titleBarHeight = document.getElementById("titlebar")?.clientHeight;
    setHeight(titleBarHeight || 0);
  }, [appWindow]);

  return height;
};
