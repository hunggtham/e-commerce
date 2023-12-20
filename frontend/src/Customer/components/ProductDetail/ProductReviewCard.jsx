import { Avatar, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Avatar
            className="text-white"
            sx={{ width: 56, height: 56, bgcolor: "blue" }}
          >
            R
          </Avatar>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div>
              <p className="font-semibold text-lg px-5">Hieu</p>
              <p className="opacity-70 px-5">December 14,2023</p>
            </div>
          </div>
        </Grid>
        <Rating
          name="read-only half-rating"
          value={3.5}
          precision={0.1}
          readOnly
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        </p>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
