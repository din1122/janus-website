import styled, { css } from "styled-components";

import { FlexColumn, FlexRow } from "../shared/flexes";
import { Circle } from "./Visuals";
import { ColoredText, DescriptionText, SectionTitle } from "../shared/Texts";
import Button from "../shared/Button";
import { pageLayout } from "../shared/LayoutStyle";

const CTASectionContainer = styled(FlexRow)`
  overflow: hidden;
  ${pageLayout}
  padding: 10vh 8vh;
  border-radius: 24px;
  background-color: #030417;
  position: relative;
  box-sizing: border-box;
  position: relative;
  gap: 20%;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
    width: auto;
    padding: 6vh 2vh;
    flex-direction: column;
    gap: 60px;
  }
`;
const FormWrapper = styled(FlexColumn)`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  flex: 1;
  z-index: 1;
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
  z-index: 0;
  margin: 0 auto;
  width: 300px;
`;

const TextWrapper = styled(FlexColumn)`
  flex: 1;
`;

const commonInputStyles = css`
  padding: 12px;
  border: 1px solid #8586ad;
  border-radius: 8px;
  background: transparent;
  color: #292a3d;
  font-family: "Greycliff CF";
  &:focus-visible {
    outline: 1px solid #8586ad;
  }
  &:hover {
    outline: 1px solid #e0e1eb;
    background-color: #f9f9fb;
  }
`;
const StyledInput = styled.input`
  ${commonInputStyles}
`;

const StyledTextArea = styled.textarea`
  ${commonInputStyles}
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: #292a3d;
`;

const CTASection = () => {
  return (
    <CTASectionWrapper id="CTA-section">
      <CTASectionContainer>
        <TextWrapper>
          <SectionTitle isWhite>
            Elevate Your Healthcare System to the{" "}
            <ColoredText color={"#A5A8F3"} style={{ display: "inline" }}>
              Next Level
            </ColoredText>
          </SectionTitle>
          <DescriptionText IsWhite>
            Empower your workers and clients with next level healthcare
            standards
          </DescriptionText>
        </TextWrapper>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
          }}
        >
          <FormWrapper gap="24">
            <SectionTitle style={{ fontSize: "26px" }}>Contact Us</SectionTitle>

            <FlexColumn gap="24" style={{ flex: 1 }}>
              <input type="hidden" name="form-name" value="contact" />
              <FlexColumn gap="12">
                <StyledLabel>Full name:</StyledLabel>
                <StyledInput
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  className="test"
                />
              </FlexColumn>
              <FlexColumn gap="12">
                <StyledLabel htmlFor="email">Email Address:</StyledLabel>
                <StyledInput
                  placeholder="John.doe@example.com"
                  type="email"
                  name="email"
                />
              </FlexColumn>
              <FlexColumn gap="12">
                <StyledLabel htmlFor="email">Message:</StyledLabel>
                <StyledTextArea name="email" rows={6} />
              </FlexColumn>

              <Button black fullwidth type="submit">
                Send
              </Button>
            </FlexColumn>
          </FormWrapper>
        </form>

        <CTACircle />
      </CTASectionContainer>
    </CTASectionWrapper>
  );
};

export default CTASection;
