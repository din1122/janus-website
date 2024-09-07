import styled, { css } from 'styled-components';

export const Divider = styled.div<{ $isStickey?: boolean }>`
  margin-top: 48px;
  position: fixed;
  width: 100%;
  height: 1px;
  opacity: 0.3;
  background-image: linear-gradient(
    to right,
    rgba(165, 168, 243, 0),
    rgba(165, 168, 243, 1) 33%,
    rgba(165, 168, 243, 0)
  );

  ${({ $isStickey }) =>
    $isStickey &&
    css`
      opacity: 0;
      margin-top: 0;
    `}
`;
