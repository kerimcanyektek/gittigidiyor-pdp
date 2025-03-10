import React from "react";
import { Container } from "./ProductInfoContainer.styles";
import ProductTitle from "../../atoms/product-title/ProductTitle";
import Price from "../../atoms/price/Price";
import ProductDescription from "../../atoms/product-description/ProductDescription";
import RatingAndReviews from "../../molecules/rating-and-reviews/RatingAndReviews";
import Button from "../../atoms/button/Button";
import Icon from "../../atoms/icon/Icon";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

interface ProductInfoContainerProps {
  title: string;
  price: string;
  currency: string;
  description: string;
  rating: number;
  reviewCount: number;
}

const ProductInfoContainer: React.FC<ProductInfoContainerProps> = ({
  title,
  price,
  currency,
  description,
  rating,
  reviewCount,
}) => {
  return (
    <Container>
      {/* Product Title */}
      <ProductTitle title={title} />

      {/* Rating & Reviews */}
      <RatingAndReviews rating={rating} reviewCount={reviewCount} />

      {/* Price */}
      <Price amount={price} currency={currency} />

      {/* Product Description */}
      <ProductDescription description={description} />

      {/* Action Buttons */}
      <div className="button-group">
        <Button variant="primary">Hemen Al</Button>
        <Button variant="secondary">Sepete Ekle</Button>
      </div>

      {/* Product Icons */}
      <div className="icon-group">
        <Icon icon={FaHeart} size={20} color="red" />
        <Icon icon={FaShoppingCart} size={20} color="#007bff" />
        <Icon icon={FaStar} size={20} color="gold" />
      </div>
    </Container>
  );
};

export default ProductInfoContainer;
