import styled, { keyframes } from "styled-components";
import "./App.css";
import JanusLogo from "./assets/janus.svg";
import appImage from "./assets/app.png";
import HL7FHIR from "./assets/logos/HL7FHIR.png";
import indy from "./assets/logos/indy.png";
import linux from "./assets/logos/linux.svg";
import fhirDiagram from "./assets/fhir-diagram.png";
import medicalHistory from "./assets/image-test.png";
// import historyImage from "./assets/app2.png";
// import humanImageLeft from "./assets/humans-image-left.png";
// import humanImageRight from "./assets/human-image-right.png";
// import accessible from "./assets/badges/accessible.png";
// import secured from "./assets/badges/secured.png";
// import userCentric from "./assets/badges/user-centric.png";
// import worldwide from "./assets/badges/worldwide.png";
// import medications from "./assets/medications.png";

import { IconRosetteDiscountCheck } from "@tabler/icons-react";
import { Flex, FlexCenter, FlexColumn, FlexRow } from "./components/flexes";

const FlexSpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
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
const HeroContainer = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto auto auto;
  box-sizing: border-box;
  padding: 0 15vh;
  height: 100vh;
`;
const SpecialText = styled.h1`
  background: linear-gradient(90deg, #a5a8f3 -12.89%, #14151f 102.94%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const DescriptionWrapper = styled.div`
  width: 70%;
`;

const LeftTextWrapper = styled(FlexColumn)`
  gap: 16px;
`;
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const InterLeftSection = styled(FlexColumn)`
  flex: 1;
`;
const InterRightSection = styled(Flex)`
  flex: 0.5;
  width: 40%;
`;

const InterSection = styled(FlexColumn)`
  /* align-items: center; */
  /* box-sizing: border-box; */
  /* width: 100%; */
  padding: 0 15vh 15vh 15vh;
  gap: 80px;
  & div > img {
    width: 805px;
    transform: translateX(-60px);
  }
`;
const InterTextSection = styled(FlexRow)`
  justify-content: space-between;
  /* padding: 0 15vh; */
`;

const Subtitle = styled.h3`
  font-size: 14px;
  color: #787ced;
`;
const DescriptionText = styled.p<{ IsWhite?: boolean }>`
  color: #14151f;
  font-size: 18px;
  line-height: 200%;
  ${({ IsWhite }) => IsWhite && "color: #d1d2e0;"}
`;
const SectionTitle = styled.h2<{ isWhite?: boolean }>`
  color: #14151f;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.72px;
  ${({ isWhite }) => isWhite && "color: #fff;"}
`;
const SectionTitleWrapper = styled(FlexColumn)`
  gap: 2px;
`;
const FloatingCard = styled.div`
  padding: 24px;
  width: 280px;
  border-radius: 8px;
  background: rgba(41, 42, 61, 0.29);
  backdrop-filter: blur(8px);
  display: flex;
  gap: 8px;
  position: absolute;
  z-index: 8;
  bottom: 100px;
  left: 0;
  animation: ${float} 4s ease-in-out infinite;
`;
const VisualContainer = styled(FlexCenter)``;
const LeftImage = styled.img``;
const RightImage = styled.img``;
const WorldWideImage = styled.img``;
const AccessibleImage = styled.img``;
const SecuredImage = styled.img``;
const UserCentric = styled.img``;
const MedicationsImage = styled.img``;
const ForIndividualsContainer = styled(FlexColumn)`
  align-items: center;
  padding: 120px 0;
  gap: 12px;
  ${VisualContainer} {
    position: relative;
    padding: 48px 0;
    /* width: 40vw; */
    ${LeftImage},${RightImage},${MedicationsImage},${UserCentric},${SecuredImage},${AccessibleImage},${WorldWideImage} {
      position: absolute;
    }
    ${UserCentric},${SecuredImage},${AccessibleImage},${WorldWideImage} {
      width: 13%;
    }

    // right side
    ${RightImage} {
      right: -350px;
      top: 30%;
      bottom: 50%;
      width: 50%;
    }
    ${MedicationsImage} {
      right: -350px;
      bottom: 15%;
      width: 350px;
    }
    ${UserCentric} {
      right: -250px;
      top: 260px;
    }
    ${SecuredImage} {
      right: -60px;
      top: 100px;
    }
    // left side
    ${LeftImage} {
      left: -350px;
      top: 160px;
      width: 50%;
    }
    ${AccessibleImage} {
      left: -200px;
      top: 90px;
    }
    ${WorldWideImage} {
      left: -20px;
      bottom: 200px;
    }
  }
`;
const FhirCircle = styled.div``;

const FHIRDiagram = styled(FlexColumn)`
  position: relative;
  padding: 10vh 0;
  align-items: center;
  & > ${FhirCircle} {
    background: #4b51e7;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    z-index: 0;
    right: 45%;
    top: 50%;
    position: absolute;
    filter: blur(200px);
  }
  & > img {
    z-index: 1;
  }
`;

const CardTexts = styled(FlexColumn)`
  gap: 8px;
  span {
    font-size: 12px;
    color: #a5a8f3;
  }
  p {
    color: #f9f9fb;
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
  }
`;

const LeftSideWrapper = styled(FlexColumn)`
  align-items: left;
  gap: 32px;
  h1 {
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    line-height: normal;
    letter-spacing: -1.28px;
  }

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      font-size: 36px;
      line-height: 1;
      text-align: center;
    }
    h3 {
      font-size: 16px;
      width: 90%;
    }
  }
