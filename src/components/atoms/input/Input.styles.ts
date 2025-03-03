import styled from "styled-components";

export const StyledInput = styled.input<{ width?: string }>`
  width: ${({ width }) => width || "100%"};
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #3f7eff;
  }
`;
