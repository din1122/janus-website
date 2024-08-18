import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

const flexRowCss = css`
  ${flexCss};
  flex-direction: row;
`;

const FlexRow = styled.div<{ gap?: string }>`
  ${flexRowCss};
`;

export const FlexRowCenter = styled.div<{ gap?: string }>`
  ${flexRowCss};
  align-items: center;
  justify-content: center;
`;

export const FlexRowMiddle = styled.div<{ gap?: string }>`
  ${flexRowCss};
  align-items: center;
`;

export const flexRowSpaceBetweenCss = css`
  ${flexRowCss};
  align-items: center;
  justify-content: space-between;
`;

export const FlexRowSpaceBetween = styled.div<{ gap?: string }>`
  ${flexRowSpaceBetweenCss};
`;

export const FlexSpaceCss = css`
  flex-grow: 1;
`;

export const FlexSpacer = styled.div<{ gap?: string }>`
  ${FlexSpaceCss}
`;


export default FlexRow;
