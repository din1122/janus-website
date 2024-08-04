import styled from "styled-components";

import { FlexColumn, FlexColumnCenter } from "../shared/flexes";
import { Circle } from "./Visuals";
import { ColoredText, DescriptionText, HeaderTitle } from "../shared/Texts";
import { Button } from "../shared/Button";
import { pageLayout } from "../shared/LayoutStyle";

const CTASectionContainer = styled(FlexColumn)`
  overflow: hidden;
  ${pageLayout}
  padding: 10vh 8vh;
  border-radius: 24px;
  background-color: #030417;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  position: relative;
  gap: 16px;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
    width: auto;
    padding: 6vh 2vh;
  }
`;

const CTASectionWrapper = styled.div`
  padding: 120px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const CTACircle = styled(Circle)`
  left: 0;
  bottom: -30%;
  z-index: 1;
  margin: 0 auto;
  width: 300px;
`;

const TextWrapper = styled(FlexColumnCenter)`
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTASection = () => {
  return (
    <CTASectionWrapper>
      <CTASectionContainer>
        <TextWrapper>
          <HeaderTitle isCentered>
            Elevate Your Healthcare System to the{" "}
            <ColoredText color={"#A5A8F3"} style={{ display: "inline" }}>
              Next Level
            </ColoredText>
          </HeaderTitle>
          <DescriptionText IsWhite isCentered>
            Empower your workers and clients with next level healthcare
            standards
          </DescriptionText>
        </TextWrapper>
        <Button>Contact us</Button>
        <CTACircle />
      </CTASectionContainer>
    </CTASectionWrapper>
  );
};

export default CTASection;
