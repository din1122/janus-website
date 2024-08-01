import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Loader } from 'semantic-ui-react';

import { StyledAnchor, StyledButton, StyledLink } from "./Button.styled";
import { AnchorProps, ButtonProps } from "./Button.types";
import { ButtonGroup } from "./ButtonGroup";

type ElementProp<T> = T extends "a" | "Link"
  ? AnchorProps
  : Omit<ButtonProps, "icon">;

const Button = <T extends "a" | "button" | "Link" = "button">({
  leftIcon,
  rightIcon,
  children,
  variant = "primary",
  size = "m",
  disabled = false,
  rounded = false,
  to,
  as = "button" as T,
  themeColor,
  groupButton,
  ...rest
}: ElementProp<T> & { as?: T }) => {
  const Component: React.ElementType =
    as === "Link" ? StyledLink : as === "a" ? StyledAnchor : StyledButton;

  return (
    <Component
      {...rest}
      size={size}
      themeColor={themeColor}
      variant={variant}
      groupButton={groupButton}
      disabled={disabled}
      rounded={rounded}
      to={to}
    >
      {leftIcon && leftIcon}

      {children}
      {rightIcon && leftIcon}
    </Component>
  );
};

Button.Group = ButtonGroup;

export default Button;
