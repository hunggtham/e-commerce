import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useSearchParams();

  const dispatch = useDispatch();

  const orders = useSelector((store) => store);
  console.log("orders", orders);
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
    setReferenceId(urlParam.get("razorpay_payment_link_reference_id"));
  });

  useEffect(() => {
    const data = { orderId, paymentId };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId, dispatch]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order get Placed
        </Alert>
      </div>
      <OrderTracker activeStep={2} />
      <Grid container className="sapce-y-5 py-5 pt-20">
        <Grid
          container
          item
          className="shadow-xl rounded-md p-5"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          {/* orders?.orderItems? */}
          {[1, 2, 3, 4].map((item) => (
            <>
              <Grid item xs={6}>
                <div className="flex items-center">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                    alt=""
                  />
                  <div className="ml-5 space-y-2">
                    <p>item.product.title</p>
                    <div className="opacity-50 text-xs font-semibold sapce-x-5">
                      <span>Color: item.color</span>
                      <span>Size: item.size</span>
                    </div>
                    <p>SellerL item.product.brand</p>
                    <p>$item.price</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={orders?.address} />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
