import React from "react";
import { FaStar } from "react-icons/fa";
import { RatingContainer, Star, ReviewText } from "./RatingAndReviews.styles";

interface RatingAndReviewsProps {
  rating: number; 
  reviewCount: number;
}

const RatingAndReviews: React.FC<RatingAndReviewsProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <RatingContainer>
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index}>
          <FaStar />
        </Star>
      ))}
      {halfStar && (
        <Star>
          <FaStar style={{ opacity: 0.5 }} />
        </Star>
      )}
      
      <ReviewText>({reviewCount} Değerlendirme)</ReviewText>
    </RatingContainer>
  );
};

export default RatingAndReviews;
