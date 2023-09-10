import Hero from "../sections/hero/Hero";
import Header from "../sections/header/Header";
import { ColorModeContext, useMode } from "../theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import MainContent from "../sections/content/MainContent";
// import { userData } from "../context/helper";

function Home() {
  const [theme, colorMode] = useMode();
  // const { username, jwt } = userData();

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
            py: "1em",
          }}
        >
          <Hero />
          <MainContent />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;
