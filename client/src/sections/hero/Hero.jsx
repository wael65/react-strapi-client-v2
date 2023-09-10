import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import SwiperSlider from "./heroComponents/SwiperSlider";
import StandardImageList from "./heroComponents/StandardImageList";

const Hero = () => {
  return (
    <Container sx={{ my: "2em", width: "95%", mx: "auto" }}>
      <Box sx={{ position: "relative", width: "100%", height: 300 }}>
        {useMediaQuery("(min-width:900px)") ? (
          <Box sx={{ position: "absolute", width: "69%", height: "100%" }}>
            <SwiperSlider />
          </Box>
        ) : (
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <SwiperSlider />
          </Box>
        )}

        {useMediaQuery("(min-width:900px)") && <StandardImageList />}
      </Box>
    </Container>
  );
};

export default Hero;
