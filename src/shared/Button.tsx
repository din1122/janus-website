import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{
  $dark?: boolean;
  $fullwidth?: boolean;
}>`
  padding: 8px 32px;
  background: ${({ $dark }) => ($dark ? '#14151F' : '#F6F6FE')};
  color: ${({ $dark }) => ($dark ? '#F6F6FE' : '#14151F')};
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
    background: ${({ $dark }) => ($dark ? '#292A3D' : '#E8E9FC')};
  }
`;

const AnchorButton = styled.a<{
  $dark?: boolean;
  $fullwidth?: boolean;
}>`
  display: inline-block;
  padding: 8px 32px;
  background: ${({ $dark }) => ($dark ? '#14151F' : '#F6F6FE')};
  color: ${({ $dark }) => ($dark ? '#F6F6FE' : '#14151F')};
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'fit-content')};
  &:hover {
    background: ${({ $dark }) => ($dark ? '#292A3D' : '#E8E9FC')};
    color: ${({ $dark }) => ($dark ? '#E8E9FC' : '#292A3D')};
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  dark?: boolean;
  fullwidth?: boolean;
  as?: 'button' | 'a';
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  dark?: boolean;
  fullwidth?: boolean;
};

type CombinedProps = ButtonProps & AnchorProps;

const Button = ({
  as = 'button',
  onClick,
  children,
  dark,
  fullwidth,
  ...props
}: CombinedProps) => {
  const Component = (
    as === 'a' ? AnchorButton : StyledButton
  ) as React.ElementType;

  return (
    <Component $dark={dark} $fullwidth={fullwidth} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

export default Button;
