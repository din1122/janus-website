import styled from 'styled-components';

import { FlexColumn, FlexRow } from '../shared/flexes';
import { Circle } from './Visuals';
import { ColoredText, DescriptionText } from '../shared/Texts';

import { pageLayout } from '../shared/LayoutStyle';
import ContactForm from './ContactForm';
import SectionTitle from '~/shared/Texts/SectionTitle';

const CTASectionContainer = styled(FlexRow)<{ withHeader?: boolean }>`
  ${pageLayout}
  overflow: hidden;
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

const CTASection = () => {
  return (
    <CTASectionWrapper id="CTA-section">
      <CTASectionContainer>
        <TextWrapper>
          <SectionTitle isWhite>
            Elevate Your Healthcare System to the{' '}
            <ColoredText color={'#A5A8F3'} style={{ display: 'inline' }}>
              Next Level
            </ColoredText>
          </SectionTitle>
          <DescriptionText IsWhite>
            Empower your workers and clients with next level healthcare
            standards
          </DescriptionText>
        </TextWrapper>
        <ContactForm />

        <CTACircle />
      </CTASectionContainer>
    </CTASectionWrapper>
  );
};

export default CTASection;
