export type Keys<T> = T[keyof T];

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
