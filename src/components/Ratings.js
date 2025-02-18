import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const Ratings = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <Box>
      {[...Array(5)].map((_, index) => (
        <IconButton
          key={index}
          onClick={() => handleStarClick(index)}
          sx={{
            color: index < rating ? "#FFD700" : "#ccc",
            "& svg": {
              fontSize: "40px",
            },
          }}
        >
          {index < rating ? <Star /> : <StarBorder />}
        </IconButton>
      ))}
    </Box>
  );
};

export default Ratings;
