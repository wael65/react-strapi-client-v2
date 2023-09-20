import { useContext, useState } from "react";
import { Select, FormControl, MenuItem, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AppContext from "../context/app-context";

const CheckOut = () => {
  const { cart, quantity } = useContext(AppContext);
  console.log(cart);
  console.log(quantity);

  const editCount = [];
  {
    for (let i = 1; i < 6; i++) {
      editCount.push(i);
    }
  }

  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const handleChange = (event) => {
    setCurrentQuantity(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
      }}
    >
      <Typography component="div" variant="h5" sx={{ mb: "0.5em", ml: "1em" }}>
        Cart
      </Typography>
      <Card
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        {cart.map((product) => (
          <>
            <CardContent key={product.data.id} sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {product.data.attributes.title}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {product.data.attributes.discription}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ fontWeight: 600, pb: "0.5em" }}
              >
                $ {product.data.attributes.price}
              </Typography>
              <Box>
                <FormControl
                  sx={{ mt: 2, mb: 0.25, minWidth: 80 }}
                  size="small"
                >
                  <Typography sx={{ fontSize: "0.75em" }}>Quantity</Typography>
                  <Select
                    labelId="simple-select-label"
                    id="demo-simple-select"
                    value={currentQuantity}
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={handleChange}
                  >
                    {editCount.map((count) => (
                      <MenuItem value={count}>{count}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </CardContent>

            <CardMedia
              component="img"
              sx={{ width: "20%", mr: " 2em" }}
              image={
                product.data.attributes.image.data[0].attributes.formats
                  .thumbnail.url
              }
              alt="Live from space album cover"
            />
          </>
        ))}
      </Card>
      <Box sx={{ mt: "1em", ml: "0,5em" }}>
        <Button variant="contained" href="/cart">
          checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CheckOut;
