import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.carts.cart);
  const isLoading = useSelector((store) => store.carts.isLoading);
  console.log("carts", carts);

  // if (!isLoading) {
  //   dispatch(getCart());
  // }

  useEffect(() => {
    dispatch(getCart());
  }, []);
  const handleBuy = () => {
    navigate("/payment?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {carts?.cartItems?.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </div>
        {/* right side */}
        <Box
          p={3}
          borderRadius={2}
          boxShadow={3}
          className={`sticky top-0 h-[100vh]`}
        >
          {/* <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0"> */}
          <div className="">
            <p className="uppercase font-bold opacity-60 pb-4">Price Detail:</p>
            <Divider />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                {/* <span>Price 5 item</span> */}
                <span>Price</span>
                <span>{carts?.totalPrice}$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-{carts?.discount}$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Cost</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  {carts?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleBuy}
              color="primary"
              variant="contained"
              sx={{ px: "3rem", py: ".5rem", mt: "1rem", width: "100%" }}
            >
              Buy
            </Button>
          </div>
          {/* </div> */}
        </Box>
      </div>
    </div>
  );
};

export default connect()(Cart);
