import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  TextareaAutosize,
  IconButton,
} from "@mui/material";
import Ratings from "./Ratings";
import { firestore } from "../firebase/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { Star, StarBorder } from "@mui/icons-material";

const ReviewSection = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    review: "",
    designation: "",
    company: "",
    rating: 0,
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("reviews")
      .onSnapshot((snapshot) => {
        const fetchedReviews = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviews(fetchedReviews);
      });
    return () => unsubscribe();
  }, []);

  const handleRatingChange = (newRating) => {
    setReviewData((prevData) => ({
      ...prevData,
      rating: newRating,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    firestore
      .collection("reviews")
      .add(reviewData)
      .then(() => {
        console.log("Review added to database");
        setReviewData({ name: "", review: "", designation: "", company: "" });
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  const deleteReview = (id) => {
    firestore
      .collection("reviews")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Review deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
      });
  };

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
            fontSize: "22px",
            fontWeight: 500,
            textAlign: "center",
            margin: "30px 10px 60px 10px",
          }}
        >
          Write a Review
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Ratings rating={reviewData.rating} setRating={handleRatingChange} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <label> Name </label>
            <TextField
              name="name"
              value={reviewData.name}
              onChange={handleChange}
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
              name="review"
              value={reviewData.review}
              onChange={handleChange}
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
              name="designation"
              value={reviewData.designation}
              onChange={handleChange}
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
              name="company"
              value={reviewData.company}
              onChange={handleChange}
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
              onClick={handleClick}
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

        <Box
          sx={{
            marginTop: 5,
            padding: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Customers Review
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {reviews.length === 0 ? (
              <Grid item xs={12} display="flex" justifyContent="center">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  No reviews yet. Be the first to review!
                </Typography>
              </Grid>
            ) : (
              reviews.map((review) => (
                <Grid item xs={12} key={review.id}>
                  <Box
                    sx={{
                      padding: 2,
                      marginBottom: 2,
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: 2, 
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: "16px", sm: "20px" },
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          color: "gray",
                          fontSize: { xs: "14px", sm: "16px" },
                        }}
                      >
                        {review.designation} at {review.company}
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: 1,
                          fontSize: { xs: "14px", sm: "16px" },
                        }}
                      >
                        {review.review}
                      </Typography>
                      <Box sx={{ marginTop: 1 }}>
                        {[...Array(5)].map((_, index) => (
                          <IconButton
                            key={index}
                            sx={{
                              color: index < review.rating ? "#FFD700" : "#ccc",
                              padding: { xs: "4px", sm: "6px" }, // Smaller padding on mobile
                            }}
                          >
                            {index < review.rating ? (
                              <Star
                                sx={{ fontSize: { xs: "18px", sm: "24px" } }}
                              />
                            ) : (
                              <StarBorder
                                sx={{ fontSize: { xs: "18px", sm: "24px" } }}
                              />
                            )}
                          </IconButton>
                        ))}
                      </Box>
                    </Box>

                    <IconButton
                      onClick={() => deleteReview(review.id)}
                      color="error"
                      sx={{
                        alignSelf: { xs: "flex-end", sm: "center" }, // Align delete button properly
                        mt: { xs: 1, sm: 0 }, // Add top margin on mobile
                      }}
                    >
                      <DeleteIcon
                        sx={{ fontSize: { xs: "20px", sm: "24px" } }}
                      />
                    </IconButton>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ReviewSection;
