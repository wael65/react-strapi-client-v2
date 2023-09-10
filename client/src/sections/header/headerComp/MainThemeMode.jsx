import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const MainThemeMode = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <LightModeIcon sx={{ fontSize: "0.6em" }} />
      ) : (
        <Brightness3Icon sx={{ fontSize: "0.6em" }} />
      )}
    </IconButton>
  );
};

export default MainThemeMode;
