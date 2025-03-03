import React from "react";
import { StyledIcon } from "./Icon.styles";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 20, color = "#333", backgroundColor }) => {
  return (
    <StyledIcon size={size} color={color} backgroundColor={backgroundColor}>
      <IconComponent />
    </StyledIcon>
  );
};

export default Icon;
