import {
  FlexColumn,
  FlexColumnCenter,
  FlexRow,
  FlexRowSpaceBetween
} from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import { DescriptionText, SectionTitle, Subtitle } from '~/shared/Texts';
import providersPage from '~/assets/patients-page/provider-page.png';
import medicalRecords from '~/assets/patients-page/medical-page.png';
import sharedRecords from '~/assets/patients-page/shared-records.png';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import useIsTabletOrMobile from './utils/useIsTabletOrMobile';

const SectionContainer = styled(FlexRow)<{ $padding?: string }>`
  ${pageLayout}
  padding: 100px 0;
  color: #3d3e5c;
  align-items: start;
  ${({ $padding }) => $padding && `padding: ${$padding};`}
`;

const WorksTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #292a3d;
`;

const Sections = [
  {
    step: 1,
    title: 'Connect your medical providers',
    description:
      'Securely link your healthcare providers to aggregate your medical records.',
    image: providersPage
  },
  {
    step: 2,
    title: 'Get Aggregated Profile',
    description: 'View Records in one place',
    image: medicalRecords
  },
  {
    step: 3,
    title: 'Share your records from anywhere to anyone.',
    description:
      'Instantly share your medical history with authorized parties.',
    image: sharedRecords
  }
];

const boxShadow = css`
  box-shadow: 0px 6.481px 29.166px 3.241px rgba(210, 211, 249, 0.44);
`;

const StepTextWrapper = styled(FlexColumn)<{ $active?: boolean }>`
  padding: 16px;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: 0.2s ease;
  opacity: 0.5;
  ${DescriptionText} {
    font-size: 14px;
    color: #3d3e5c;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    border: solid 2px #e0e1eb;
    border: ${({ $active }) => $active && 'solid 2px #4B51E7'};
    ${boxShadow}
  }
  border: ${({ $active }) => $active && 'solid 2px #4B51E7'};
  opacity: ${({ $active }) => $active && '1'};
`;

const SlideImage = styled.img<{ $show: boolean; $width?: string }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  width: ${({ $width }) => $width};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SlideText = styled(FlexColumn)<{ $active: boolean }>`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  @media (max-width: 768px) {
    height: 120px;
  }
`;

const MobileChipSlide = styled(FlexColumnCenter)<{ $acitve: boolean }>`
  background: #f0f0f5;
  color: #a3a4c2;
  flex: 1;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 8px;

  ${({ $acitve }) =>
    $acitve &&
    css`
      background: #fff;
      border: 1px solid #4b51e7;
      ${boxShadow}
    `}
`;

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const isTabletOrMobile = useIsTabletOrMobile();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev === Sections.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleActiveStep = ({ step }: { step: number }) => {
    setActiveStep(step);
  };

  return (
    <SectionContainer $padding="230px 0 120px 0">
      <FlexColumnCenter style={{ flex: 1 }}>
        <SectionTitle style={{ margin: 'auto', paddingBottom: '68px' }}>
          How does it work?
        </SectionTitle>
        {isTabletOrMobile ? (
          <FlexColumn gap="36">
            <FlexRow gap="12">
              {Sections.map((_, index) => (
                <MobileChipSlide
                  $acitve={activeStep === index}
                  onClick={() => handleActiveStep({ step: index })}
                >
                  Step {index + 1}
                </MobileChipSlide>
              ))}
            </FlexRow>

            {Sections.map(({ title, description }, index) => (
              <SlideText key={index} $active={index === activeStep}>
                <WorksTitle>{title}</WorksTitle>
                <DescriptionText>{description}</DescriptionText>
              </SlideText>
            ))}
            {Sections.map(({ image }, index) => (
              <SlideImage
                key={index}
                $show={activeStep === index}
                src={image}
                $width="60%"
                alt={`Step ${index}`}
              />
            ))}
          </FlexColumn>
        ) : (
          <FlexRowSpaceBetween style={{ width: '100%' }}>
            <FlexColumn>
              {Sections.map(({ image }, index) => (
                <SlideImage
                  key={index}
                  $show={activeStep === index}
                  src={image}
                  width={'60%'}
                  alt={`Step ${index}`}
                />
              ))}
            </FlexColumn>
            <FlexColumn gap="80">
              {Sections.map(({ title, description }, index) => (
                <StepTextWrapper
                  key={index}
                  style={{ flex: 1 }}
                  $active={activeStep === index}
                  onClick={() => handleActiveStep({ step: index })}
                >
                  <Subtitle>{`Step ${index + 1}`}</Subtitle>
                  <WorksTitle>{title}</WorksTitle>
                  <DescriptionText>{description}</DescriptionText>
                </StepTextWrapper>
              ))}
            </FlexColumn>
          </FlexRowSpaceBetween>
        )}
      </FlexColumnCenter>
    </SectionContainer>
  );
};

export default HowItWorksSection;
