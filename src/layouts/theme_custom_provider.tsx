"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, PropsWithChildren } from "react";

const ThemeCustomProvider: FC<PropsWithChildren> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: ["HIMelody-Regular, Comfortaa"].join(","),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeCustomProvider;