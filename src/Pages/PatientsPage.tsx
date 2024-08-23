import styled from 'styled-components';
import Header from '~/components/Header';
import {
  FlexColumn,
  FlexColumnCenter,
  FlexRow,
  FlexRowSpaceBetween
} from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import patiantsPageMedical from '~/assets/patients-page/patients-page-medical.png';
import {
  ColoredText,
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';

import tempDragMedicalRecords from '~/assets/patients-page/temp-drag-medical-records.png';
import dataStandardization from '~/assets/patients-page/data-standartization.png';
import worldWideMap from '~/assets/patients-page/worldmap.svg';
import CTASection from '~/components/CTASection';
import HowItWorksSection from '~/components/HowItWorksSection';
import './PatientsPage.scss';
const Container = styled(FlexColumn)`
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

const PatiantsPageMedicalImg = styled.img`
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  transform: translate(-30px, 300px);
  margin-top: -250px;
`;

const SectionContainer = styled(FlexRow)<{ $padding?: string }>`
  ${pageLayout}
  padding: 100px 0;
  color: #3d3e5c;
  align-items: start;
  ${({ $padding }) => $padding && `padding: ${$padding};`}
`;

const WorldWideMap = styled.img`
  transform: translate(0, 220px);
  z-index: -1;
  position: relative;
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
    /* backdrop-filter: blur(8px); */
  }
`;

const PatientsPage = () => {
  return (
    <>
      <Container>
        <Header />

        <FlexColumnCenter
          style={{ width: '80%', margin: 'auto', padding: '120px 0 ' }}
          gap="24"
        >
          <Subtitle>For Patients</Subtitle>
          <HeaderTitle isCentered>
            Your <ColoredText>full medical history</ColoredText>
            <br></br> at your fingertips
          </HeaderTitle>
          <DescriptionText IsWhite isCentered width="70%">
            Access, aggregate, and share all your medical records easily from
            your phone with Janus. Get the continuity of care you deserve
            anywhere in the world, without bureaucratic burdens.
          </DescriptionText>
          <PatiantsPageMedicalImg
            src={patiantsPageMedical}
            alt="Patients Page Medical"
          />
        </FlexColumnCenter>
      </Container>
      <HowItWorksSection />

      <SectionContainer $padding="50px 0">
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <Subtitle>Consent Management</Subtitle>
          <SectionTitle>It’s Your Data</SectionTitle>
          <DescriptionText isCentered width="60%">
            Janus puts you in control of what you share. Share a secured link to
            a single or all your medical records easily from your phone to any
            individual. Allowing you to safely travel and get the continuity of
            care you need anywhere in the world.
          </DescriptionText>
          <img src={tempDragMedicalRecords} width={'70%'} />
        </FlexColumnCenter>
      </SectionContainer>
      <SectionContainer $padding="70px 0">
        <FlexRowSpaceBetween>
          <FlexColumn style={{ flex: 1 }}>
            <img src={dataStandardization} width={'80%'} />
          </FlexColumn>
          <FlexColumn style={{ flex: 1 }}>
            <Subtitle>Data Standaratization</Subtitle>
            <SectionTitle>Health Record Aggregation</SectionTitle>
            <DescriptionText>
              All your health records in a single place. Forget handling binders
              or taking a the day off to go to your provider to get that paper.
              All your records will be securely accessible in a single app.
            </DescriptionText>
          </FlexColumn>
        </FlexRowSpaceBetween>
      </SectionContainer>
      <SectionContainer $padding="0 0 120px 0 ">
        <FlexColumnCenter gap="16" style={{ flex: 1 }}>
          <WorldWideMap src={worldWideMap} width={'80%'} />
          <BackDropContainer>
            <FlexColumnCenter gap="0">
              <Subtitle>Global Health Portability</Subtitle>
              <SectionTitle>Travel anywhere, with your records.</SectionTitle>
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
