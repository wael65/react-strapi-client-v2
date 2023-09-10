import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
import { cat } from "../../../../public/myData/myData";
// const options = cat;
let options = cat.slice(0);
options.unshift("All");

export default function SimpleSerchMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        // sx={{ bgcolor: "background.paper" }}
        sx={{
          p: "0px 15px !important",
          m: "0px 0px 0px 10px !important",
          color: "#000 !important",
          // @ts-ignore
          bgcolor: theme.palette.menuBg.main,
          borderBottomRightRadius: "25px ",
          borderTopRightRadius: "25px ",
        }}
      >
        <ListItem
          sx={
            {
              // p: "0px !important",
              // p: "0px 0px 0px 10px !important",
              // borderRadius: "30px !important",
            }
          }
          // button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          // aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            // className="border"
            // primary="When device is locked"
            secondary={options[selectedIndex]}
            sx={{ color: "#000 !important", pr: "5px" }}
          />
          <ExpandMoreIcon
            // @ts-ignore
            sx={{ fontSize: "1.2em", color: theme.palette.expandIcon.main }}
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
        {options.map((option, index) => (
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
