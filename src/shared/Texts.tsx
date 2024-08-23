import styled, { css } from 'styled-components';

export const DescriptionText = styled.p<{
  IsWhite?: boolean;
  isCentered?: boolean;
  width?: string;
}>`
  color: #14151f;
  font-size: 18px;
  line-height: 200%;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ IsWhite }) => IsWhite && 'color: #d1d2e0;'}
  ${({ isCentered }) => isCentered && 'text-align: center;'}
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  color: #787ced;
`;

export const SectionTitle = styled.h2<{
  isWhite?: boolean;
  isCentered?: boolean;
}>`
  color: #14151f;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.72px;
  ${({ isWhite }) => isWhite && 'color: #fff;'}
  ${({ isCentered }) => isCentered && 'text-align: center;'}
`;

export const HeaderTitle = styled.h1<{
  isCentered?: boolean;
  isWhite?: boolean;
}>`
  font-size: 84px;
  font-weight: 800;
  margin: 0;
  line-height: normal;
  letter-spacing: -1.28px;
  ${({ isCentered }) => isCentered && 'text-align: center;'}
  ${({ isWhite }) => isWhite && 'color: #fff;'}
  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

export const ColoredText = styled.span<{ color?: string }>`
  background: linear-gradient(90deg, #a5a8f3 -12.89%, #14151f 102.94%);
  ${({ color }) => color && `background: ${color}`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
