import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from 'semantic-ui-react';

import { FlexRowCenter } from '~/shared/components/flexes';
import { Text } from '~/shared/theme';

import { StyledAnchor, StyledButton, StyledLink } from './Button.styled';
import { AnchorProps, ButtonIconProps } from './Button.types';

export type ElementProp<T> = T extends 'a' | 'Link'
  ? AnchorProps
  : ButtonIconProps;

const IconButton = <T extends 'a' | 'button' | 'Link' = 'button'>({
  icon,
  disabled,
  size = 'm',
  variant = 'primary',
  rounded,
  loading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  to,
  as = 'button' as T,
  onClick,
  title = undefined,
  ...rest
}: ElementProp<T> & { as?: T }) => {
  const Component: React.ElementType =
    as === 'Link' ? StyledLink : as === 'a' ? StyledAnchor : StyledButton;

  return (
    <Component
      {...rest}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      rounded={rounded}
      variant={variant}
      icon={icon}
      size={size}
    >
      {loading ? (
        <Loader inline active size={'mini'} />
      ) : title ? (
        <FlexRowCenter gap={'1'}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {title && <Text bold={true}>{title}</Text>}
        </FlexRowCenter>
      ) : (
        <>{icon && <FontAwesomeIcon icon={icon} />}</>
      )}
    </Component>
  );
};

export default IconButton;
