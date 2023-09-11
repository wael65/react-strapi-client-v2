import { Container, Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, useMode } from "../theme";
import Header from "../sections/header/Header";
import ProductDetails from "./ProductDetails";

const Product = () => {
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
        <Header />
        <Box
          sx={{
            backgroundColor:
              // @ts-ignore
              theme.palette.mainBg.main,
            py: "2em",
          }}
        >
          <ProductDetails />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Product;
