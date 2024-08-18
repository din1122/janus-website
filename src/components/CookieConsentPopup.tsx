import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCookieConsent = styled(CookieConsent)`
  background-color: #e8e9fc;
  border: solid 1px #e8e9fc;
` as typeof CookieConsent;

const CookieStyle = {
  backgroundColor: '#e8e9fc',
  border: 'solid 1px #e8e9fc',
  color: '#3D3E5C',
  borderRadius: '12px 12px 0 0',
  width: '95%',
  margin: '0 auto',
  left: 0,
  right: 0
};
const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #4b51e7;
`;

const CONSENT_BUTTON_STYLE = {
  padding: '12px 32px',
  background: 'white',
  color: 'black',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  userSelect: 'none',
  borderRadius: '8px',
  height: 'fit-content',
  width: 'fit-content',
  transition: 'all 0.1s ease-in-out',
  cursor: 'pointer'
} as const;

const CookieConsentPopup = () => {
  return (
    <StyledCookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={CookieStyle}
      buttonStyle={CONSENT_BUTTON_STYLE}
      expires={150}
    >
      <p>
        We use cookies to improve your experience on our site. By continuing to
        browse or accepting, you agree to our use of cookies. Learn more in our{' '}
        <StyledLink to="/privacy-policy"> Privacy Policy.</StyledLink>
      </p>
    </StyledCookieConsent>
  );
};
export default CookieConsentPopup;
