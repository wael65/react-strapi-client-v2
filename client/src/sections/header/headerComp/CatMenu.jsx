import { Box, Container, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import ImageListItem from "@mui/material/ImageListItem";

import { categor } from "../../../../public/myData/myData";
const categ = categor;

export default function CatMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <div>
      <Box>
        <Button
          sx={{
            p: " 0.5em 0.8em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            border: "#eeeeee solid 0.1em",
            borderTopRightRadius: "0.5em",
            borderBottomRightRadius: "0.5em",

            // @ts-ignore
            bgcolor: theme.palette.menuBg.main,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowIcon
            sx={{
              pr: "0.3em",
              color: theme.palette.text.primary,
            }}
          />
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "capitalize",
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1}></Box>
          <KeyboardArrowRightOutlinedIcon
            sx={{
              color: theme.palette.text.primary,
            }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "15.2em",
              // @ts-ignore
              bgcolor: theme.palette.menuBg.main,
            },
          }}
        >
          {categ.map((c) => (
            <MenuItem key={c} sx={{ gap: 2 }} onClick={handleClose}>
              <ImageListItem sx={{ width: "15%", height: "5%" }}>
                <img src={c.ic} height="1%" width="3%" />
              </ImageListItem>
              <ListItemText>{c.ca}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
