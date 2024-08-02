import React, { ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

import { Flex } from '~/shared/components/flexes';
import { theme } from '~/shared/theme';

import {
  ButtonSize,
  StyledAnchor,
  StyledButton,
  StyledLink
} from './Button.styled';
import { ButtonProps, ButtonVariants } from './Button.types';

export type ButtonGroupValue = string | number | boolean;

export interface ButtonGroupProps<
  T extends ButtonGroupValue = ButtonGroupValue
> {
  children?: React.ReactNode;
  vertical?: boolean;
  defaultValue?: T;
  index?: number;
  size?: ButtonSize;
  onValueChange?: (value: T) => void;
  value?: T;
}

export interface ButtonGroupElementProps extends Omit<ButtonProps, 'value'> {
  children: ReactNode;
  as?: 'button' | 'Link';
  variant?: ButtonVariants;
  value: ButtonGroupValue;
}

const ButtonGroupContainer = styled(Flex)`
  ${StyledButton}, ${StyledAnchor}, ${StyledLink} {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    button > {
      background: ${theme.colors.primary['900']};
      color: ${theme.colors.neutral.white};
      outline: none;
    }
  }
`;

export const ButtonGroup = <T extends ButtonGroupValue>({
  children,
  size,
  defaultValue,
  value: groupValue,
  onValueChange,
  ...props
}: ButtonGroupProps<T>): React.ReactElement => {
  return (
    <ButtonGroupContainer {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as ReactElement<ButtonGroupElementProps>,
            {
              size,
              variant: 'secondary',

              groupButton: true,
              pressed: defaultValue
                ? defaultValue === child.props.value
                : groupValue === child.props.value,
              onClick: e => {
                child.props.onClick?.(e);
                onValueChange?.(child.props.value as T);
              }
            }
          );
        }
        return child;
      })}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
