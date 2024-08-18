import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{
  $black?: boolean;
  $fullwidth?: boolean;
}>`
  padding: 8px 32px;
  background: ${({ $black }) => ($black ? '#14151F' : '#F6F6FE')};
  color: ${({ $black }) => ($black ? '#F6F6FE' : '#14151F')};
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  border-radius: 8px;
  height: fit-content;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'fit-content')};
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ $black }) => ($black ? '#292A3D' : '#E8E9FC')};
  }
`;

const AnchorButton = styled.a<{
  $black?: boolean;
  $fullwidth?: boolean;
}>`
  display: inline-block;
  padding: 8px 32px;
  background: ${({ $black }) => ($black ? '#14151F' : '#F6F6FE')};
  color: ${({ $black }) => ($black ? '#F6F6FE' : '#14151F')};
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'fit-content')};
  &:hover {
    background: ${({ $black }) => ($black ? '#292A3D' : '#E8E9FC')};
    color: #14151f;
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  black?: boolean;
  fullwidth?: boolean;
  as?: 'button' | 'a';
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  black?: boolean;
  fullwidth?: boolean;
};

type CombinedProps = ButtonProps & AnchorProps;

const Button = ({
  as = 'button',
  onClick,
  children,
  black,
  fullwidth,
  ...props
}: CombinedProps) => {
  const Component = (
    as === 'a' ? AnchorButton : StyledButton
  ) as React.ElementType;

  return (
    <Component
      $black={black}
      $fullwidth={fullwidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
