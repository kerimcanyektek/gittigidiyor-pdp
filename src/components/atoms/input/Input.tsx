import React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  type?: "text" | "number";
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder, value, onChange, width }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} width={width} />;
};

export default Input;
