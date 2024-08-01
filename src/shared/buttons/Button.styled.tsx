import { Link } from 'react-router-dom';
import { ButtonProps } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

import { theme } from '~/shared/theme';
import { getThemeColor } from '~/shared/theme/typography/textComponents';

import { AnchorProps, ButtonVariants } from './Button.types';

const SIZES = {
  xs: css`
    padding: 2px ${theme.spaces[2]}; // TODO:Add 2px to spaces theme
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    svg {
      width: 14px;
      height: 14px;
    }
  `,
  s: css`
    padding: ${theme.spaces[1]} ${theme.spaces[3]};
    font-size: 14px;
  `,
  m: css`
    padding: 6px ${theme.spaces[5]}; // TODO: Add 6px to spaces theme
    font-size: 16px;
  `,
  l: css`
    padding: 10px 10px;
    font-size: 16px;
  `
} as const;

export type ButtonSize = keyof typeof SIZES;

const ICON_SIZES = {
  xs: css`
    padding: 4px;
    svg {
      width: 14px;
      height: 14px;
    }
  `,
  s: css`
    padding: 6px;
  `,
  m: css`
    padding: 8px;
  `,
  l: css`
    padding: 12px;
  `
};

const DISABLED_STATE = css`
  outline: 1px solid ${theme.colors.secondary['300']};
  color: ${theme.colors.secondary['300']} !important;
  background: ${theme.colors.secondary['200']};
  cursor: not-allowed;
  pointer-events: none;
  &:hover,
  &:active,
  &:focus-visible {
    border: inherit;
    color: ${theme.colors.secondary['800']};
    box-shadow: none;
    background: ${theme.colors.secondary['200']};
  }
`;

const VARIANT_STYLES = (
  variant: ButtonVariants = 'primary',
  disabled: boolean = false,
  pressed: boolean = false,
  groupButton: boolean = false
) => {
  const styles = {
    primary: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.primary['700']};
      &:hover {
        background: ${theme.colors.primary['600']};
        color: ${theme.colors.neutral.white};
      }
      &:focus-visible {
        outline: 1px solid ${theme.colors.primary['900']};
        background: ${theme.colors.primary['900']};
      }
      &:active {
        background: ${theme.colors.primary['800']};
      }

      ${pressed &&
      css`
        background: ${theme.colors.primary['800']};
        outline-color: ${theme.colors.primary['700']};
        box-shadow: 0px 0px 0px 2px ${theme.colors.primary['50']};
      `}
      ${disabled &&
      css`
        background: ${theme.colors.primary['300']};
        cursor: not-allowed;
        pointer-events: none;
      `}
      &:hover, :focus-visible {
        color: ${theme.colors.neutral.white};
        background: ${theme.colors.primary['600']};
        box-shadow: none;
      }
      &:active {
        background: ${theme.colors.primary['800']};
      }
    `,
    secondary: css`
      color: ${theme.colors.secondary['800']};
      outline-offset: -1px;
      outline: 1px solid ${theme.colors.secondary['400']};
      background: ${theme.colors.neutral.white};
      &:hover {
        background: ${theme.colors.secondary['50']};
        color: ${theme.colors.secondary['800']};
      }
      &:focus-visible {
        outline: 0;
        background: ${theme.colors.secondary['50']};
      }
      &:active {
        background: ${theme.colors.primary['50']};
        outline: 1px solid ${theme.colors.primary['700']};
        box-shadow: 0px 0px 0px 2px ${theme.colors.primary['50']};
      }
      ${disabled && DISABLED_STATE}

      ${pressed &&
      css`
        background: ${theme.colors.primary['50']};
        outline-color: ${theme.colors.primary['700']};
        box-shadow: 0px 0px 0px 2px ${theme.colors.primary['50']};
      `}
      ${pressed &&
      groupButton &&
      css`
        background: ${theme.colors.primary['900']};
        color: ${theme.colors.neutral.white};
        outline: none;
        :hover {
          background: ${theme.colors.primary['1000']};
          color: ${theme.colors.neutral.white};
          outline: none;
        }
      `}
    `,
    tertiary: css`
      background: transparent;
      transition: none;
      color: ${theme.colors.secondary['800']};
      &:hover {
        background: ${theme.colors.secondary['50']};
        color: ${theme.colors.secondary['800']};
        outline-offset: -1px;
        outline: 1px solid ${theme.colors.secondary['400']};
      }
      &:active {
        background: ${theme.colors.primary['50']};
        outline: 1px solid ${theme.colors.primary['700']};
        outline-offset: -1px;
        box-shadow: 0px 0px 0px 2px ${theme.colors.primary['50']};
      }
      ${disabled &&
      css`
        color: ${theme.colors.secondary['400']} !important;
        pointer-events: none;
      `}
      ${pressed &&
      css`
        background: ${theme.colors.primary['50']};
        outline-color: ${theme.colors.primary['700']};
        box-shadow: 0px 0px 0px 2px ${theme.colors.primary['50']};
      `}
    `
  };

  return styles[variant];
};

const TextButtonStyle = css`
  line-height: 20px;
  font-weight: 600;
  gap: 8px;
`;

const commonStyle = css`
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  border-radius: ${theme.spaces['1']};
  height: fit-content;
  width: fit-content;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const getButtonStyle = ({
  variant,
  disabled,
  pressed,
  icon,
  themeColor,
  size,
  rounded,
  groupButton
}: ButtonProps | AnchorProps) => css`
  ${commonStyle}
  ${VARIANT_STYLES(variant, disabled, pressed, groupButton)}
  ${!icon && TextButtonStyle}
  ${themeColor &&
  css`
    color: ${getThemeColor(themeColor)};
    :hover {
      color: ${getThemeColor(themeColor)};
    }
  `}
  ${disabled &&
  size === 'xs' &&
  css`
    color: ${theme.colors.secondary['400']} !important;
  `}
  ${SIZES[size]}
  ${rounded && icon && 'border-radius: 50%;'}
  ${icon && ICON_SIZES[size]}
`;

const StyledButton = styled.button<ButtonProps>`
  ${getButtonStyle}
`;

const StyledAnchor = styled.a<AnchorProps>`
  ${getButtonStyle}
`;

const StyledLink = styled(Link)<ButtonProps>`
  ${getButtonStyle}
`;

export {
  SIZES,
  VARIANT_STYLES,
  ICON_SIZES,
  StyledButton,
  StyledAnchor,
  StyledLink
};
