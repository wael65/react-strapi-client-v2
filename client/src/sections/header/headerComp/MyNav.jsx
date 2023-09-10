import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const MyNav = ({ menuTitle }) => {
  return (
    <>
      <Box
        // className="border"
        sx={{
          ":hover .show-when-hover": { display: "block" },
          ":hover ": { cursor: "pointer" },

          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography>{menuTitle}</Typography>
        <ExpandMoreIcon />
        <Box
          className="show-when-hover "
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            pt: "1em",
            minWidth: "12em",
            transform: "translatex(-50%)",
            display: "none",
          }}
        >
          <Paper
            sx={{
              top: "0.5em",
            }}
          >
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem sx={{ py: 0, my: 0 }}>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  sx={{
                    py: 0,
                    my: 0,
                    ":hover .show-sub-menu": { display: "block" },
                  }}
                >
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Products" />
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemButton>
                  <Box
                    className="show-sub-menu"
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "90%",
                      // pt: "1em",
                      minWidth: "12em",
                      // transform: "translatex(-50%)",
                      display: "none",
                    }}
                  >
                    <Paper
                      sx={{
                        top: "0.5em",
                      }}
                    >
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem sx={{ py: 0, my: 0 }}>
                            <ListItemButton component="a" href="#simple-list">
                              <ListItemText primary="Add Products" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem sx={{ py: 0, my: 0 }}>
                            <ListItemButton component="a" href="#simple-list">
                              <ListItemText primary="Edit Products" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }}>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Orders" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }}>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default MyNav;
