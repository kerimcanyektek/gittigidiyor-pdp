import styled from "styled-components";

export const StyledIcon = styled.div<{ size: number; color: string; backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size + 10}px;
  height: ${({ size }) => size + 10}px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border-radius: 50%;
  
  svg {
    font-size: ${({ size }) => size}px;
  }
`;
