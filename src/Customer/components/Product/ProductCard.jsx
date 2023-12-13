import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="productCard w-[13rem] m-3 transition-all cursor-pointer">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/s/w/c/xl-vlmk-combzip02-vida-loca-original-imagkc4hhm4fxhjb.jpeg?q=70"
          alt="product"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Lorem, ipsum.</p>
          <p className="">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">$149</p>
          <p className="line-through opacity-50">$199</p>
          <p className="text-green-600 font-semibold ">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
