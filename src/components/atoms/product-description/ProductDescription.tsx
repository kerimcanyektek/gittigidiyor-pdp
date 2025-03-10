import React from "react";
import { StyledDescription } from "./ProductDescription.styles";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return <StyledDescription>{description}</StyledDescription>;
};

export default ProductDescription;
