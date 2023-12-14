import React from "react";
import { mens_kurta } from "../../../dummy-products-data/Men/men_kurta";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTheme } from "@emotion/react";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={mens_kurta[0].imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold ">Lorem, ipsum dolor.</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: Lorem, ipsum dolor.</p>
          <div className="flex space-x-5 items-center text-gray-900 lg:pt-6">
            <p className="font-semibold">$99</p>
            <p className="opacity-50 line-through">$149</p>
            <p className="text-green-600 font-semibold">30% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton color="">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-4 border rounded-sm">3</span>

          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
          <Button color="error">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
