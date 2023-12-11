import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCaroselData";

const responsive = {
  0: {
    items: 1,
    itemsFit: "contain",
  },
  568: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const MainCrosel = () => {
  // const navigate = useNavigate()
  const items = MainCarouselData.map((item) => (
    <img
      key={item.id} // Added a key prop for each image
      className="cursor-pointer w-[1024px] h-[500px] flex px-[3px] rounded-3xl"
      // onClick={() => navigate}
      src={item.image}
      alt={item.alt} // Added an alt attribute for accessibility
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCrosel;
