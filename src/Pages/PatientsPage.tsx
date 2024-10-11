import styled from 'styled-components';
import Header from '~/components/Header';
import {
  FlexColumn,
  FlexColumnCenter,
  FlexRowSpaceBetween
} from '~/shared/flexes';
import patiantsPageMedical from '~/assets/patients-page/patients-page-medical.png';
import {
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';
import useIsTabletOrMobile from '~/components/utils/useIsTabletOrMobile';
import summaryPage from '~/assets/patients-page/mobile/medicalmobile.png';
import tempDragMedicalRecords from '~/assets/patients-page/temp-drag-medical-records.png';
import tempDragMedicalRecordsMobile from '~/assets/patients-page/mobile/your-data.png';
import dataStandardization from '~/assets/patients-page/data-standartization.png';
import dataStandardizationMobile from '~/assets/patients-page/mobile/data-strandartization.png';
import worldWideMap from '~/assets/patients-page/worldmap.svg';
import CTASection from '~/components/CTASection';
import HowItWorksSection from '~/components/HowItWorksSection';
import { SectionContainer } from '~/shared/SectionContainer';
import Button from '~/shared/Button';
import useScrollToCTA from '~/components/utils/useScrollToCTA';
import { Circle } from '~/components/Visuals';
import { pageLayout } from '~/shared/LayoutStyle';

const Container = styled(FlexColumn)`
  margin: 28px;
  border-radius: 24px;
  background-color: #f9f9fb;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;

const PatinetsHeroSection = styled(FlexColumnCenter)`
  ${pageLayout}
  padding: 200px 0 100px 0;
`;

const GradiantsWrapper = styled.div`
  border-radius: 24px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

const PatientsPageMedicalImg = styled.img`
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  transform: translate(-30px, 300px);
  margin-top: -250px;
`;

const WorldWideMap = styled.img`
  transform: translate(0, 220px);
  z-index: -1;
  position: relative;
  @media (max-width: 768px) {
    transform: translate(0, 40px);
    width: 100%;
  }
`;

const BackDropContainer = styled(FlexColumnCenter)`
  position: relative;
  padding-top: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 73%
    );
    pointer-events: none;
  }
`;

const ImageElement = styled.img<{ $width?: string }>`
  width: ${({ $width }) => $width};
`;

const PatientsPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <>
      <Container>
        <Header dark />
        <PatinetsHeroSection gap="12">
          <Subtitle>For Patients</Subtitle>
          <HeaderTitle isCentered>
            Your medical history at your fingertips
          </HeaderTitle>
          <DescriptionText isCentered width="70%">
            Access, aggregate, and share all your medical records easily from
            your phone with Janus. Get the continuity of care you deserve
            anywhere in the world, without bureaucratic burdens.
          </DescriptionText>
          <Button dark onClick={useScrollToCTA}>
            Contact us
          </Button>
          {!isTabletOrMobile ? (
            <PatientsPageMedicalImg
              src={patiantsPageMedical}
              alt="Patients Page Medical"
            />
          ) : (
            <ImageElement src={summaryPage} alt="Summary Page" />
          )}
        </PatinetsHeroSection>
        <GradiantsWrapper>
          <CircleOne />
          <CircleTwo />
        </GradiantsWrapper>
      </Container>

      <HowItWorksSection />

      <SectionContainer $padding="50px 0">
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <Subtitle>Consent Management</Subtitle>
          <SectionTitle>It’s your data</SectionTitle>
          <DescriptionText isCentered width="60%">
            Janus puts you in control of what you share. Share a secured link to
            a single or all your medical records easily from your phone to any
            individual. Allowing you to safely travel and get the continuity of
            care you need anywhere in the world.
          </DescriptionText>
          {isTabletOrMobile ? (
            <ImageElement
              src={tempDragMedicalRecordsMobile}
              alt="Summary Page"
            />
          ) : (
            <ImageElement
              src={tempDragMedicalRecords}
              alt="Summary Page"
              width={'60%'}
            />
          )}
        </FlexColumnCenter>
      </SectionContainer>
      <SectionContainer $padding="70px 0">
        {isTabletOrMobile ? ( // TODO: Figure out a better way to do this
          <FlexColumn>
            <FlexColumn style={{ flex: 1 }}>
              <Subtitle>Data Standaratization</Subtitle>
              <SectionTitle>Health record aggregation</SectionTitle>
              <DescriptionText>
                All your health records in a single place. Forget handling
                binders or taking a the day off to go to your provider to get
                that paper. All your records will be securely accessible in a
                single app.
              </DescriptionText>
            </FlexColumn>
            <FlexColumn style={{ flex: 1 }}>
              <img src={dataStandardizationMobile} />
            </FlexColumn>
          </FlexColumn>
        ) : (
          <FlexRowSpaceBetween>
            <FlexColumn style={{ flex: 1 }}>
              <img src={dataStandardization} width={'80%'} />
            </FlexColumn>
            <FlexColumn style={{ flex: 1 }}>
              <Subtitle>Data Standaratization</Subtitle>
              <SectionTitle>Health record aggregation</SectionTitle>
              <DescriptionText>
                All your health records in a single place. Forget handling
                binders or taking a the day off to go to your provider to get
                that paper. All your records will be securely accessible in a
                single app.
              </DescriptionText>
            </FlexColumn>
          </FlexRowSpaceBetween>
        )}
      </SectionContainer>
      <SectionContainer $padding="0 0 120px 0 ">
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <WorldWideMap src={worldWideMap} width={'80%'} />
          <BackDropContainer>
            <FlexColumnCenter gap="0">
              <Subtitle>Global Health Portability</Subtitle>
              <SectionTitle isCentered>
                Travel anywhere, with your records.
              </SectionTitle>
            </FlexColumnCenter>
            <DescriptionText isCentered width="60%">
              With Janus you can travel or relocate to anywhere in the world
              with all your medical history.
            </DescriptionText>
          </BackDropContainer>
        </FlexColumnCenter>
      </SectionContainer>
      <CTASection />
    </>
  );
};

export default PatientsPage;
