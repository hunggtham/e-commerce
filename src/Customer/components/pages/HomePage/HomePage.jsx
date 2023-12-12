import React from "react";
import MainCrosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../../dummy-products-data/Men/men_kurta";
import { kurtaPage1 } from "../../../../dummy-products-data/Kurta/kurta";
import { dressPage1 } from "../../../../dummy-products-data/dress/page1";
import { gounsPage1 } from "../../../../dummy-products-data/Gouns/gouns";
import { lengha_page1 } from "../../../../dummy-products-data/Women/LenghaCholi";
import Footer from "../../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />
      <div className="space-y-10 py-20 flex flex-col justify-center lg:px-5]">
        <HomeSectionCarosel data={mens_kurta} sectionName={"1.Men's Clothes"} />
        <HomeSectionCarosel data={kurtaPage1} sectionName={"2.Men's Shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"3.Men's Shirt"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"4.Girl's Dress"} />
        <HomeSectionCarosel data={lengha_page1} sectionName={"5.Men's Shirt"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
