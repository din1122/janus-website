import styled from 'styled-components';
import Header from '~/components/Header';
import {
  FlexCenter,
  FlexColumn,
  FlexColumnCenter,
  FlexRow
} from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import {
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';
import providerHeroImage from '~/assets/providers-page/hero-page.png';
import providerHeroImageMobile from '~/assets/providers-page/mobile-hero-image.png';
import { Circle } from '~/components/Visuals';
import { SectionContainer } from '~/shared/SectionContainer';
import insights from '~/assets/providers-page/insights.png';
import insightsMobile1 from '~/assets/providers-page/insights-mobile-1.png';
import insightsMobile2 from '~/assets/providers-page/insights-mobile-2.png';
import regulatory from '~/assets/providers-page/regulatory.png';
import regulatoryMobile from '~/assets/providers-page/regulatory-mobile.png';
import darkSectionBgGrid from '~/assets/providers-page/dark-section-bg-grid.png';
import payerProvider from '~/assets/providers-page/payer-provider.png';
import payerProviderMobile from '~/assets/providers-page/payer-provider-mobile.png';
import globalHealthPortability from '~/assets/providers-page/global-health-portability.png';
import tags from '~/assets/providers-page/tags.png';
import benefitsClinical from '~/assets/providers-page/benefits-clinical.png';
import CTASection from '~/components/CTASection';
import benefitsFinancial from '~/assets/providers-page/benefits-financial.png';
import textShape from '~/assets/providers-page/textShape.png';
import Button from '~/shared/Button';
import useScrollToCTA from '~/components/utils/useScrollToCTA';
import useIsTabletOrMobile from '~/components/utils/useIsTabletOrMobile';

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

const HeroContainer = styled(FlexColumnCenter)`
  ${pageLayout}
  padding: 220px 0 100px 0;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 200px 20px 60px 20px;
  }
`;

const HeroTextWrapper = styled(FlexRow)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 48px;
    }
  }
`;

const ProviderHeroImageElement = styled.img`
  width: 70%;
  max-width: 1200px;
  z-index: 1;
  transform: translate(45px, 0);
  @media (max-width: 768px) {
    width: 100%;
    transform: translate(0, 0);
    padding: 0 16px;
  }
`;

const CircleOne = styled(Circle)`
  z-index: 0;
  top: 50%;
  right: -350px;
`;

const CircleTwo = styled(Circle)`
  z-index: 0;
  bottom: 0;
  left: -350px;
`;

const DarkSecitonBackgroundWrapper = styled.div`
  height: 110vh;
  display: flex;
`;

const DarkSectionBackgroundTextWrapper = styled(FlexColumnCenter)`
  width: 80vw;
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  height: 100%;
  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #f9f9fb;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Regulatory = styled(GridItem)`
  grid-column: 1 / 2;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const Operational = styled(GridItem)`
  grid-column: 2 / 2;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const PrivateSecure = styled(GridItem)`
  grid-column: 1 / 2;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const Financial = styled(GridItem)`
  grid-column: 2 / 2;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const Clinical = styled(GridItem)`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #14151f;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const BenefitsTitle = styled.h4<{ $isWhite?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.$isWhite ? '#fff' : '#3d3e5c')};
`;

const BenefitsDescription = styled.p<{ $isWhite?: boolean }>`
  font-size: 14px;
  line-height: 175%;
  color: ${props => (props.$isWhite ? '#fff' : '#3d3e5c')};
