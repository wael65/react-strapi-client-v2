import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";

const langOptions = ["", "Ar", "En"];

export default function simpleListMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div className="langMenu">
      <List
        // className="border"
        component="nav"
        aria-label="Device settings"
        // sx={{ bgcolor: "background.paper" }}
        sx={{
          p: "0px !important",
          m: "0px 0px 0px 10px !important",
          // @ts-ignore
          // color: theme.palette.langText.main,
          // backgroundColor: "#fff",
        }}
      >
        <ListItem
          sx={{
            // p: "0px !important",
            p: "0px 0px 0px 10px !important",
            borderRadius: "30px !important",
            // color: "#fff !important",
          }}
          // button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            // primary="When device is locked"
            secondary={langOptions[selectedIndex]}
            // @ts-ignore
            color={theme.palette.langText.main}
          />
          <ExpandMoreIcon
            sx={{
              fontSize: "1.5em",
              // @ts-ignore
              color: theme.palette.langText.main,
              pr: "8px",
            }}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {langOptions.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
