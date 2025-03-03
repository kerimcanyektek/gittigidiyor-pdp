import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "disabled";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={variant === "disabled"}>
      {children}
    </StyledButton>
  );
};

export default Button;
