import styled, { keyframes } from "styled-components";

import appImage from "~/assets/app.png";
import HL7FHIR from "~/assets/logos/HL7FHIR.png";
import indy from "~/assets/logos/indy.png";
import linux from "~/assets/logos/linux.svg";
import fhirDiagram from "~/assets/fhir-diagram.png";
import fhirDiagramMobile from "~/assets/fhir-diagram-mobile.png";
import medicalHistory from "~/assets/medical.png";
import medicalProvider from "~/assets/provider-image.png";
import medicalProviderMobile from "~/assets/mobile-medical.png";
import medicalProviderMobile2 from "~/assets/mobile-medical-2.png";
import providerMobile from "~/assets/mobile-provider-image.png";
import { useMediaQuery } from "react-responsive";
import { IconRosetteDiscountCheck } from "@tabler/icons-react";
import {
  Flex,
  FlexCenter,
  FlexColumn,
  FlexMiddle,
  FlexRow,
  FlexRowSpaceBetween,
} from "~/shared/flexes";
import CTASection from "~/components/CTASection";
import {
  ColoredText,
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle,
} from "~/shared/Texts";
import { Circle } from "~/components/Visuals";
import { Button } from "~/shared/Button";

import { pageLayout } from "~/shared/LayoutStyle";
import CookieConsentPopup from "~/components/CookieConsentPopup";
import Header from "~/components/Header";

const HeroWrapper = styled(FlexColumn)`
  ${pageLayout}
  @media (max-width: 768px) {
    gap: 48px;
  }
`;

const Container = styled(FlexColumn)`
  overflow: hidden;
  margin: 28px;
  border-radius: 24px;
  background-color: #030417;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  margin: 0 auto auto auto;
  box-sizing: border-box;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 0%;
  }
`;

const LogosWrapper = styled(FlexRow)`
  gap: 16px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const LeftTextWrapper = styled(FlexColumn)`
  gap: 16px;
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingCard = styled.div`
  padding: 24px;
  width: 280px;
  border-radius: 8px;
  background: rgba(41, 42, 61, 0.29);
  backdrop-filter: blur(8px);
  display: flex;
  gap: 8px;
  position: absolute;
  z-index: 8;
  bottom: 100px;
  left: -40%;
  animation: ${float} 4s ease-in-out infinite;
  @media (max-width: 768px) {
    width: 280px;
    left: 0;
    bottom: 50px;
  }
`;

const StyledAppImage = styled.img`
  width: 100%;
  min-width: 420px;
  max-width: 600px;
  height: auto;
  z-index: 1;
  @media (max-width: 768px) {
    min-width: 350px;
    width: 250px;
  }
`;

/**** Interoperability Section *****/

const InterSection = styled(FlexColumn)`
  gap: 80px;
`;

const InterTextSection = styled(FlexRowSpaceBetween)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InterRightSection = styled(Flex)`
  /* flex: 0.5; */
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitleWrapper = styled(FlexColumn)`
  gap: 2px;
