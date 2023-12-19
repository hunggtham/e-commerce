import { Grid } from "@mui/material";
import React from "react";
import { mens_kurta } from "../../../dummy-products-data/Men/men_kurta";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-gray-200 hover:shadow-2xl border rounded">
      <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-top object-cover"
              src={mens_kurta[0].imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$200</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on December 15</span>
              </p>
              <span className="text-xs">Your Item Has Been Delivered</span>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on Decemnber 18</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
