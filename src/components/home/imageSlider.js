import { Box, Slide } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: require("../../assets/slider_images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"),
  },
  {
    url: require("../../assets/slider_images/istockphoto-517188688-612x612.jpg"),
  },
  {
    url: require("../../assets/slider_images/istockphoto-1146517111-612x612.jpg"),
  },
  { url: require("../../assets/slider_images/nature-image-for-website.jpg") },
];

export default function ImageSlider() {
  const [imageCounter, changeImageCounter] = useState(0);

  const increaseTimer = useCallback(() => {
    changeImageCounter((imageCounter) => imageCounter + 1);
  }, []);
  useEffect(() => {
    const timerFunction = setInterval(increaseTimer, 5000);
    return () => clearInterval(timerFunction);
  }, [imageCounter, increaseTimer]);
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <SimpleImageSlider
        width={"80%"}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={5}
      />
    </Box>
  );
}
