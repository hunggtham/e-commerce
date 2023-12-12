import React from "react";
import MainCrosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
  return (
    <div>
      HomePage
      <MainCrosel />
      <div className="space-y-10 py-20 flex flex-col justify-center lg:px-5]">
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
