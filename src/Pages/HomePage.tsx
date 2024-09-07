import styled, { keyframes } from 'styled-components';

import appImage from '~/assets/app.png';
import HL7FHIR from '~/assets/logos/HL7FHIR.png';
import indy from '~/assets/logos/indy.png';
import linux from '~/assets/logos/linux.svg';
import fhirDiagram from '~/assets/home-page/fhir-diagram.png';
import fhirDiagramMobile from '~/assets/home-page/mobile-fhir.png';

import medicalHistory from '~/assets/medical.png';
import medicalProvider from '~/assets/provider-image.png';
import medicalProviderMobile from '~/assets/mobile-medical.png';
import medicalProviderMobile2 from '~/assets/mobile-medical-2.png';
import providerMobile from '~/assets/mobile-provider-image.png';

import { IconRosetteDiscountCheck } from '@tabler/icons-react';
import {
  Flex,
  FlexCenter,
  FlexColumn,
  FlexColumnCenter,
  FlexMiddle,
  FlexRow,
  FlexRowSpaceBetween
} from '~/shared/flexes';
import CTASection from '~/components/CTASection';
import {
  ColoredText,
  DescriptionText,
  HeaderTitle,
  Subtitle
} from '~/shared/Texts';
import { Circle } from '~/components/Visuals';
import Button from '~/shared/Button';

import { pageLayout } from '~/shared/LayoutStyle';
import CookieConsentPopup from '~/components/CookieConsentPopup';
import Header from '~/components/Header';
import useScrolltoCTA from '~/components/utils/useScrollToCTA';
import useIsTabletOrMobile from '~/components/utils/useIsTabletOrMobile';
import SectionTitle from '~/shared/Texts/SectionTitle';

const HeroWrapper = styled(FlexColumn)`
  ${pageLayout}
  padding-top:120px;

  @media (max-width: 768px) {
    gap: 48px;
    padding: 0 20px;
  }
`;

const Container = styled(FlexColumn)`
  padding: 0 0 32px 0;
  margin: 28px;
  border-radius: 24px;
  background-color: #f9f9fb;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
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
  padding-top: 120px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 200px 12px 0 12px;
  }
`;

const CircleTwo = styled(Circle)`
  z-index: 0;
  bottom: -500px;
  opacity: 0.5;
  left: 0;
`;

const LogosWrapper = styled(FlexRow)`
  gap: 16px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 48px 0;
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
  width: 310px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(8px);
  display: flex;
  gap: 8px;
  position: absolute;
  z-index: 8;
  bottom: 100px;
  left: -40%;
  animation: ${float} 4s ease-in-out infinite;
  @media (max-width: 768px) {
    left: 0;
    bottom: -20px;
  }
`;

const CardTexts = styled(FlexColumn)`
  gap: 8px;
  span {
    font-size: 12px;
    color: #a5a8f3;
  }
  p {
    color: #3d3e5c;
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
  }
`;

const StyledAppImage = styled.img`
  padding: 62px 0;
  width: 100%;
  min-width: 420px;
  max-width: 450px;
  height: auto;
  z-index: 1;
  @media (max-width: 768px) {
    min-width: 350px;
    width: 250px;
  }
`;

/**** Interoperability Section *****/

const InterSection = styled(FlexRowSpaceBetween)`
  gap: 80px;
  padding: 120px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InterTextSection = styled(FlexRowSpaceBetween)`
  width: 40%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const InterRightSection = styled(Flex)`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SectionTitleWrapper = styled(FlexColumn)`
  gap: 2px;
`;

const VisualContainer = styled(FlexCenter)``;

const ForIndividualsContainer = styled(FlexColumn)`
  align-items: center;
  padding: 120px 0;
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

const MedicalTextSection = styled(FlexColumn)`
  width: 100%;
`;

const ForMedicalProvidersContainer = styled(FlexMiddle)`
  ${pageLayout}
  padding:120px 0;
  ${VisualContainer} {
    justify-content: end;
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
      width: 305px;
    }
  }
`;