`;
const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledAppImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  z-index: 1;

  @media (min-width: 1200px) {
    width: 80%;
  }

  @media (min-width: 1600px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 12px 32px;
  background: white;
  color: black;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  border-radius: 8px;
  height: fit-content;
  width: fit-content;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto auto auto;
  padding: 48px 80px 0 80px;
  img {
    width: 120px;
  }
`;
const Divider = styled.div`
  width: 100%;
  margin-top: 48px;
  height: 1px;
  opacity: 0.3;
  background-image: linear-gradient(
    to right,
    rgba(165, 168, 243, 0),
    rgba(165, 168, 243, 1) 33%,
    rgba(165, 168, 243, 0)
  );
`;
const Circle = styled.div`
  background: #4b51e7;
  height: 50%;
  width: 200px;
  border-radius: 50%;
  z-index: -5;
  right: -50px;
  position: absolute;
  filter: blur(200px);
`;

function App() {
  return (
    <>
      <Container>
        <Header>
          <FlexSpaceBetween>
            <img src={JanusLogo} />
            <span>another Element</span>
          </FlexSpaceBetween>
          <Divider />
        </Header>
        <HeroContainer>
          <LeftSideWrapper>
            <LeftTextWrapper>
              <h1>
                <SpecialText>Empowering</SpecialText> Healthcare
              </h1>
              <DescriptionWrapper>
                <DescriptionText IsWhite>
                  Enabling seamless access to Complete Patient History for
                  individuals. Optimizing cost for payers, and Interoperability
                  development for Healthcare Providers.
                </DescriptionText>
              </DescriptionWrapper>
            </LeftTextWrapper>
            <Button>Get Janus</Button>
            <FlexRow style={{ gap: "16px", padding: "16px" }}>
              <img src={HL7FHIR} />
              <img src={indy} />
              <img src={linux} />
            </FlexRow>
          </LeftSideWrapper>
          <RightSideContainer>
            <FloatingCard>
              <IconRosetteDiscountCheck color="#32D583" size={48} />
              <CardTexts>
                <span>Medical History</span>
                <p>Permissions Granted</p>
              </CardTexts>
            </FloatingCard>
            <StyledAppImage src={appImage} />
          </RightSideContainer>
          <Circle />
        </HeroContainer>
        <InterSection>
          <InterTextSection>
            <InterLeftSection>
              <Subtitle>For Medical Organizations</Subtitle>
              <SectionTitle isWhite>
                Comply with interoperability regulation
              </SectionTitle>
            </InterLeftSection>
            <InterRightSection>
              <DescriptionText IsWhite style={{ width: "80%" }}>
                Get compliance with patient access final and Information
                Blocking rules. Janus is developing customized solutions for
                seamless integration with FHIR.
              </DescriptionText>
            </InterRightSection>
          </InterTextSection>
          <FHIRDiagram>
            <img src={fhirDiagram} />
            <FhirCircle />
          </FHIRDiagram>
        </InterSection>
      </Container>
      <ForIndividualsContainer>
        <SectionTitleWrapper style={{ alignItems: "center" }}>
          <Subtitle>For Individuals</Subtitle>
          <SectionTitle>Full medical history access</SectionTitle>
        </SectionTitleWrapper>
        <DescriptionWrapper style={{ textAlign: "center", width: "40%" }}>
          <DescriptionText>
            Janus will allow you to access, aggregate and share all your medical
            records easily from your phone. Allowing you to get the continuity
            of care you deserve from anywhere in the world avoiding the
            bureaucratic burden.
          </DescriptionText>
        </DescriptionWrapper>
        <VisualContainer>
          {/* <img src={historyImage} width={"60%"} /> */}
          {/* <LeftImage src={humanImageLeft} /> */}
          {/* left side  */}
          {/* <WorldWideImage src={worldwide} />
          <AccessibleImage src={accessible} /> */}
          {/* right side  */}
          {/* <RightImage src={humanImageRight} />
          <MedicationsImage src={medications} />
          <UserCentric src={userCentric} />
          <SecuredImage src={secured} /> */}
          <img src={medicalHistory} alt="" width={"80%"} />
        </VisualContainer>
      </ForIndividualsContainer>
    </>
  );
}

export default App;
