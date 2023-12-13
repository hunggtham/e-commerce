import React from "react";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[13rem] m-3 transition-all cursor-pointer">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="product"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">${product.price}</p>
          <p className="text-green-600 font-semibold ">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
