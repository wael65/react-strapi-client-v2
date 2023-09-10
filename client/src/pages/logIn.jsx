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
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialUser = { identifier: "", password: "" };

const defaultTheme = createTheme();

export default function SignIn() {
  //   const [user, setUser] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  //   console.log({ user });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://react-strapi-store.onrender.com/api/auth/local", {
        identifier: user.identifier,
        password: user.password,
      })
      .then((response) => {
        // Handle success.

        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .then(() => {
        setUser(initialUser);
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
            Sign in
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
              value={user.identifier}
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
              value={user.password}
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="*" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Button fullWidth variant="outlined" sx={{ mt: 2, mb: 2 }}>
              <Link href="/signup" variant="body2">
                Sign Up
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}