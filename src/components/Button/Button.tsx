import React from "react";
import { CustomButton } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Button = ({ isActive, children, ...otherProps }: ButtonProps) => {
  return (
    <CustomButton isActive={isActive} {...otherProps}>
      {children}
    </CustomButton>
  );
};
