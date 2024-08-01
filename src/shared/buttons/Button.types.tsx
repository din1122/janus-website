import { ReactNode } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { theme } from '~/shared/theme';
import { Path } from '~/shared/utils/typeScript.utils';

import { ButtonSize } from './Button.styled';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
type CommonButtonProps<T extends 'a' | 'button'> = {
  variant?: ButtonVariants;
  size?: ButtonSize;
  disabled?: boolean;
  pressed?: boolean;
  rounded?: boolean;
  to?: string;
  loading?: boolean;
  children?: ReactNode;
  leftIcon?: IconProp;
  rightIcon?: IconProp;
  index?: number;
  groupButton?: boolean;
  themeColor?: Path<typeof theme.colors>;
  onClick?: T extends 'a'
    ? React.MouseEventHandler<HTMLAnchorElement>
    : React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconProp;
  active?: boolean;
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonButtonProps<'button'> {}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Omit<CommonButtonProps<'a'>, '<icon'> {
  value?: string | number | boolean;
}

export interface ButtonIconProps
  extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  icon?: IconProp;
  as?: 'button' | 'a' | 'Link';
}
