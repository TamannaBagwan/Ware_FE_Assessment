import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Ware_Store from "../asstes/images/ware_store.png";
const WareStore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px 0px",
        padding: { xs: "0 10px", sm: "0 30px", md: "0" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "700px", md: "80%" },
          height: { xs: "200px", sm: "350px", md: "630px" },
          position: "relative",
          overflow: "hidden",
          objectFit: "contain",
        }}
      >
        <img
          src={Ware_Store}
          alt="Ware Store"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20px", sm: "45px", md: "30px" },
            left: { xs: "10px", sm: "50px" },
            color: "white",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            width: { xs: "80%", sm: "auto" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "19px", sm: "30px", md: "35px" },
              fontWeight: 600,
            }}
          >
            Want to see our Ware?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                marginTop: { xs: "5px", sm: "15px",md:'10px' },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Come visit our store in Mumbai
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: { xs: "25px", sm: "20px" ,md:'10px'},
                marginLeft: { sm: "20px" },
                width: { xs: "170px", sm: "190px", md: "180px" },
                border: "1px solid white",
                height: { xs: "35px", sm: "45px", md: "45px" },
                fontSize: { xs: "14px", sm: "16px" },
                textTransform: "none",
                background: "transparent",
                borderRadius: "0",
                transition: "width 0.3s ease, background-color 0.3s",
                "&:hover": {
                  width: { xs: "100%", sm: "200px", md: "220px" },
                  background: "white",
                  color: "black",
                },
                "&:hover .arrow": {
                  opacity: 1,
                },
              }}
            >
              Get Directions
              <Box
                className="arrow"
                sx={{
                  display: "inline-block",
                  transition: "transform 0.3s, opacity 0.3s",
                  marginLeft: "10px",
                  opacity: 0,
                  transform: "translateX(0px)",
                  fontSize: "20px",
                }}
              >
                ➜
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WareStore;
