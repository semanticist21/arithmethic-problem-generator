"use client";
import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";

const MainTitle = () => {
  useEffect(() => {
    const minimizeButton = document?.getElementById("titlebar-minimize");
    const maximizeButton = document?.getElementById("titlebar-maximize");
    const closeButton = document?.getElementById("titlebar-close");

    minimizeButton?.addEventListener("click", () => appWindow.minimize());
    maximizeButton?.addEventListener("click", () => appWindow.toggleMaximize());
    closeButton?.addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-button" id="titlebar-minimize">
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className="titlebar-button" id="titlebar-maximize">
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className="titlebar-button" id="titlebar-close">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  );
};

export default MainTitle;
