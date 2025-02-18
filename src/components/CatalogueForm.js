import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const CatalogueForm = () => {
  return (
    <div id="catalogueForm"> 
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 3,
          color: "#565656 ",
        }}
      >
        <Typography
          sx={{
            color: "#565656",
            fontSize: "19px",
            fontWeight: 500,
            textAlign: "center",
            margin: "30px 10px 60px 10px",
          }}
        >
          Request a Horeca Catalogue
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <label> First Name </label>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  height: "40px",
                  "& .MuiOutlinedInput-input": {},
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <label> Last Name </label>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  height: "40px",
                  "& .MuiOutlinedInput-input": {},
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <label> Email </label>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <label> Phone number </label>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <label> Restaurant/Company Name </label>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                paddingLeft: "40px",
                height: "45px",
                fontSize: "16px",
                textTransform: "none",
                width: {xs:'280px',sm:'90px',md:'90px'}, 
                backgroundColor: "#bf5e35",
                borderRadius: "0",
                transition: "width 0.3s ease, background-color 0.3s",
                "&:hover": {
                  width: "130px",
                },
                "&:hover .arrow": {
                  opacity: 1,
                },
              }}
            >
              Send
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
          </Grid>
        </Grid>
      </Box>
    </Container>
    </div>
  );
};

export default CatalogueForm;
