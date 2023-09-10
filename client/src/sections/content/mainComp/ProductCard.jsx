import { Box, Link, Rating, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { Products } from "../../public/myData/myData";
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch("/products?populate=*");

  console.log(data);

  useEffect(() => {
    data && setProducts(data.data);
  }, [data]);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        {loading
          ? "Products are loading........."
          : products.map((product, idx) => (
              <Card
                key={idx}
                sx={{
                  maxWidth: 345,
                  position: "relative",
                  pt: "0.5em",
                  px: "0.5em",
                }}
              >
                <Link
                  href={`/product/${product.id}`}
                  sx={{ cursor: "pointer" }}
                >
                  <CardMedia
                    sx={{ height: 300, my: 0, py: 0, justifyContent: "center" }}
                    image={product.attributes.image.data[0].attributes.url}
                    title="green iguana"
                  />
                  <Box sx={{ mb: "2em" }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                        }}
                      >
                        {/* <img src={product.attributes.image.data.url} /> */}
                        <Typography gutterBottom variant="h5" component="div">
                          {product.attributes.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {`$ ${product.attributes.price}`}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {product.attributes.discription}
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardActions
                    sx={{
                      position: "absolute",
                      bottom: "0.7em",
                      justifyContent: "space-between",
                      width: "95%",
                    }}
                  >
                    {/* <Button size="small">Share</Button> */}
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </Stack>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Link>
              </Card>
            ))}
      </Stack>
    </>
  );
}
