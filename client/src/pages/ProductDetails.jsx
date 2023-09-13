import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Container, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

import AppContext from "../context/app-context";
import { addProduct } from "../context/session";

const options = ["1", "2", "3", "4", "5"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundImage: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  const { addToCart } = useContext(AppContext);

  // get productId from current url page
  let { id } = useParams();

  // Fetch data from Api
  const url = "/products/" + id + "?populate=*";
  const { data, loading, error } = useFetch(url);

  let height = screen.height;
  console.log(height);

  console.log(data);

  // addToCart(data);
  {
    data && addProduct(data);
  }

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        flexGrow: 1,
        position: "relative",
        minHeight: height * 0.6,
        display: "flex",
        flexDirection: "row",
      }}
      // className="border"
    >
      {data ? (
        <>
          <Stack
            // className="border"
            sx={{
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                borderColor: "#1976d2",
                borderStyle: "solid",
                borderWidth: "0.1em",
              }}
            >
              <img
                width="100em"
                src={
                  data.data.attributes.image.data[0].attributes.formats
                    .thumbnail.url
                }
              />
            </Box>
          </Stack>
          <Stack sx={{ flexShrink: 0, px: 0, pt: "2em" }}>
            <img src={data.data.attributes.image.data[0].attributes.url} />
          </Stack>
          <Stack
            // className="border"
            sx={{ flexShrink: 1, px: "1em", pt: "2em", pr: "2em" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1em", color: "#7e859b" }}
            >
              {data.data.attributes.title}{" "}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "400",
                fontSize: "1.25em",
                color: "#404553",
                textAlign: "justify",
                pb: "1em",
              }}
            >
              {data.data.attributes.discription}{" "}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, pb: "0.5em" }}
            >
              $ {data.data.attributes.price}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={data.data.attributes.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
          <Stack
            // className="border"
            sx={{
              flexShrink: 0,
              px: "2em",
              py: "2em",
              display: "flex",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                mb: "1em",
              }}
            >
              <AirportShuttleIcon sx={{ color: "#1976d2" }} />
              <Typography variant="body1" gutterBottom sx={{ mb: 0 }}>
                Free delivery on Lockers & Pickup Points
              </Typography>
              <Button variant="text" sx={{ m: 0, p: 0 }}>
                Learn more
              </Button>
            </Box>

            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                my: "1em",
              }}
            >
              <AssignmentReturnIcon sx={{ color: "#1976d2" }} />
              <Typography variant="body1" gutterBottom sx={{ mb: 0 }}>
                Enjoy hassle free returns with this offer.
              </Typography>
              <Button variant="text" sx={{ m: 0, p: 0 }}>
                Learn more
              </Button>
            </Box>

            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                my: "2em",
              }}
            >
              <Autocomplete
                id="size-small-outlined"
                size="small"
                sx={{ width: 100, height: 30, mb: "1em" }}
                options={options}
                value={value}
                onChange={(e, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(e, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Quantity" />
                )}
              />
              <Button variant="contained" sx={{ mb: "2em" }}>
                add to cart
              </Button>{" "}
              {/* <div>{value !== null ? value : "null"}</div> */}
              <Button variant="contained" href="/cart">
                checkout
              </Button>{" "}
            </Box>
          </Stack>
        </>
      ) : (
        "loading........."
      )}
    </Box>
  );
};

export default ProductDetails;
