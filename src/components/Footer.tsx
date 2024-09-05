import styled from 'styled-components';
import { FlexColumn, FlexRowSpaceBetween } from '../shared/flexes';
import negativeJanusLogo from '~/assets/logo-negative.svg';
import { Divider } from '../shared/Divider';
import { pageLayout } from '../shared/LayoutStyle';
import { Link } from 'react-router-dom';
import useIsTabletOrMobile from './utils/useIsTabletOrMobile';

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

const RouterLink = styled(Link)`
  color: #52537a;
  line-height: 175%;
  font-size: 14px;
`;

const Footer = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <FooterContainer>
      <FooterWrapper>
        <LinksSectionContainer>
          <LinksContainer>
            <Link to="/">
              <img src={negativeJanusLogo} style={{ width: '115px' }} />
            </Link>
            <span style={{ color: 'black' }}>
              Empowering HealthCare Systems
            </span>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Solutions</FooterSectionTitle>
            {!isTabletOrMobile && (
              <RouterLink to="/providers">For Medical Providers</RouterLink>
            )}
            <RouterLink to="/patients">For Patients</RouterLink>
            <RouterLink to="/in-progress">For insurance companies</RouterLink>
            <RouterLink to="/in-progress">Interoperability services</RouterLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Company</FooterSectionTitle>
            <RouterLink to="/about-us">About us</RouterLink>
            <RouterLink to="/in-progress">Use cases</RouterLink>
            <RouterLink to="/in-progress">Community</RouterLink>
            <RouterLink to="/in-progress">Blog</RouterLink>
            <RouterLink to="/in-progress">Media</RouterLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Support</FooterSectionTitle>
            <RouterLink to="/in-progress">Contact us</RouterLink>
            <RouterLink to="/in-progress">Help Center</RouterLink>
            <RouterLink to="/in-progress">Resource Center</RouterLink>
            <RouterLink to="/in-progress">API Docs</RouterLink>
            <RouterLink to="/in-progress">FQA</RouterLink>
            <RouterLink to="/in-progress">Feature Requests</RouterLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Policies</FooterSectionTitle>
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
            <HyperLink>
              <RouterLink to="/terms-of-use">Terms of Use</RouterLink>
            </HyperLink>
            <RouterLink to="/in-progress">Security</RouterLink>
            <RouterLink to="/in-progress">Policies</RouterLink>
          </LinksContainer>
          <LinksContainer>
            <FooterSectionTitle>Socials</FooterSectionTitle>
            <HyperLink
              target="_blank"
              href="https://www.youtube.com/@JanusHealth/featured"
            >
              Youtube
            </HyperLink>
            <HyperLink
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564272953399"
            >
              Facebook
            </HyperLink>
            <HyperLink target="_blank" href="https://x.com/janus_health">
              Twitter
            </HyperLink>
            <HyperLink
              target="_blank"
              href="https://www.linkedin.com/company/janus-healthcare"
            >
              Linkedin
            </HyperLink>
            <RouterLink to="/in-progress">Blog</RouterLink>
            <RouterLink to="/in-progress">Github</RouterLink>
          </LinksContainer>
        </LinksSectionContainer>
        <FlexColumn style={{ padding: '0 0 18px 0', gap: '18px' }}>
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
