import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Container, Box } from "@mui/material";
import Rating from "@mui/material/Rating";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  // get productId from current url page
  let { id } = useParams();

  // Fetch data from Api
  const url = "/products/" + id + "?populate=*";
  const { data, loading, error } = useFetch(url);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid minHeight={360} container spacing={1}>
          {data ? (
            <>
              <Grid xs={2} md={1}>
                <Item
                  sx={{ boxShadow: "none", backgroundColor: "transparent" }}
                >
                  wael
                </Item>
              </Grid>
              <Grid xs={6} md={4}>
                <Item>
                  <img
                    src={data.data.attributes.image.data[0].attributes.url}
                  />
                </Item>
              </Grid>
              <Grid xs={6} md={4}>
                <Item
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    pl: "2em",
                    pt: "2em",
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.data.attributes.title}{" "}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {data.data.attributes.discription}{" "}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    $ {data.data.attributes.price}
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={data.data.attributes.rating}
                    precision={0.5}
                    readOnly
                  />

                  {/* <div>{data.data.attributes.rating}</div> */}
                </Item>
              </Grid>
              <Grid xs={4} md={3}>
                <Item
                  sx={{ boxShadow: "none", backgroundColor: "transparent" }}
                >
                  xs=6 md=4
                </Item>
              </Grid>
            </>
          ) : (
            "loading........."
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
