import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { categories } from "../../../../public/myData/myData";

export default function MenuDrawer() {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <IconButton className="border" onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
          ".MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorTop.css-6n0ajc-MuiPaper-root-MuiDrawer-paper":
            {
              height: "100%",
            },
        }}
      >
        <Box
          // className="border"
          sx={{
            width: "40%",
            position: "relative",
            pt: "3.5em",
            mx: "auto",
            // mb: "50%",
            mt: "7em",
            // alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                color: "red",
                rotate: "60deg",
                transition: "0.3s",
              },
              position: "absolute",
              top: "0px",
              right: "0.33em",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {categories.map((item) => {
            return (
              <Accordion
                key={item.id}
                elevation={0}
                sx={{
                  bgcolor: "initial",
                  my: 0,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.category}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subMenu.map((i) => {
                    return (
                      <ListItem key={i} sx={{ py: 0, my: 0 }}>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary={i} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </div>
  );
}
