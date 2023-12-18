import { Grid } from "@mui/material";
import React from "react";
import { mens_kurta } from "../../../dummy-products-data/Men/men_kurta";

const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
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
      </Grid>
    </div>
  );
};

export default OrderCard;
