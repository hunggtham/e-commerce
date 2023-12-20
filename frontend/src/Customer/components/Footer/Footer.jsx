import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white text-center mt-10"
      container
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      {/* 1 */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Company
        </Typography>
        <div>
          <Typography className="pb-5 underline" variant="h6" gutterBottom>
            <a href="#!">About</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Blog</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Press</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Jobs</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Partners</a>
          </Typography>
        </div>
      </Grid>
      {/* 2 */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Solutions
        </Typography>
        <div>
          <Typography className="pb-5 underline" variant="h6" gutterBottom>
            <a href="#!">Marketing</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Analytics</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Commerce</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Insight</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Support</a>
          </Typography>
        </div>
      </Grid>

      {/* 3 */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Documentation
        </Typography>
        <div>
          <Typography className="pb-5 underline" variant="h6" gutterBottom>
            <a href="#!">Guides</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Api Status</a>
          </Typography>
        </div>
      </Grid>
      {/* 4 */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Legal
        </Typography>
        <div>
          <Typography className="pb-5 underline" variant="h6" gutterBottom>
            <a href="#!">Claim</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Privacy</a>
          </Typography>
        </div>
        <div>
          <Typography className="pb-5 underline" variant="h6">
            <a href="#!">Terms</a>
          </Typography>
        </div>
      </Grid>
      {/* end */}
      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik{" "}
          </Link>
          from{" "}
          <Link
            href="https://www.flaticon.com/"
            color="inherit"
            underline="always"
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
