import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slider from 'react-slick';
import BayRoute from "../asstes/images/bayroute_mumbai.png";
import Amelia from "../asstes/images/amelia_mumbai.png";
import Bastian from "../asstes/images/bastian_ware_innovations_restaurant_crockery.png";
import KCharcoal from "../asstes/images/k_s_charcoal_surat_ware_innovations_restaurant_crockery.png";
import Nandan_Coffee from "../asstes/images/Nandan_coffee.png";
import PapasBombay from "../asstes/images/papa_s_bombay_ceramic_tableware_ware_innovation.png";

const ClientsData = [
  { img: BayRoute, title: "Bayroute, All branches, Mumbai", type: "Mediterranean Cuisine" },
  { img: Amelia, title: "Amelia's, Mumbai", type: "Continental, Italian" },
  { img: Bastian, title: "Bastian, All Branches", type: "Seafood, continental" },
  { img: KCharcoal, title: "K's Charcoal, Surat", type: "Italian Cuisine" },
  { img: Nandan_Coffee, title: "Nandan Coffee House, Mumbai", type: "Coffeehouse" },
  { img: PapasBombay, title: "Papa's Bombay, Mumbai", type: "Modern Indian" },
];

const OurClientsSection = () => {
  const theme = useTheme();

  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ padding: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Our Clients
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Images in 4:5 ratio
      </Typography>

      {/* Grid for medium and larger screens (static images) */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}
      >
        {ClientsData.slice(0, 3).map((image, index) => (
          <Grid item md={4} key={index}>
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              <Box
                component="img"
                src={image.img}
                alt={image.title}
                sx={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
              <Typography variant="subtitle2" mt={1}>
                {image.title}
              </Typography>
              {/* Arrows beside the image */}
              <Box sx={{ position: 'absolute', top: '50%', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Carousel for smaller screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
        <Slider {...settings}>
          {ClientsData.map((image, index) => (
            <Box key={index} sx={{ textAlign: 'center', position: 'relative' }}>
              <Box
                component="img"
                src={image.img}
                alt={image.title}
                sx={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
              <Typography variant="subtitle2" mt={1}>
                {image.title}
              </Typography>
              {/* Arrows beside the image */}
              <Box sx={{ position: 'absolute', top: '50%', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <IconButton aria-label="next" sx={{ mt: 2 }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default OurClientsSection;
