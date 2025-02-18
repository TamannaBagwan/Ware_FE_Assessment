import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import UunatiiProfile from "../asstes/images/Uunatii.png";
import { Link } from "react-scroll";

const ProfileSection = () => {
  return (
    <Container
      sx={{
        maxWidth: "1000px !important",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={0}
        sx={{
          bgcolor: "transparent",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          p: { xs: 1, md: 1 },
          width: "100%",
          minHeight: "600px",
        }}
      >
        <Box
          sx={{
            width: { xs: "170px", md: "420px" },
            height: { xs: "240px", md: "580px" },
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={UunatiiProfile}
            alt="UunatiiProfile"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flex: 1,
            p: 0,
            "&:last-child": { pb: 0 },
          }}
        >
          <Typography
            sx={{
            
              fontWeight: 500,
              fontSize: { xs: "1.7rem", md: "22px" },
              color: "#565656",
              margin: { xs: 2, sm: 2, md: 3 },
            }}
          >
            Hi, I'm Uunatii from Ware.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#565656",
              paddingLeft:{xs:'10px',sm:'5px',md:'5px'}
            }}
          >
            We create beautiful ceramic tableware for eateries, from dinner
            plates to espresso & cappuccino cups. Our hospitality tableware is
            durable for busy hotels or restaurants.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#565656",
              paddingLeft:{xs:'10px',sm:'5px',md:'5px'}
            }}
          >
            Whether you need pieces for a fancy fine dining spot or restaurant
            crockery in bulk for your chain, let me know. I'll help you find
            pieces that'll make your guests smile :)
          </Typography>

          <Link to="catalogueForm" smooth={true} duration={3000}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#C4704B",
                px: 4,
                py: 1.5,
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "#A85C3D",
                },
              }}
            >
              Get in touch
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileSection;
