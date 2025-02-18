import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import High_Quality from "../asstes/images/high_quality_tableware.png";
import No_Minimum from "../asstes/images/No_minimum_quantity.png";
import Bulk_Discount from "../asstes/images/Bulk_discount.png";
import Crockery from "../asstes/images/Crockery.png";
import Original_Designs from "../asstes/images/Original_designs.png";

const Features = () => {
  const featuresList = [
    {
      img: High_Quality,
      title: "High quality tableware",
      description:
        "Our high-fired stoneware ceramicware is known for its durability, it will last you for many years without losing its finish. All our ceramicware are Microwave, oven, and dishwasher friendly.",
    },
    {
      img: No_Minimum,
      title: "No minimum quantity order",
      description: (
        <>
          You can order as few as 3 pieces
          <br /> <br />
          So you don’t have to maintain extra stock in your restaurant.
        </>
      ),
    },

    {
      img: Bulk_Discount,
      title: "Bulk discount on every purchase",
      description:
        "Get a fixed bulk discount on every small or big purchase throughout the year.",
    },

    {
      img: Crockery,
      title: "Crockery delivered in 5 days",
      description: (
        <>
          As a retail brand, we maintain the stock for our existing designs.
          <br /> <br />
          For MOQ below 50, you can expect the delivery in 5 days.
        </>
      ),
    },
    {
      img: Original_Designs,
      title: "Original designs Handmade in India",
      description:
        "Every piece of ware is designed from scratch by our team of product designers and meticulously crafted in India.",
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          color: "#565656",
          textAlign: "center",
          fontSize: { xs: "18px", sm: "25px", md: "22px" },
          fontWeight: 700,
          margin: { xs: "40px 60px", sm: "30px 55px", md: "40px" },
          padding: { xs: "50px", sm: "50px", md: "50px" },
        }}
      >
        Why choose Ware for your restaurant?
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "#565656",
        }}
      >
        <Grid container spacing={4} sx={{ maxWidth: "1200px" }}>
          {featuresList.map((feature, index) => (
            <Grid container item xs={12} key={index} alignItems="center">
              {index % 2 === 0 ? (
                <>
                  {/* Text on Left, Image on Right */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          mb: 3,
                          fontSize: { xs: "19px", sm: "20px", md: "22px" },
                          fontWeight: 500,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          marginRight: { xs: "5px", sm: "35px", md: "40px" },
                          paddingRight: { xs: "5px", sm: "35px", md: "40px" },
                          marginBottom: { xs: "20px", sm: "15px", md: "15px" },
                          marginLeft: { xs: "20px", sm: "50px", md: "60px" },
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box>
                      <img
                        src={feature.img}
                        alt={feature.title}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  {/* Image on Left, Text on Right */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Box>
                      <img
                        src={feature.img}
                        alt={feature.title}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "19px", sm: "20px", md: "22px" },
                          fontWeight: 500,
                          mb: 3,
                          marginLeft: { xs: "10px", sm: "10px", md: "60px" },
                          paddingLeft: { xs: "10px", sm: "20px", md: "60px" },
                          marginTop: { xs: "20px", sm: "10px", md: "10px" },
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          marginLeft: { xs: "10px", sm: "55px", md: "60px" },
                          paddingLeft: { xs: "10px", sm: "55px", md: "60px" },
                          marginRight: { xs: "20px", sm: "55px", md: "60px" },
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
