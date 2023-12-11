import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const HomeSectionCarosel = () => {
  const responsive = {
    0: {
      items: 1.5,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
    },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 ">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          disableButtonsControls
        />
        <Button
          // variant="outlined"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-1rem",
            // right: "0rem",
            // transform: "translate(50%) rotate(90deg)",
            // color: "white",
          }}
          aria-label="previous"
        >
          <ArrowBackIosIcon
            sx={{ "&:hover": { padding: "0px", margin: "0px" } }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
