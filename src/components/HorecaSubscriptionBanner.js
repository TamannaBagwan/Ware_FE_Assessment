import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Horeca_Banner from "../asstes/images/horeca_banner.png";

const HorecaSubscriptionBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "100%" : isTablet ? "100%" : "82%",
          height: isMobile ? "250px" : isTablet ? "400px" : "510px",
          backgroundImage: `url(${Horeca_Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          pb: isMobile ? 2 : isTablet ? 3 : 5,
          overflow: "hidden",
        }}
      >
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            fontSize: isMobile ? "1rem" : isTablet ? "1.8rem" : "2.5rem",
            fontWeight: 600,
            lineHeight: 1.3,
            px: 2,
          }}
        >
          Premium Crockery & <br /> Tableware for Restaurants and Cafes
        </Typography>
      </Box>
    </Box>
  );
};

export default HorecaSubscriptionBanner;
