import styled from 'styled-components';
import Header from '~/components/Header';
import { FlexColumn, FlexColumnCenter, FlexRow } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import {
  ColoredText,
  DescriptionText,
  HeaderTitle,
  Subtitle
} from '~/shared/Texts';
import worldMap from '~/assets/worldmap.svg';
import { IconBrandLinkedin } from '@tabler/icons-react';
// import dinImage from '~/assets/din-img.jpg';
import omriImage from '~/assets/omri-img.jpg';
import visionImage from '~/assets/icons/vision.svg';
import missionImage from '~/assets/icons/mission.svg';
import CTASection from '~/components/CTASection';
import { Circle } from '~/components/Visuals';
import SectionTitle from '~/shared/Texts/SectionTitle';

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
  padding: 180px 0;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 200px 20px 60px 20px;
  }
`;

const FounderName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const FounderTitle = styled.p`
  font-size: 12px;
  font-style: italic;
`;

const SectionContainer = styled(FlexRow)`
  ${pageLayout}
  padding: 100px 0;
  color: #3d3e5c;
  align-items: start;
`;

const SectionContainerCentered = styled(FlexColumnCenter)`
  ${pageLayout}
  padding: 100px 0;
  color: #3d3e5c;
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

const About = () => {
  return (
    <>
      <Container>
        <Header dark={false} />
        <FlexColumnCenter>
          <HeroContainer gap="24">
            <FlexColumnCenter gap="4">
              <Subtitle>About Janus</Subtitle>
              <HeroTextWrapper gap="12">
                <HeaderTitle isWhite isCentered>
                  Empowering{' '}
                  <ColoredText color="#A5A8F3">Healthcare </ColoredText>
                  Systems
                </HeaderTitle>
              </HeroTextWrapper>
            </FlexColumnCenter>
            <DescriptionText IsWhite isCentered>
              Janus's technology services within the healthcare sector. It
              focuses on identity management, authentication, and consent
              management, particularly in the context of interoperability
              infrastructure development and healthcare data transfer in the
              global mobility market.
            </DescriptionText>
          </HeroContainer>
          <img src={worldMap} alt="" width={'70%'} />
        </FlexColumnCenter>
        <Circle />
      </Container>
      <SectionContainer>
        <FlexColumnCenter gap="48" style={{ flex: 1 }}>
          <img src={visionImage} />
          <FlexColumnCenter gap="16">
            <FlexColumnCenter gap="4">
              <Subtitle>Vision</Subtitle>
              <SectionTitle>Our Vision</SectionTitle>
            </FlexColumnCenter>
            <DescriptionText isCentered width="60%">
              our vision is to become the leading global provider of a secure
              and interoperable Infrastructure Platform as a Service (IPaaS),
              empowering organizations to seamlessly manage and scale their
              digital ecosystems.
            </DescriptionText>
          </FlexColumnCenter>
        </FlexColumnCenter>

        <FlexColumnCenter gap="48" style={{ flex: 1 }}>
          <img src={missionImage} />
          <FlexColumnCenter gap="16">
            <FlexColumnCenter gap="4">
              <Subtitle>Mission</Subtitle>
              <SectionTitle>Our Mission</SectionTitle>
            </FlexColumnCenter>
            <DescriptionText isCentered width="60%">
              Simplified, Decentralized Access to Complete Patient Histories for
              Individuals and Healthcare ProvidersSimplified, Decentralized
              Access to Complete Patient Histories for Individuals and
              Healthcare ProvidersSimplified, Decentralized Access to Complete
              Patient Histories for
            </DescriptionText>
          </FlexColumnCenter>
        </FlexColumnCenter>
      </SectionContainer>
      <SectionContainerCentered gap="48">
        <FlexColumnCenter>
          <Subtitle>Founders</Subtitle>
          <SectionTitle>The People Behind Janus</SectionTitle>
        </FlexColumnCenter>
        <FlexRow>
          <FlexColumnCenter gap="12">
            <img src={dinImage} width={'70%'} />
            <FlexColumnCenter gap="0">
              <FounderName>Din Ashkenazi</FounderName>
              <FounderTitle>Co-Founder, COO</FounderTitle>
            </FlexColumnCenter>
            <a target="_blank" href="https://www.linkedin.com/in/dinashk/">
              <IconBrandLinkedin />
            </a>
          </FlexColumnCenter>
          <FlexColumnCenter gap="12">
            <img src={omriImage} width={'70%'} />
            <FlexColumnCenter gap="0">
              <FounderName>Omri Cohen.MD</FounderName>
              <FounderTitle>Founder, CEO</FounderTitle>
            </FlexColumnCenter>
            <a target="_blank" href="https://www.linkedin.com/in/omricoh/">
              <IconBrandLinkedin />
            </a>
          </FlexColumnCenter>
        </FlexRow>
      </SectionContainerCentered>
      <CTASection />
    </>
  );
};

export default About;
