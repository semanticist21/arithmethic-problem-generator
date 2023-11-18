"use client";

import { useEffect, useState } from "react";

/**
 *
 * @returns titlebar height in pixels
 */
export const useTitlebarHeight = () => {
  const [height, setHeight] = useState<number>(0);
  //FIXME
  useEffect(() => {
    if (!document) return;
    const titleBarHeight = document.getElementById("titlebar")?.clientHeight;
  }, [document]);

  return height;
};
