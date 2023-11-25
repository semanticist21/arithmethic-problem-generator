"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, PropsWithChildren } from "react";

const ThemeCustomProvider: FC<PropsWithChildren> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FF6F61", // A soft pink color for primary elements
        contrastText: "#FFFFFF", // White text for better contrast on primary elements
      },
      secondary: {
        main: "#5B5EA6", // A gentle purple for secondary elements
        contrastText: "#FFFFFF", // White text for better contrast on secondary elements
      },
      background: {
        default: "#F0F0F0", // A very light grey for the default background
        paper: "#FFFFFF", // White for surfaces like cards and menus
      },
      text: {
        primary: "#333333", // Darker text for better readability
        secondary: "#555555", // Slightly lighter for secondary text
      },
      error: {
        main: "#D32F2F", // Red for errors
      },
      warning: {
        main: "#FFA000", // Orange for warnings
      },
      info: {
        main: "#1976D2", // Blue for informational messages
      },
      success: {
        main: "#388E3C", // Green for success states
      },
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
