// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiperSlider.css";

import { bannerData } from "../../../../public/myData/myData";

// import required modules
import { Navigation } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        // @ts-ignore
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
        // @ts-ignore
        sx={{ position: "relative", ":hover": { cursor: "grab" } }}
      >
        {bannerData.map((i) => (
          <SwiperSlide key={i.title}>
            <img src={i.img} alt="" />
            <Box
              sx={{
                position: "absolute",
                right: "60%",
                top: "20%",
                pt: "1em",
                px: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#424242",
                  textShadow: "2px 2px 4px #fff",
                  fontSize: "1.7em",
                  fontWeight: "bolder",
                }}
              >
                {i.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#616161",
                  // textShadow: "2px 2px 4px #fff",
                  fontSize: "1em",
                  fontWeight: 600,
                }}
              >
                {i.subTitle}
              </Typography>
              <Button variant="contained" href={i.link} sx={{ mt: "3em" }}>
                Shop Now
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
