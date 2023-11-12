export type Keys<T> = T[keyof T];

// https://tauri.app/v1/api/js/event/
export const EventTypes = [
  "blur",
  "update",
  "update-download-progress",
  "update-installed",
  "menu",
  "update-status",
  "focus",
  "move",
  "moved",
  "resized",
  "foucs",
] as const;
