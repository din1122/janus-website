import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

export const flexCenterCss = css`
  ${flexCss};
  align-items: center;
  justify-content: center;
`;

const FlexCenter = styled.div`
  ${flexCenterCss};
`;

export default FlexCenter;
