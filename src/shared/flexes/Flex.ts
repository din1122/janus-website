// import styled, { css } from 'styled-components';
//
// import { ThemeSpacesKeys, theme } from '~/shared/theme';
//
// export const flexCss = css<{ gap?: ThemeSpacesKeys }>`
//   display: flex;
//
//   ${({ gap }) => gap && `gap: ${theme.spaces[gap]}`}
// `;
//
// const Flex = styled.div`
//   ${flexCss}
// `;
//
// export default Flex;
//

import styled, { css } from 'styled-components';

// import { ThemeSpacesKeys, theme } from '~/shared/theme';

export const flexCss = css<{ gap?: string }>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

const Flex = styled.div<{ gap?: string }>`
  ${flexCss}
`

export default Flex;