`;

const VisualContainer = styled(FlexCenter)``;

const ForIndividualsContainer = styled(FlexColumn)`
  align-items: center;
  padding: 120px 0;
  gap: 12px;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
  ${VisualContainer} {
    position: relative;
    padding: 48px 0;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const MedicalProvider = styled.img`
  transform: translateX(60px);
  @media (max-width: 768px) {
    transform: translateX(0);
  }
`;

const MedicalTextSection = styled(FlexColumn)``;

const ForMedicalProvidersContainer = styled(FlexMiddle)`
  ${pageLayout}
  padding:120px 0;
  ${VisualContainer} {
    justify-content: end;
    /* margin-left:auto; */
  }
  ${MedicalTextSection} {
    gap: 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 0 0;
  }
`;

const FhirCircle = styled.div``;

const FHIRDiagram = styled(FlexColumn)`
  position: relative;
  padding: 10vh 0;
  align-items: center;
  @media (max-width: 768px) {
    padding: 5vh 0;
  }
  & > ${FhirCircle} {
    background: #4b51e7;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    z-index: 0;
    right: 45%;
    top: 50%;
    position: absolute;
    filter: blur(200px);
  }

  & > img {
    z-index: 1;
    width: 805px;
    transform: translateX(-60px);
    @media (max-width: 768px) {
      transform: translateX(0);
      display: block;
      width: 405px;
    }
  }
`;

const CardTexts = styled(FlexColumn)`
  gap: 8px;
  span {
    font-size: 12px;
    color: #a5a8f3;
  }
  p {
    color: #f9f9fb;
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
  }
`;

const LeftSideWrapper = styled(FlexColumn)`
  align-items: left;
  gap: 32px;

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      font-size: 36px;
      line-height: 1;
    }
    h3 {
      font-size: 16px;
      width: 90%;
    }
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

function HomePage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Container>
        <HeroWrapper>
          <Header />
          <HeroContainer>
            <LeftSideWrapper>
              <LeftTextWrapper>
                <HeaderTitle>
                  <ColoredText>Empowering</ColoredText> Healthcare
                </HeaderTitle>
                <DescriptionText IsWhite width="80%">
                  Enabling seamless access to Complete Patient History for
                  individuals. Optimizing cost for payers, and Interoperability
                  development for Healthcare Providers.
                </DescriptionText>
              </LeftTextWrapper>
              <Button>Get Janus</Button>
              <LogosWrapper>
                <img src={HL7FHIR} />
                <img src={indy} />
                <img src={linux} />
              </LogosWrapper>
            </LeftSideWrapper>
            <RightSideContainer>
              <FloatingCard>
                <IconRosetteDiscountCheck color="#32D583" size={48} />
                <CardTexts>
                  <span>Medical History</span>
                  <p>Permissions Granted</p>
                </CardTexts>
              </FloatingCard>
              <StyledAppImage src={appImage} />
            </RightSideContainer>
            <Circle />
          </HeroContainer>
          <InterSection>
            <InterTextSection>
              <FlexColumn>
                <Subtitle>For Medical Organizations</Subtitle>
                <SectionTitle isWhite>
                  Comply with interoperability regulation
                </SectionTitle>
              </FlexColumn>
              <InterRightSection>
                <DescriptionText IsWhite>
                  Get compliance with patient access final and Information
                  Blocking rules. Janus is developing customized solutions for
                  seamless integration with FHIR.
                </DescriptionText>
              </InterRightSection>
            </InterTextSection>
            <FHIRDiagram>
              {!isTabletOrMobile && <img src={fhirDiagram} />}
              {isTabletOrMobile && <img src={fhirDiagramMobile} />}
              <FhirCircle />
            </FHIRDiagram>
          </InterSection>
        </HeroWrapper>
      </Container>
      <ForIndividualsContainer>
        <SectionTitleWrapper style={{ alignItems: "center" }}>
          <Subtitle>For Individuals</Subtitle>
          <SectionTitle isCentered>Full medical history access</SectionTitle>
        </SectionTitleWrapper>
        <DescriptionText isCentered width="50%">
          Janus will allow you to access, aggregate and share all your medical
          records easily from your phone. Allowing you to get the continuity of
          care you deserve from anywhere in the world avoiding the bureaucratic
          burden.
        </DescriptionText>
        <VisualContainer>
          {!isTabletOrMobile && (
            <img src={medicalHistory} alt="" width={"80%"} />
          )}
          {isTabletOrMobile && (
            <>
              <img src={medicalProviderMobile} alt="" />
              <img src={medicalProviderMobile2} alt="" width={"90%"} />
            </>
          )}
        </VisualContainer>
      </ForIndividualsContainer>

      <ForMedicalProvidersContainer>
        <MedicalTextSection>
          <SectionTitleWrapper>
            <Subtitle>For Medical Providers</Subtitle>
            <SectionTitle>Complete clinical picture</SectionTitle>
          </SectionTitleWrapper>
          <DescriptionText>
            Connect to payer directly, Access full patient histories, improve
            diagnosis accuracy and patient trust.
          </DescriptionText>
        </MedicalTextSection>
        <VisualContainer>
          {!isTabletOrMobile && (
            <MedicalProvider src={medicalProvider} alt="" width={"70%"} />
          )}
          {isTabletOrMobile && (
            <MedicalProvider src={providerMobile} alt="" width={"100%"} />
          )}
        </VisualContainer>
      </ForMedicalProvidersContainer>
      <CTASection />
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <CookieConsentPopup />
    </>
  );
}

export default HomePage;
