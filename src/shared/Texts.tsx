import styled, { css } from 'styled-components';

export const DescriptionText = styled.p<{
  IsWhite?: boolean;
  isCentered?: boolean;
  width?: string;
}>`
  color: #3d3e5c;
  font-size: 18px;
  line-height: 200%;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ IsWhite }) => IsWhite && 'color: #fff;'}
  ${({ isCentered }) => isCentered && 'text-align: center;'}
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h3<{ isCentered?: boolean }>`
  font-size: 14px;
  color: #4b51e7;
  font-weight: 700;
  ${({ isCentered }) => isCentered && 'text-align: center;'}
`;

export const SectionTitle = styled.h2<{
  isWhite?: boolean;
  isCentered?: boolean;
  $size?: 'S' | 'M';
}>`
  color: #14151f;
  font-size: ${size => (size.$size === 'S' ? '24px' : '42px')};
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
  $width?: string;
}>`
  font-size: 64px;
  font-weight: 800;
  margin: 0;
  line-height: normal;
  letter-spacing: -1.28px;
  color: #14151f;
  ${({ $width }) => $width && `width: ${$width}`};
  ${({ isCentered }) => isCentered && 'text-align: center;'}
  ${({ isWhite }) => isWhite && 'color: #fff;'}
  @media (max-width: 768px) {
    font-size: 52px;
    width: 100%;
    z-index: 2;
  }
`;

export const ColoredText = styled.span<{ color?: string }>`
  background: linear-gradient(90deg, #a5a8f3 -12.89%, #14151f 102.94%);
  ${({ color }) => color && `background: ${color}`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WhiteColoredText = styled.span<{ color?: string }>`
  background: linear-gradient(129deg, #f6f6fe 13.07%, #e0e1eb 99.62%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
