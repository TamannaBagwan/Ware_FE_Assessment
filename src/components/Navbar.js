import React from "react";
import { AppBar, Toolbar, IconButton, Box, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useTheme } from "@mui/material/styles";
import Ware_logo from "../asstes/images/ware-footer-logo.png";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: "#565656",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1100,
     
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          width: { xs: "100%", sm: "100%", md: "82%" },
          height: { xs: "80px", sm: "120px", md: "110px" },
          padding: "15px 10px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              color: "#565656",
              paddingLeft: { xs: "10px", sm: "30px", md: "5px" },
            }}
          >
            <MenuIcon
              sx={{ fontSize: { xs: "25px", sm: "40px", md: "40px" }, mt:{xs:1,sm:2,md:2} }}
            />
          </IconButton>

          <Box
            component="img"
            src={Ware_logo}
            alt="ware logo"
            sx={{
              height: { xs: "25px", sm: "40px", md: "60px" },
              width: { xs: "70px", sm: "120px", md: "150px" },
              mt:{xs:1,sm:2,md:2}
            }}
          />

          <Box sx={{ mt:{xs:1,sm:2,md:2}}}>
            <IconButton sx={{ color: "gray" }}>
              <AccountCircleIcon
                sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
              />
            </IconButton>
            <IconButton sx={{ color: "gray" }}>
              <SearchIcon
                sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
              />
            </IconButton>
            <IconButton sx={{ color: "gray" }}>
              <ShoppingBagIcon
                sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