const LeftSideWrapper = styled(FlexColumn)`
  align-items: left;
  gap: 32px;

  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    padding: 0;
  }
`;

function HomePage() {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <>
      <Container>
        <Header dark />
        <HeroWrapper>
          <HeroContainer>
            <LeftSideWrapper>
              <LeftTextWrapper>
                <HeaderTitle $width="80%">
                  Seamless access to<br></br>
                  <ColoredText color="#4B51E7"> medical data</ColoredText>
                </HeaderTitle>
                <DescriptionText width="50%">
                  Enabling seamless access to complete patient history for
                  individuals. Optimizing cost for payers, and Interoperability
                  development for Healthcare Providers.
                </DescriptionText>
              </LeftTextWrapper>
              <Button as="a" dark onClick={useScrolltoCTA}>
                Request a Demo
              </Button>
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
            {!isTabletOrMobile && (
              <Circle
                style={{
                  left: 0,
                  top: 0,
                  zIndex: 1,
                  height: '600px',
                  width: '600px',
                  opacity: 0.4
                }}
              />
            )}
            <Circle />
          </HeroContainer>
          <InterSection>
            <InterTextSection>
              <FlexColumn gap="16">
                <FlexColumn>
                  <Subtitle>For Medical Organizations</Subtitle>
                  <SectionTitle>
                    Comply with interoperability regulation
                  </SectionTitle>
                </FlexColumn>
                <DescriptionText>
                  Get compliance with patient access final and Information
                  Blocking rules. Janus is developing customized solutions for
                  seamless integration with FHIR.
                </DescriptionText>
              </FlexColumn>
            </InterTextSection>
            <InterRightSection>
              <FHIRDiagram>
                {!isTabletOrMobile && <img src={fhirDiagram} />}
                {isTabletOrMobile && <img src={fhirDiagramMobile} />}
                {/* <FhirCircle /> */}
              </FHIRDiagram>
            </InterRightSection>
          </InterSection>
        </HeroWrapper>
        <CircleTwo />
      </Container>
      <ForIndividualsContainer gap="40">
        <FlexColumnCenter gap="20">
          <SectionTitleWrapper style={{ alignItems: 'center' }}>
            <Subtitle>For Patients</Subtitle>
            <SectionTitle isCentered>Full Medical History Access</SectionTitle>
          </SectionTitleWrapper>
          <DescriptionText isCentered width="50%">
            Janus will allow you to access, aggregate and share all your medical
            records easily from your phone. Allowing you to get the continuity
            of care you deserve from anywhere in the world avoiding the
            bureaucratic burden.
          </DescriptionText>
          <Button as="a" href="/patients" dark>
            Learn More
          </Button>
        </FlexColumnCenter>
        <VisualContainer>
          {!isTabletOrMobile && (
            <img src={medicalHistory} alt="" width={'70%'} />
          )}
          {isTabletOrMobile && (
            <>
              <img src={medicalProviderMobile} alt="" />
              <img src={medicalProviderMobile2} alt="" width={'90%'} />
            </>
          )}
        </VisualContainer>
      </ForIndividualsContainer>

      <ForMedicalProvidersContainer>
        <MedicalTextSection style={{ flex: 1 }}>
          <SectionTitleWrapper>
            <Subtitle>For Medical Providers</Subtitle>
            <SectionTitle>Complete clinical picture</SectionTitle>
            <DescriptionText width="40vh">
              Connect to payer directly, Access full patient histories, improve
              diagnosis accuracy and patient trust.
            </DescriptionText>
          </SectionTitleWrapper>
          <Button as="a" href="/providers" dark>
            Learn More
          </Button>
        </MedicalTextSection>
        <VisualContainer style={{ flex: 1 }}>
          {!isTabletOrMobile && (
            <MedicalProvider src={medicalProvider} alt="" />
          )}
          {isTabletOrMobile && <MedicalProvider src={providerMobile} alt="" />}
        </VisualContainer>
      </ForMedicalProvidersContainer>
      <CTASection />

      <CookieConsentPopup />
    </>
  );
}

export default HomePage;
