import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Accordion,
  AccordionSummary,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
  Menu,
  MenuItem,
  Popper,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import SimpleSerchMenu from "./simpleSearchMenu";
import useFetch from "../../../hooks/useFetch";

import { useNavigate } from "react-router-dom";

import { dataa } from "./data.js";

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
  // main search
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const { data, loading, error } = useFetch("/products?populate=*");

  console.log(data);

  const navigate = useNavigate();

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
          onChange={handleChange}
          onClick={handleClick}
        />
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            {!search
              ? null
              : data.data
                  .filter((product) => {
                    return search.toLowerCase() === ""
                      ? product
                      : product.attributes.title.toLowerCase().includes(search);
                  })
                  .map((product, idx) => (
                    <List
                      key={idx}
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <ListItem>{product.attributes.title}</ListItem>
                    </List>
                  ))}
          </Box>
        </Popper>
        <SimpleSerchMenu />
      </Search>
    </Box>
  );
}
