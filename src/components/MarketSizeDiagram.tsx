import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Types
type SegmentKey = 'tam' | 'sam' | 'som';

interface MarketSegment {
  title: string;
  value: string;
  details: string[];
}

interface MarketData {
  [key: string]: MarketSegment;
}

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Circle = styled(motion.circle)<{ $type: SegmentKey; $isActive: boolean }>`
  cursor: pointer;
  fill: ${props =>
    props.$type === 'tam'
      ? props.$isActive
        ? '#EBF5FF'
        : '#F0F7FF'
      : props.$type === 'sam'
        ? props.$isActive
          ? '#60A5FA'
          : '#93C5FD'
        : props.$isActive
          ? '#1D4ED8'
          : '#2563EB'};
  transition: fill 0.3s ease;
`;

const Label = styled.text<{ $dark?: boolean }>`
  fill: ${props => (props.$dark ? '#1E3A8A' : '#ffffff')};
  font-size: 20px;
  font-weight: bold;
  text-anchor: middle;
  user-select: none;
  pointer-events: none;
`;

const Connector = styled.line`
  stroke: #270091;
  stroke-width: 2;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Dot = styled.circle`
  fill: #270091;
  @media (max-width: 768px) {
    display: none;
  }
`;

const DiagramWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 600px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;
//
// const Circle = styled(motion.circle)<{ $type: SegmentKey; $isActive: boolean }>`
//   cursor: pointer;
//   fill: ${props =>
//     props.$type === 'tam'
//       ? props.$isActive
//         ? '#d3e5f0'
//         : '#e8f4f8'
//       : props.$type === 'sam'
//         ? props.$isActive
//           ? '#93c2dd'
//           : '#b3d4e6'
//         : props.$isActive
//           ? '#3a7aa8'
//           : '#4a90c4'};
//   transition: fill 0.3s ease;
// `;
//
// const Label = styled.text<{ $dark?: boolean }>`
//   fill: ${props => (props.$dark ? '#1a365d' : '#ffffff')};
//   font-size: 16px;
//   font-weight: 600;
//   text-anchor: middle;
//   user-select: none;
// `;

const DetailsContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const SegmentDetails = styled.div<{ $type: SegmentKey; $isActive: boolean }>`
  padding: 24px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: ${props =>
    props.$type === 'tam'
      ? '#f8fafc'
      : props.$type === 'sam'
        ? '#f1f5f9'
        : '#e2e8f0'};
  transition: all 0.3s ease;

  ${props =>
    props.$isActive &&
    `
    border-color: ${
      props.$type === 'tam'
        ? '#93c5fd'
        : props.$type === 'sam'
          ? '#60a5fa'
          : '#3b82f6'
    };
    transform: translateX(-8px);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  `}
`;

const Title = styled.h3`
  font-size: 20px;
  color: #1a365d;
  margin: 0 0 8px 0;
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #2d4a8c;
  margin: 0 0 16px 0;
`;

// const DetailsList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;
//
// const DetailItem = styled.li`
//   color: #4a5568;
//   padding: 8px 0;
//   display: flex;
//   align-items: center;
//
//   &:before {
//     content: '•';
//     color: #2d4a8c;
//     margin-right: 8px;
//   }
// `;

// Market Data
const marketData: MarketData = {
  tam: {
    title: 'Total Addressable Market',
    value: '17.5B USD',
    details: [
      'Healthcare API market: 1.2B USD',
      'EMR/EHR: 11.3B USD',
      'Global interoperability-FHIR Server: 5B USD'
    ]
  },
  sam: {
    title: 'Serviceable Available Market',
    value: '100M USD',
    details: [
      'USA dental and aesthetic clinics EMR: 950M USD',
      'EU Romania dental and aesthetic clinics EMR: 48M USD',
      'Data interoperability (FHIR Server): Blue ocean'
    ]
  },
  som: {
    title: 'Serviceable Obtainable Market',
    value: '8M USD',
    details: [
      'Dental clinic EMR: 20M USD',
      'FHIR infrastructure development: 23M USD',
      'Aesthetic procedure: 700,000 Pt/year'
    ]
  }
};

const MarketSizeDiagram: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<SegmentKey | null>(null);

  return (
    <Container>
      <DiagramWrapper>
        <StyledSVG viewBox="0 0 500 500" aria-label="Market size diagram">
          {/* TAM Circle */}
          <Circle
            $type="tam"
            $isActive={activeSegment === 'tam'}
            cx={250}
            cy={200}
            r={180}
            onMouseEnter={() => setActiveSegment('tam')}
            onMouseLeave={() => setActiveSegment(null)}
          />

          {/* SAM Circle */}
          <Circle
            $type="sam"
            $isActive={activeSegment === 'sam'}
            cx={250}
            cy={250}
            r={120}
            onMouseEnter={() => setActiveSegment('sam')}
            onMouseLeave={() => setActiveSegment(null)}
          />

          {/* SOM Circle */}
          <Circle
            $type="som"
            $isActive={activeSegment === 'som'}
            cx={250}
            cy={300}
            r={60}
            onMouseEnter={() => setActiveSegment('som')}
            onMouseLeave={() => setActiveSegment(null)}
          />

          {/* Labels */}
          <Label x={250} y={80} $dark>
            TAM
          </Label>
          <Label x={250} y={200}>
            SAM
          </Label>
          <Label x={250} y={310}>
            SOM
          </Label>

          {/* Connectors and Dots */}
          {/* TAM connector */}
          <Dot cx={350} cy={100} r={4} />
          <Connector x1={350} y1={100} x2={850} y2={100} />

          {/* SAM connector */}
          <Dot cx={350} cy={220} r={4} />
          <Connector x1={350} y1={220} x2={850} y2={220} />

          {/* SOM connector */}
          <Dot cx={350} cy={300} r={4} />
          <Connector x1={350} y1={300} x2={850} y2={300} />
        </StyledSVG>
      </DiagramWrapper>

      <DetailsContainer>
        {Object.entries(marketData).map(([key, data]) => (
          <SegmentDetails
            key={key}
            $type={key as SegmentKey}
            $isActive={activeSegment === key}
          >
            <Title>{data.title}</Title>
            <Value>{data.value}</Value>
            {/* <DetailsList>
              {data.details.map((detail, index) => (
                <DetailItem key={index}>{detail}</DetailItem>
              ))}
            </DetailsList> */}
          </SegmentDetails>
        ))}
      </DetailsContainer>
    </Container>
  );
};

export default MarketSizeDiagram;
