import React from "react";
import { StyledTitle } from "./ProductTitle.styles";

interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default ProductTitle;
