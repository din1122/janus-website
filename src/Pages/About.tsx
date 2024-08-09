import styled from 'styled-components';
import Header from '~/components/Header';
import { FlexColumn, FlexColumnCenter, FlexRow } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import {
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';
import medicalHistory from '~/assets/medical.png';
import { IconBrandLinkedin } from '@tabler/icons-react';
import dinImage from '~/assets/din-img.jpg';
import omriImage from '~/assets/omri-img.jpg';
import CTASection from '~/components/CTASection';
import { Circle } from '~/components/Visuals';

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

const HeroContainer = styled(FlexColumnCenter)`
  ${pageLayout}
  padding: 120px 0;
`;

const FounderName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const FounderTitle = styled.p`
  font-size: 12px;
  font-style: italic;
`;

const FoundersSectionContainer = styled(FlexColumnCenter)`
  ${pageLayout}
  padding: 120px 0;
`;

const About = () => {
  return (
    <>
      <Container>
        <Header />
        <FlexColumnCenter>
          <HeroContainer>
            <Subtitle>About us</Subtitle>
            <HeaderTitle isWhite>It’s Your Data</HeaderTitle>
            <DescriptionText IsWhite isCentered>
              Janus is a SaaS service that manages, authenticates, and shares
              consent to access private data using distributed ledger
              technology. blending security with user-centric management.
            </DescriptionText>
          </HeroContainer>
          <img src={medicalHistory} alt="" width={'80%'} />
        </FlexColumnCenter>
        <Circle />
      </Container>
      <FoundersSectionContainer gap="32">
        <FlexColumnCenter>
          <Subtitle>Founders</Subtitle>
          <SectionTitle>The People Behind Janus</SectionTitle>
        </FlexColumnCenter>
        <FlexRow>
          <FlexColumnCenter gap="12">
            <img src={dinImage} width={'70%'} />
            <FounderName>Din Ashkenazi</FounderName>
            <FounderTitle>Co-Founder</FounderTitle>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/din-ashkenazi/"
            >
              <IconBrandLinkedin />
            </a>
          </FlexColumnCenter>
          <FlexColumnCenter gap="12">
            <img src={omriImage} width={'70%'} />
            <FounderName>Din Ashkenazi</FounderName>
            <FounderTitle>Co-Founder</FounderTitle>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/din-ashkenazi/"
            >
              <IconBrandLinkedin />
            </a>
          </FlexColumnCenter>
        </FlexRow>
      </FoundersSectionContainer>
      <CTASection />
    </>
  );
};

export default About;
