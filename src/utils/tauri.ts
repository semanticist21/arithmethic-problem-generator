export const handleIsTauri = () => {
  return Boolean(
    typeof window !== "undefined" &&
      window !== undefined &&
      (window as any).__TAURI_IPC__ !== undefined
  );
};
