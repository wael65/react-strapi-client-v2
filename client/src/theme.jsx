import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          mainBg: {
            main: "#f7f7fa",
          },
          menuBg: {
            main: "#f6f9fc",
          },

          hoverBg: {
            main: "#eceff1",
          },

          badgeBg: {
            main: "#1976d2",
          },

          expandIcon: {
            main: "#000",
          },

          langText: {
            main: "#fff",
          },

          text: {
            primary: "#000",
          },

          myText: {
            main: "#424242",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: "grey[300]",
          },
        }
      : {
          // palette values for dark mode
          mainBg: {
            main: "#263238",
          },

          menuBg: {
            main: "#252b32",
          },

          hoverBg: {
            main: "#455a64",
          },

          badgeBg: {
            main: "#90caf9",
          },

          expandIcon: {
            main: "#fff",
          },
          langText: {
            main: "#fff",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },

          myText: {
            main: "757575",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
