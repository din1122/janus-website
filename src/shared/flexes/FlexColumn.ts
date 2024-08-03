import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

export const flexColumnCss = css`
  ${flexCss};
  flex-direction: column;
`;

export const flexColumnCenterCss = css`
  ${flexColumnCss};
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled.div`
  ${flexColumnCenterCss};
`;

const FlexColumn = styled.div`
  ${flexColumnCss};
`;

export default FlexColumn;
