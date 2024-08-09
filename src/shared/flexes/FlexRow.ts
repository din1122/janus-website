import styled, { css } from 'styled-components';

import { flexCss } from './Flex';

const flexRowCss = css`
  ${flexCss};
  flex-direction: row;
`;

const FlexRow = styled.div<{ gap?: string }>`
  ${flexRowCss};
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FlexRowCenter = styled.div<{ gap?: string }>`
  ${flexRowCss};
  align-items: center;
  justify-content: center;
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FlexRowMiddle = styled.div<{ gap?: string }>`
  ${flexRowCss};
  align-items: center;
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const flexRowSpaceBetweenCss = css`
  ${flexRowCss};
  align-items: center;
  justify-content: space-between;
`;

export const FlexRowSpaceBetween = styled.div<{ gap?: string }>`
  ${flexRowSpaceBetweenCss};
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FlexSpaceCss = css`
  flex-grow: 1;
`;

export const FlexSpacer = styled.div<{ gap?: string }>`
  ${FlexSpaceCss}
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;


export default FlexRow;
