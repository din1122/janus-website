import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

export const flexColumnCss = css<{ gap?: string }>`
  ${flexCss};
  flex-direction: column;
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const flexColumnCenterCss = css<{ gap?: string }>`
  ${flexColumnCss};
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled.div<{ gap?: string }>`
  ${flexColumnCenterCss};
`;

const FlexColumn = styled.div<{ gap?: string }>`
  ${flexColumnCss};
`;

export default FlexColumn;
