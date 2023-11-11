"use client";

import { listen } from "@tauri-apps/api/event";
import { WebviewWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import { Keys, EventTypes } from "types/tauri";

// https://tauri.app/v1/api/js/event/
export const useTauriEvent = (
  type: Keys<typeof EventTypes>,
  callback: () => void
) => {
  useEffect(() => {
    const unsubscribe = listen(`tauri://${type}`, callback);

    return () => {
      unsubscribe.then((unsub) => unsub());
    };
  }, []);
};

export const useTauriWindow = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();

  const setUpWindowAfterLoad = () => {
    import("@tauri-apps/api/window").then((imported) => {
      setAppWindow(imported.appWindow);
    });
  };

  useEffect(() => setUpWindowAfterLoad(), []);
  return appWindow;
};
