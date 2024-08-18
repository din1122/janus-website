import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.h2<{
  $isWhite?: boolean;
  $isCentered?: boolean;
}>`
  color: #14151f;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.72px;
  ${({ $isWhite }) => $isWhite && 'color: #fff;'}
  ${({ $isCentered }) => $isCentered && 'text-align: center;'}
`;

type SectionTitleProps = {
  children: React.ReactNode;
  isWhite?: boolean;
  isCentered?: boolean;
};

const SectionTitle = ({
  isWhite,
  isCentered,
  children,
  ...rest
}: SectionTitleProps & React.AllHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <StyledSectionTitle $isWhite={isWhite} $isCentered={isCentered} {...rest}>
      {children}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
