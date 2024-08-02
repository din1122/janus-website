import styled from "styled-components";
import { FlexColumn, FlexRowSpaceBetween } from "./flexes";
import negativeJanusLogo from "~/assets/logo-negative.svg";
import { Divider } from "./Divider";
import { pageLayout } from "./LayoutStyle";

const FooterContainer = styled.div`
  background: linear-gradient(180deg, #fff 33.33%, #e0e1eb 100%);
`;
const FooterWrapper = styled(FlexColumn)`
  ${pageLayout}
`;
const HyperLink = styled.a`
  color: #52537a;
  line-height: 175%;
  font-size: 14px;
`;

const FooterSectionTitle = styled.h5`
  color: #52537a;
  font-weight: 800;
`;

const DisclaimerText = styled.span`
  color: #52537a;
  font-size: 12px;
`;

const LinksSectionContainer = styled(FlexRowSpaceBetween)`
  align-items: start;
  padding: 62px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 48px;
  }
`;
const LinksContainer = styled(FlexColumn)`
  gap: 12px;
  align-content: start;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LinksSectionContainer>
          <LinksContainer>
            <img src={negativeJanusLogo} style={{ width: "115px" }} />
            <span style={{ color: "black" }}>Empowering HealthCare System</span>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Solutions</FooterSectionTitle>
            <HyperLink>For Medical Providers</HyperLink>
            <HyperLink>For Individuals</HyperLink>
            <HyperLink>For insurance companies</HyperLink>
            <HyperLink>Interoperability services</HyperLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>About</FooterSectionTitle>
            <HyperLink>About us</HyperLink>
            <HyperLink>Use cases</HyperLink>
            <HyperLink>Community</HyperLink>
            <HyperLink>Blog</HyperLink>
            <HyperLink>Media</HyperLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Support</FooterSectionTitle>
            <HyperLink>Contact us</HyperLink>
            <HyperLink>Help Center</HyperLink>
            <HyperLink>Resource Center</HyperLink>
            <HyperLink>API Docs</HyperLink>
            <HyperLink>FQA</HyperLink>
            <HyperLink>Feature Requests</HyperLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Policies</FooterSectionTitle>
            <HyperLink>Privacy Policy</HyperLink>
            <HyperLink>Terms of use</HyperLink>
            <HyperLink>Security</HyperLink>
            <HyperLink>Privacy Policy</HyperLink>
            <HyperLink>Policies</HyperLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Socials</FooterSectionTitle>
            <HyperLink>Youtube</HyperLink>
            <HyperLink>Facebook</HyperLink>
            <HyperLink>Twitter</HyperLink>
            <HyperLink>Linkedin</HyperLink>
            <HyperLink>Blog</HyperLink>
            <HyperLink>Github</HyperLink>
          </LinksContainer>
        </LinksSectionContainer>
        <FlexColumn style={{ padding: "0 0 18px 0", gap: "18px" }}>
          <Divider />
          <DisclaimerText>
            Copyright © 2024 Janus. All rights reserved.
          </DisclaimerText>
        </FlexColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
