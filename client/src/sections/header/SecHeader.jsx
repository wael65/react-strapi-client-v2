import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
  Fab,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CatMenu from "./headerComp/CatMenu";
import MenuDrawer from "./headerComp/MenuDrawer";

import { cat } from "../../../public/myData/myData";
import { subCat } from "../../../public/myData/myData";
// import StandaloneToggleButton from "../../../components/StandaloneToggleButton";

const SecHeader = () => {
  const theme = useTheme();

  return (
    <>
      {useMediaQuery("(max-width:900px)") ? (
        <Container
          // className="border"
          sx={{
            my: "auto",
            width: "95%",
            // display: "flex",
            // justifyContent: "space-between",
            // gap: 5,
          }}
        >
          <Box flexGrow={0.3}>
            <CatMenu />
          </Box>
          <MenuDrawer />
        </Container>
      ) : (
        <Container
          sx={{ my: "2em", width: "95%", justifyContent: "left", gap: 7 }}
        >
          <Box flexGrow={0.2}>
            <CatMenu />
          </Box>
          <Stack
            // className="border"
            flexGrow={0.8}
            sx={{
              flexDirection: "row",
              justifyContent: "left",
              zIndex: "2",
              gap: 5,
            }}
          >
            {cat.map((c) => (
              <Box
                // className="border"
                key={c}
                sx={{
                  ":hover .show-when-hover": { display: "block" },
                  ":hover ": { cursor: "pointer" },

                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography>{c}</Typography>
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
                        {subCat.map((sc) =>
                          c === "All" ? (
                            <ListItem key={sc.title} sx={{ py: 0, my: 0 }}>
                              <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={sc.title} />
                              </ListItemButton>
                            </ListItem>
                          ) : null
                        )}
                      </List>
                      <List>
                        {subCat.map((sc) =>
                          c === sc.category ? (
                            <ListItem key={sc.title} sx={{ py: 0, my: 0 }}>
                              <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={sc.title} />
                              </ListItemButton>
                            </ListItem>
                          ) : null
                        )}
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      )}
    </>
  );
};

export default SecHeader;
