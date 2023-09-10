import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
// import { AppBar, Toolbar } from "@mui/material";
// import { grey } from "@mui/material/colors";
import SimpleSerchMenu from "./simpleSearchMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "0.1em solid #f3f3f3",
  // "&:hover": {
  //   // backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   // @ts-ignore
  //   backgroundColor: theme.palette.hoverBg.main,
  // },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// export default function SearchAppBar({ options }) {
export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search
        sx={{
          borderRadius: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#bdbdbd" }} />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ flexGrow: 1 }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <SimpleSerchMenu />
      </Search>
    </Box>
  );
}
