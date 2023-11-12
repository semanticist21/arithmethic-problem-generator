"use client";

import { listen } from "@tauri-apps/api/event";
import { WebviewWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import { Keys, EventTypes } from "types/tauri";

/**
 *
 * @param type tauri event type
 * @param callback function bind to event
 */
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

/**
 *
 * @returns app window object
 */
export const useTauriWindow = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();

  const setupWindowAfterLoad = () => {
    import("@tauri-apps/api/window").then((imported) =>
      setAppWindow(imported.appWindow)
    );
  };

  useEffect(() => setupWindowAfterLoad(), []);
  return appWindow;
};