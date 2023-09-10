import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Box, Typography } from "@mui/material";

import { Products } from "../../../../public/myData/myData";

export default function StandardImageList() {
  return (
    <ImageList
      sx={{
        position: "absolute",
        right: 0,
        width: "30%",
        height: "100%",
        m: 0,
      }}
      // gap={10}
      cols={1}
      rowHeight={340}
    >
      {Products.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            position: "relative",
            backgroundColor: "#f1d1ba",
            height: "inherit",
          }}
        >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            // src={item.img}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              py: "0.9em",
              px: "1em",
              color: "#fff",
              textShadow: "1px 1px 1px #000000",
              // color: "#000000",
              // textShadow: "2px 1px 1px #fff",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              sx={{ fontWeight: 500, textAlign: "left" }}
            >
              {item.shortDesc}
            </Typography>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
