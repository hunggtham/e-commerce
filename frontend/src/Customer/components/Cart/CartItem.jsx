import React from "react";
import { mens_kurta } from "../../../dummy-products-data/Men/men_kurta";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../../State/Cart/Action";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  console.log("cartItem", cartItem);
  const handUpdateCartIem = (num) => {
    const data = {
      data: { quantity: cartItem?.quantity + num },
      cartItemId: cartItem.id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(cartItem?.id));
    dispatch(getCart());
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={cartItem?.product?.imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold ">{cartItem?.product?.title}</p>
          <p className="opacity-70">
            {cartItem?.size}, {cartItem?.product?.color}
          </p>
          <p className="opacity-70 mt-2">Seller: {cartItem?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-gray-900 lg:pt-6">
            <p className="font-semibold">
              ${cartItem?.product?.discountedPrice}
            </p>
            <p className="opacity-50 line-through">
              ${cartItem?.product.price}
            </p>
            <p className="text-green-600 font-semibold">
              {cartItem?.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handUpdateCartIem(-1)}
            disabled={cartItem?.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-4 border rounded-sm">
            {cartItem?.quantity}
          </span>

          <IconButton color="primary" onClick={() => handUpdateCartIem(1)}>
            <AddCircleOutlineIcon />
          </IconButton>
          <Button onClick={handleRemoveCartItem} color="error">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
