import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="mx-5 lg:mx-10 lg:mr-[280px]">
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        {/* filter left */}
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h2 className="font-bold text-lg">Filter</h2>
            <div className="space-y-4  mt-10">
              <h2 className="font-semibold">ORDER STATUS</h2>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    default={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        {/* right */}
        <Grid item xs={9.5}>
          <div className="space-y-1">
            {[1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
