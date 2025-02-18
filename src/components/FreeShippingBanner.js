
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FreeShippingBanner = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#bf5e35',
          textAlign: 'center',
          color: 'white',
          padding: '10px 0px',
          fontSize: '16px',
          width:{xs:'100%',sm:'100%',md:'100%'}
        }}
      >
        <Typography sx={{fontSize:{xs:'15px',sm:'18px',md:'18px'}}}>
          Free Shipping on orders above INR 5000
        </Typography>
      </Box>
    </Container>
  );
};

export default FreeShippingBanner;
