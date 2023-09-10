import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import ProductCard from "./mainComp/ProductCard";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{ my: "1em", width: "95%", display: "flex", flexDirection: "column" }}
    >
      <Stack
        // className="border"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          // pr: "2em",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            // @ts-ignore
            sx={{ fontWeight: "bold", color: theme.palette.myText.main }}
          >
            Selected Items
          </Typography>
          <Typography
            // @ts-ignore
            sx={{ fontWeight: 500, color: theme.palette.myText.main }}
          >
            Recommended for you
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ my: "2em" }}>
        <ProductCard />
      </Stack>
    </Container>
  );
};

export default MainContent;
