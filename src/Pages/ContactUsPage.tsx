import styled from 'styled-components';
import ContactForm from '~/components/ContactForm';
import Header from '~/components/Header';

import { FlexColumn, FlexRowMiddle } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import { ColoredText, DescriptionText, Subtitle } from '~/shared/Texts';
import SectionTitle from '~/shared/Texts/SectionTitle';

const Container = styled(FlexColumn)`
  overflow: hidden;
  margin: 28px;
  border-radius: 24px;
  background-color: #030417;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;

const HeroSectionWrapper = styled(FlexRowMiddle)`
  ${pageLayout}
  padding: 180px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled(FlexColumn)`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactUsPage = () => {
  return (
    <Container>
      <Header />
      <HeroSectionWrapper gap="120">
        <FlexColumn style={{ flex: 1.5 }}>
          <TextWrapper>
            <Subtitle>Contact Us</Subtitle>
            <SectionTitle isWhite>
              Elevate Your Healthcare System to the{' '}
              <ColoredText color={'#A5A8F3'} style={{ display: 'inline' }}>
                Next Level
              </ColoredText>
            </SectionTitle>
          </TextWrapper>
          <DescriptionText IsWhite>
            Empower your workers and clients with next level healthcare
            standards
          </DescriptionText>
        </FlexColumn>
        <FlexColumn style={{ flex: 1, width: '100%' }}>
          <ContactForm />
        </FlexColumn>
      </HeroSectionWrapper>
    </Container>
  );
};

export default ContactUsPage;
