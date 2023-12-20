import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { mens_kurta } from "../../../dummy-products-data/Men/men_kurta";

const responsive = {
  0: {
    items: 1.5,
  },
  568: {
    items: 2.5,
  },
  1024: {
    items: 5.5,
  },
};

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex((activeIndex - 1) % items.length);
  const slideNext = () => setActiveIndex((activeIndex + 1) % items.length);

  const onSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  const items = data
    .slice(0, 15)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="relative items-center flex-row justify-center lg:px-8 border z-10">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 underline-offset-4">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        {/* left */}
        {activeIndex !== 0 && (
          <Button
            onClick={() => {
              slidePrev();
            }}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-1rem",
            }}
            aria-label="previous"
          >
            <ArrowBackIosIcon />
          </Button>
        )}
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          paddingRight={65}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
          keyboardNavigation
        />
        {/* right */}
        {activeIndex !== items.length - 6 && (
          <Button
            onClick={() => {
              slideNext();
            }}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0.4rem",
              transform: "translate(50%) rotate(180deg)",
            }}
            // aria-label="next"
          >
            <ArrowBackIosIcon
              sx={{ "&:hover": { padding: "0px", margin: "0px" } }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
