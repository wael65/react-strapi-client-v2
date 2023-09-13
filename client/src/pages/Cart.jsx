import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { ColorModeContext, useMode } from "../theme";
import MainHeader from "../sections/header/MainHeader";
import CheckOut from "./CheckOut";

const Cart = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <MainHeader />
        <Box
          sx={{
            backgroundColor:
              // @ts-ignore
              theme.palette.mainBg.main,
            py: "2em",
          }}
        >
          <CheckOut />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Cart;
