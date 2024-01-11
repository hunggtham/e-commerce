import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Box, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const orders = useSelector((store) => store?.orders?.order);
  const address = useSelector((store) => store?.orders?.order?.shippingAddress);
  console.log("orders", orders);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleBuy = () => {
    // dispatch(createPayment({ orderId, navigate }));
    navigate(`/payment/${orderId}`);
  };
  return (
    <div>
      <div className="p-5 shadow-lg round-s-md border lg:mx-16 ">
        <AddressCard address={address} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {orders?.orderItems?.map((item, index) => (
              <CartItem key={index} cartItem={item} />
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
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Detail:
              </p>
              <Divider />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price({orders?.totalItem} item)</span>
                  <span>${orders?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">${orders?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery Cost</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ${orders?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                color="primary"
                variant="contained"
                sx={{ px: "3rem", py: ".5rem", mt: "1rem", width: "100%" }}
                onClick={handleBuy}
              >
                Buy
              </Button>
            </div>
            {/* </div> */}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
