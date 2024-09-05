import styled from 'styled-components';
import Header from '~/components/Header';
import {
  FlexCenter,
  FlexColumn,
  FlexColumnCenter,
  FlexMiddle,
  FlexRow,
  FlexRowSpaceBetween
} from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import {
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';
import providerHeroImage from '~/assets/providers-page/hero-page.png';
import { Circle } from '~/components/Visuals';
import { SectionContainer } from '~/shared/SectionContainer';
import tempInsights from '~/assets/providers-page/temp-insights.png';
import regulatory from '~/assets/providers-page/regulatory.png';
import darkSectionbackground from '~/assets/providers-page/dark-section-backgorund.svg';
import darkSectionBgGrid from '~/assets/providers-page/dark-section-bg-grid.png';
import payerProvider from '~/assets/providers-page/payer-provider.png';
import globalHealthPortability from '~/assets/providers-page/global-health-portability.png';
import tags from '~/assets/providers-page/tags.png';
import benefitsClinical from '~/assets/providers-page/benefits-clinical.png';
import CTASection from '~/components/CTASection';
import benefitsFinancial from '~/assets/providers-page/benefits-financial.png';
import Button from '~/shared/Button';
import useScrollToCTA from '~/components/utils/useScrollToCTA';

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
  padding: 100px 0;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 60px 20px;
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
  height: 100vh;
  display: flex;
`;

const DarkSectionBackground = styled.img.attrs({ src: darkSectionbackground })`
  position: absolute;
  z-index: 0;
  width: 100%;
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
`;

const Operational = styled(GridItem)`
  grid-column: 2 / 2;
`;

const PrivateSecure = styled(GridItem)`
  grid-column: 1 / 2;
`;

const Financial = styled(GridItem)`
  grid-column: 2 / 2;
`;

const Clinical = styled(GridItem)`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #14151f;
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

const ProvidersPage = () => {
  return (
    <>
      <Container>
        <Header isBlack />
        <FlexColumnCenter>
          <HeroContainer gap="24">
            <FlexColumnCenter gap="4">
              <Subtitle>For Medical Providers</Subtitle>
              <HeroTextWrapper gap="12">
                <HeaderTitle isCentered>Complete Clinical Picture</HeaderTitle>
              </HeroTextWrapper>
            </FlexColumnCenter>
            <DescriptionText isCentered>
              Connect to payer directly, Access full patient histories, improve
              diagnosis accuracy and patient trust.
            </DescriptionText>
            <Button dark onClick={useScrollToCTA}>
              Contact us
            </Button>
          </HeroContainer>
          <ProviderHeroImageElement src={providerHeroImage} />
          <CircleOne />
          <CircleTwo />
        </FlexColumnCenter>
      </Container>
      <SectionContainer>
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <Subtitle>For Medical Providers</Subtitle>
          <SectionTitle isCentered>Complete Clinical Picture</SectionTitle>
          <DescriptionText width="60%" isCentered>
            Access real-time patient care episodes and journeys to inform
            preventive and intervention strategies. Make more informed decisions
            with a complete view of your patients' medical histories.
          </DescriptionText>
          <img src={tempInsights} style={{ paddingTop: '80px' }} />
        </FlexColumnCenter>
      </SectionContainer>
      <SectionContainer $padding={'160px 0'}>
        <FlexRowSpaceBetween gap="90">
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle>Compliance</Subtitle>
              <SectionTitle>Streamlined Regulatory Compliance</SectionTitle>
            </FlexColumn>
            <DescriptionText>
              Ensure adherence to privacy regulations like GDPR and HIPAA while
              streamlining reporting requirements. Our system is designed to
              keep you compliant without added complexity.
            </DescriptionText>
          </FlexColumn>
          <FlexColumn style={{ flex: 1 }}>
            <img src={regulatory} />
          </FlexColumn>
        </FlexRowSpaceBetween>
      </SectionContainer>
      <DarkSecitonBackgroundWrapper>
        <DarkSectionBackground />
        <DarkSectionBackgroundTextWrapper>
          <FlexRowSpaceBetween gap="60">
            <FlexColumn style={{ zIndex: 1, position: 'relative' }} gap="24">
              <FlexColumn>
                <Subtitle>Reduced Administrative Burden</Subtitle>
                <SectionTitle isWhite>
                  Enhanced Workflow Efficiency
                </SectionTitle>
              </FlexColumn>
              <DescriptionText IsWhite>
                Ensure adherence to privacy regulations like GDPR and HIPAA
                while streamlining reporting requirements. Our system is
                designed to keep you compliant without added complexity.
              </DescriptionText>
            </FlexColumn>
            <FlexColumn>
              <img src={darkSectionBgGrid} style={{ zIndex: 1 }} />
            </FlexColumn>
          </FlexRowSpaceBetween>
        </DarkSectionBackgroundTextWrapper>
      </DarkSecitonBackgroundWrapper>
      <SectionContainer>
        <FlexRowSpaceBetween gap="160">
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle>Billing and Payment</Subtitle>
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
          <FlexColumn style={{ flex: 1.2 }}>
            <img src={payerProvider} />
          </FlexColumn>
        </FlexRowSpaceBetween>
      </SectionContainer>
      <SectionContainer>
        <FlexMiddle>
          <FlexColumn style={{ flex: 1.5 }}>
            <img src={globalHealthPortability} width={'55%'} />
          </FlexColumn>
          <FlexColumn style={{ flex: 1 }} gap="24">
            <FlexColumn>
              <Subtitle>Global Health Portability</Subtitle>
              <SectionTitle>
                Enable Individuals to Access Their Medical Records
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
        </FlexMiddle>
      </SectionContainer>

      <SectionContainer $padding="0 0">
        <FlexColumnCenter gap="48">
          <FlexCenter style={{ flexDirection: 'column' }}>
            <Subtitle>Why Janus</Subtitle>
            <SectionTitle>Benefits of using Janus</SectionTitle>
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
                <img src={benefitsClinical} />
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
