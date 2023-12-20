import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";
const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h2 className="font-bold text-xl py-5">Delivery Address</h2>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={2} />
      </div>

      <Grid container className="space-y-1 ">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="hover:shadow-lg hover:cursor-pointer  rounded-md p-3 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[6.5rem] h-[6.5rem] object-cover object-top"
                  src="https://plus.unsplash.com/premium_photo-1661715962352-4c887b0d0e44?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXBhZ2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold">Product-Title</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color: pink.</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Seller1.</p>
                  <p>$200</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: "primary" }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetail;