`;

const BenefitsFinancial = styled.img.attrs({ src: benefitsFinancial })`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
`;

const TextShape = styled.img.attrs({ src: textShape })`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 370px;
`;

const ResponsiveFlexRowMiddle = styled(FlexRow)`
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DarkSectionBackgroundWrapper = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
`;

const DarkSectionBackgorund = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <DarkSectionBackgroundWrapper>
      {isMobile ? (
        <svg
          viewBox="0 0 390 799"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C23.2342 4.86116 48.9504 8.85896 76.4386 11.8681C115.401 16.1332 157.16 18.3284 199.333 18.3284C241.505 18.3284 283.265 16.1332 322.227 11.8681C346.341 9.22827 369.092 5.82757 390 1.75058V799C366.804 794.153 341.138 790.165 313.707 787.162C274.745 782.897 232.985 780.702 190.813 780.702C148.641 780.702 106.881 782.897 67.9188 787.162C43.7482 789.808 20.9477 793.219 0 797.308L0 0Z"
            fill="#14151F"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1600 851"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.300835C90.3401 20.0041 189.404 36.3275 294.815 48.8173C454.761 67.7694 626.188 77.5233 799.312 77.5233C972.435 77.5233 1143.86 67.7694 1303.81 48.8173C1409.75 36.264 1509.29 19.838 1600 0V850.321C1509.39 830.52 1409.98 814.122 1304.18 801.586C1144.24 782.634 972.812 772.88 799.688 772.88C626.565 772.88 455.138 782.634 295.192 801.586C189.634 814.093 90.4415 830.445 0 850.185L0 0.300835Z"
            fill="#14151F"
          />
        </svg>
      )}
    </DarkSectionBackgroundWrapper>
  );
};

const ProvidersPage = () => {
  const isMobileOrTablet = useIsTabletOrMobile();
  return (
    <>
      <Container>
        <Header dark />
        <FlexColumnCenter>
          <HeroContainer gap="24">
            <FlexColumnCenter gap="4">
              <Subtitle>For Medical Providers</Subtitle>
              <HeroTextWrapper gap="12">
                <HeaderTitle isCentered>Complete clinical picture</HeaderTitle>
              </HeroTextWrapper>
            </FlexColumnCenter>
            <DescriptionText isCentered>
              Connect to payer directly, Access full patient histories, improve
              diagnosis accuracy and patient trust.
            </DescriptionText>
            <Button dark onClick={useScrollToCTA}>
              Request a Demo
            </Button>
          </HeroContainer>

          {isMobileOrTablet ? (
            <ProviderHeroImageElement src={providerHeroImageMobile} />
          ) : (
            <ProviderHeroImageElement src={providerHeroImage} />
          )}
          <CircleOne />
          <CircleTwo />
        </FlexColumnCenter>
      </Container>
      <SectionContainer>
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <Subtitle>Data standardization</Subtitle>
          <SectionTitle isCentered>Comprehensive patient insights</SectionTitle>
          <DescriptionText width="60%" isCentered>
            Access real-time patient care episodes and journeys to inform
            preventive and intervention strategies. Make more informed decisions
            with a complete view of your patients' medical histories.
          </DescriptionText>
          {isMobileOrTablet ? (
            <>
              <img src={insightsMobile1} style={{ paddingTop: '40px' }} />
              <img src={insightsMobile2} />
            </>
          ) : (
            <img src={insights} style={{ paddingTop: '80px' }} />
          )}
        </FlexColumnCenter>
      </SectionContainer>
      <SectionContainer $padding={'160px 0'} $mobilePadding={'0 0 80px 0'}>
        <ResponsiveFlexRowMiddle gap="90">
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle isCentered={isMobileOrTablet}>Compliance</Subtitle>
              <SectionTitle isCentered={isMobileOrTablet}>
                Streamlined regulatory compliance
              </SectionTitle>
            </FlexColumn>
            <DescriptionText isCentered={isMobileOrTablet}>
              Ensure adherence to privacy regulations like GDPR and HIPAA while
              streamlining reporting requirements. Our system is designed to
              keep you compliant without added complexity.
            </DescriptionText>
          </FlexColumn>
          <FlexColumn style={{ flex: 1 }}>
            {isMobileOrTablet ? (
              <img src={regulatoryMobile} />
            ) : (
              <img src={regulatory} />
            )}
          </FlexColumn>
        </ResponsiveFlexRowMiddle>
      </SectionContainer>
      <DarkSecitonBackgroundWrapper>
        <DarkSectionBackgorund isMobile={isMobileOrTablet} />

        <DarkSectionBackgroundTextWrapper>
          <ResponsiveFlexRowMiddle gap="60">
            <FlexColumn style={{ zIndex: 1, position: 'relative' }} gap="24">
              <FlexColumn>
                <Subtitle>Reduced administrative burden</Subtitle>
                <SectionTitle isWhite>
                  Enhanced workflow efficiency
                </SectionTitle>
              </FlexColumn>
              <DescriptionText IsWhite>
                Ensure adherence to privacy regulations like GDPR and HIPAA
                while streamlining reporting requirements. Our system is
                designed to keep you compliant without added complexity.
              </DescriptionText>
            </FlexColumn>
            <FlexColumn style={{ overflow: 'hidden' }}>
              {isMobileOrTablet ? (
                <img
                  src={darkSectionBgGrid}
                  style={{
                    transform: 'scale(1.5)',
                    zIndex: 2,
                    position: 'relative'
                  }}
                />
              ) : (
                <img
                  src={darkSectionBgGrid}
                  style={{
                    zIndex: 1
                  }}
                />
              )}
            </FlexColumn>
          </ResponsiveFlexRowMiddle>
        </DarkSectionBackgroundTextWrapper>
      </DarkSecitonBackgroundWrapper>
      <SectionContainer $mobilePadding={'80px 0 80px 0'}>
        <ResponsiveFlexRowMiddle gap="160">
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle>Billing and payment</Subtitle>
              <SectionTitle>
                Effortless Prior Authorizations and Billing
              </SectionTitle>
            </FlexColumn>
            <DescriptionText>
              Janus will transform your payer interactions with cutting-edge
              technology. Our platform will streamline your prior
              authorizations, simplify your billing, and accelerate your
              payments. That will significantly reduce your administrative
              burdens.
            </DescriptionText>
          </FlexColumn>
          {isMobileOrTablet ? (
            <img src={payerProviderMobile} />
          ) : (
            <FlexColumn style={{ flex: 1.2 }}>
              <img src={payerProvider} />
            </FlexColumn>
          )}
        </ResponsiveFlexRowMiddle>
      </SectionContainer>
      <SectionContainer>
        <ResponsiveFlexRowMiddle gap="48">
          {!isMobileOrTablet && (
            <FlexColumn style={{ flex: 1.5 }}>
              <img src={globalHealthPortability} width={'60%'} />
            </FlexColumn>
          )}
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle>Global Health Portability</Subtitle>
              <SectionTitle>
                Easy patient access to their medical records
              </SectionTitle>
            </FlexColumn>
            <DescriptionText>
              Empowering individuals with easy access to their health
              information is transformative. It allows them to better manage
              chronic conditions, adhere to treatment plans, track wellness
              progress, and contribute their data to research efforts, all while
              taking an active role in their own healthcare.
            </DescriptionText>
            <Button dark as="a" href="/patients">
              Learn More
            </Button>
          </FlexColumn>

          {isMobileOrTablet && (
            <FlexColumn style={{ flex: 1.5 }}>
              <img src={globalHealthPortability} />
            </FlexColumn>
          )}
        </ResponsiveFlexRowMiddle>
      </SectionContainer>

      <SectionContainer $padding="0 0">
        <FlexColumnCenter gap="48">
          <FlexCenter style={{ flexDirection: 'column' }}>
            <Subtitle>Why Janus</Subtitle>
            <SectionTitle isCentered={isMobileOrTablet}>
              Benefits of using Janus
            </SectionTitle>
          </FlexCenter>
          <GridContainer>
            <Regulatory>
              <FlexColumn style={{ justifyContent: 'space-between', flex: 1 }}>
                <FlexColumn style={{ flex: 1 }} gap="8">
                  <BenefitsTitle>Regulatory</BenefitsTitle>
                  <BenefitsDescription>
                    Comply with the most up to the regulations of ONC
                    information block ing and Patient access
                  </BenefitsDescription>
                </FlexColumn>
                <img src={tags} style={{ zIndex: 1 }} />
              </FlexColumn>
              <Circle style={{ zIndex: 0, bottom: 0, right: '-200px' }} />
            </Regulatory>

            <Operational>
              <FlexColumn style={{ justifyContent: 'space-between', flex: 1 }}>
                <FlexColumn style={{ flex: 1 }} gap="8">
                  <BenefitsTitle>Operational</BenefitsTitle>
                  <BenefitsDescription>
                    Improve your operational costs and efficiency
                  </BenefitsDescription>
                </FlexColumn>
              </FlexColumn>
              <Circle style={{ zIndex: 0, bottom: 0, right: '-200px' }} />
            </Operational>

            <Clinical>
              <FlexColumn
                style={{ justifyContent: 'space-between', flex: 1 }}
                gap="80"
              >
                <FlexColumn style={{ flex: 1 }} gap="8">
                  <BenefitsTitle $isWhite>Clinical</BenefitsTitle>
                  <BenefitsDescription $isWhite>
                    Increase patient trust, and diagnoses accuracy and reduce
                    errors.
                  </BenefitsDescription>
                </FlexColumn>
                <div style={{ position: 'relative' }}>
                  <img src={benefitsClinical} />
                  <TextShape />
                </div>
              </FlexColumn>
              <Circle style={{ zIndex: 0, bottom: 0, right: '-200px' }} />
            </Clinical>

            <PrivateSecure>
              <FlexColumn style={{ justifyContent: 'space-between', flex: 1 }}>
                <FlexColumn style={{ flex: 1 }} gap="8">
                  <BenefitsTitle>Private and Secure</BenefitsTitle>
                  <BenefitsDescription>
                    Structured approach for easy implementation and quick access
                    to the applications and systems you need
                  </BenefitsDescription>
                </FlexColumn>
              </FlexColumn>
              <Circle style={{ zIndex: 0, bottom: 0, right: '-200px' }} />
            </PrivateSecure>

            <Financial>
              <FlexColumn style={{ justifyContent: 'space-between', flex: 1 }}>
                <FlexColumn style={{ flex: 1 }} gap="8">
                  <BenefitsTitle>Financial</BenefitsTitle>
                  <BenefitsDescription>
                    Leverage your infrastructure and investments under the
                    guidance of our experts
                  </BenefitsDescription>
                </FlexColumn>
              </FlexColumn>
              <Circle style={{ zIndex: 0, bottom: 0, right: '-200px' }} />
              <BenefitsFinancial />
            </Financial>
          </GridContainer>
        </FlexColumnCenter>
      </SectionContainer>
      <CTASection />
    </>
  );
};

export default ProvidersPage;
