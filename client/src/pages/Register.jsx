import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { storeUser } from "../context/helper";
import { setUser } from "../context/session";

const defaultTheme = createTheme();

const initialUser = { identifier: "", password: "", email: "" };

export default function SignUp() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState(initialUser);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  console.log({ newUser });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://react-strapi-store.onrender.com/api/auth/local/register", {
        username: newUser.identifier,
        email: newUser.email,
        password: newUser.password,
      })
      .then((response) => {
        // Handle success.
        setUser(response.data);

        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .then(() => {
        // setUser("");
        // setPassword("");
        setNewUser(initialUser);
        navigate("/");
      })

      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
            mx: "auto",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register{" "}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="identifier"
              type="text"
              autoComplete="username"
              autoFocus
              value={newUser.identifier}
              onChange={handleChange}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={newUser.email}
              onChange={handleChange}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={newUser.password}
              onChange={handleChange}
            />
            <FormControlLabel
              sx={{
                ".MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.css-ahj2mt-MuiTypography-root":
                  { fontSize: "0.75em " },
              }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              SignUp
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
