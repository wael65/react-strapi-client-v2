import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Container,
  Box,
  Button,
  NativeSelect,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Rating from "@mui/material/Rating";
import { Stack } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { useNavigate } from "react-router-dom";

import AppContext from "../context/app-context";
import { addProduct } from "../context/session";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundImage: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  const { addToCart, addAmountToCart } = useContext(AppContext);

  // add quantity of product
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  // get productId from current url page
  let { id } = useParams();

  // Fetch data from Api
  const url = "/products/" + id + "?populate=*";
  const { data, loading, error } = useFetch(url);

  // add product data  and quentity of product to AppState
  const addProduct = () => {
    addToCart(data);
    addAmountToCart(quantity);
    console.log(data);
    console.log(quantity);
    navigate("/cart");
  };

  // get the count wich input for product
  const optionsCount = [];
  {
    for (let i = 1; i < 6; i++) {
      optionsCount.push(i);
    }
  }

  // to extend (parent) Box background to 0.6 of current screen
  let height = screen.height;
  console.log(height);

  console.log(data);

  const navigate = useNavigate();

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
              alignItems: "start",
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
            // sx={{
            //   width: "100%",
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "start",
            //   alignContent: "center",
            // }}
            // className="border"
            >
              <FormControl sx={{ mt: 2, mb: 0.25, minWidth: 80 }} size="small">
                <Typography sx={{ fontSize: "0.75em" }}>Quantity</Typography>
                <Select
                  labelId="simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  // label="Quantity"
                  // displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={handleChange}
                >
                  {optionsCount.map((count) => (
                    <MenuItem value={count}>{count}</MenuItem>
                  ))}

                  {/* <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem> */}
                </Select>
              </FormControl>
              {/* <Typography sx={{ ml: "0.5em" }}>Quantity</Typography> */}
            </Box>

            <Box
              // className="border"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                mb: "2em",
                mt: "0.5em",
              }}
            >
              <Button
                variant="contained"
                sx={{ mb: "2em" }}
                onClick={addProduct}
              >
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
