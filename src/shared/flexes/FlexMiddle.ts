import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

export const flexMiddleCss = css`
  ${flexCss};
  flex-direction: row;
  align-items: center;
`;

export const FlexMiddle = styled.div`
  ${flexCss};
  align-items: center;
`;

export default FlexMiddle;
