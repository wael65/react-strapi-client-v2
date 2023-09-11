import {
  Avatar,
  Badge,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import WebsiteLogo from "./headerComp/WebsiteLogo";
import SearchAppBar from "./headerComp/SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainThemeMode from "./headerComp/MainThemeMode";
import LngListMenu from "./headerComp/LngListMenu";
import { Link } from "react-router-dom";
import AppContext from "../../context/app-context";
import { useContext, useState, useEffect } from "react";

const MainHeader = () => {
  const { users } = useContext(AppContext);

  console.log(users);

  // const { username, jwt } = userData();
  const theme = useTheme();
  return (
    <Container sx={{ my: "1.5em", width: "95%" }}>
      <Stack flexGrow={0.2} sx={{ alignContent: "center" }}>
        <Link to={"/"}>
          <WebsiteLogo />
        </Link>
      </Stack>
      <Stack
        flexGrow={0.5}
        sx={{ alignContent: "center", ".css-7nwsf": { ml: 0 } }}
      >
        <SearchAppBar />
      </Stack>
      <Stack
        // flexGrow={0.2}
        // className="border"
        sx={{
          gap: "1em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Box>
          <MainThemeMode />
        </Box>
        <Box>
          <LngListMenu />
        </Box>
        {users.username !== "" ? (
          <>
            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.3em",
                alignContent: "center",
              }}
            >
              <Link to="/logout" className="link">
                {/* <Typography>{`Welcome ${username}`}</Typography> */}
                <Typography>Logout</Typography>
                {/* </Box> */}
              </Link>

              {/* <Box> */}
              <Avatar
                sx={{
                  width: "3.5em",
                  height: "3.5em",
                  fontSize: "0.5em",
                  // @ts-ignore
                  bgcolor: theme.palette.badgeBg.main,
                }}
              >
                {users[0].username}
              </Avatar>
            </Box>
          </>
        ) : (
          <Link to="/login" className="link">
            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.3em",
              }}
            >
              {/* <Typography>Welcome Gest</Typography> */}
              <Typography>SignIn</Typography>
              <PersonIcon />
            </Box>
          </Link>
        )}

        <Link to="/cart" className="link">
          <Box
            // className="border"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3em",
            }}
          >
            <Typography>Cart</Typography>
            <ShoppingCartIcon />
            <Badge badgeContent={4} color="primary"></Badge>
          </Box>
        </Link>
      </Stack>
    </Container>
  );
};

export default MainHeader;
