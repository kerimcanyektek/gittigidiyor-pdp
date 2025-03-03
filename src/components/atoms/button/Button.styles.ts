import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string }>`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: 0.2s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: #3f7eff;
          color: white;
          &:hover {
            background-color: #3366cc;
          }
        `;
      case "secondary":
        return `
          background-color: #f5f5f5;
          color: #333;
          &:hover {
            background-color: #ddd;
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: #3f7eff;
          border: 2px solid #3f7eff;
          &:hover {
            background-color: #3f7eff;
            color: white;
          }
        `;
      case "disabled":
        return `
          background-color: #ccc;
          color: #777;
          cursor: not-allowed;
        `;
      default:
        return "";
    }
  }}
`;
