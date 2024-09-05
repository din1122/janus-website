import styled from 'styled-components';
import { FlexRow } from './flexes';
import { pageLayout } from './LayoutStyle';

export const SectionContainer = styled(FlexRow)<{ $padding?: string }>`
  ${pageLayout}
  padding: 100px 0;
  color: #3d3e5c;
  align-items: start;
  ${({ $padding }) => $padding && `padding: ${$padding};`}
`;
