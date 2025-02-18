import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  TextareaAutosize,
} from "@mui/material";
import Ratings from "./Ratings";

const ReviewSection = () => {
  return (
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
            fontSize: "20px",
            fontWeight: 500,
            textAlign: "center",
            margin: "30px 10px 60px 10px",
          }}
        >
          Write a Review
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Ratings />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <label> Name </label>
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
          <Grid item xs={12} md={12}>
            <label>Review</label>
            <TextareaAutosize
              minRows={4}
              style={{
                marginTop: "20px",
                width: "97%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "4px",
                borderColor: "#ccc",
                outline: "none",
                resize: "vertical",
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <label> Designation </label>
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
                width: { xs: "auto", sm: "90px", md: "90px" },
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
  );
};

export default ReviewSection;
