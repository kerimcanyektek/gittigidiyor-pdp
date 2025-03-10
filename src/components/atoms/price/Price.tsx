import React from "react";
import { StyledPrice } from "./Price.styles";

interface PriceProps {
  amount: string;
  currency: string;
}

const Price: React.FC<PriceProps> = ({ amount, currency }) => {
  return (
    <StyledPrice>
      {amount} {currency}
    </StyledPrice>
  );
};

export default Price;
