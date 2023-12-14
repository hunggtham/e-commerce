import React from "react";
import CartItem from "./CartItem";
import { Box, Button, Divider } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem />
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
                <span>Price(3 item)</span>
                <span>199$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-50$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Cost</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$145</span>
              </div>
            </div>
            <Button
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

export default Cart;
