import styled from 'styled-components';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { Circle } from '~/components/Visuals';
import Button from '~/shared/Button';
import { FlexColumn, FlexRow } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import { DescriptionText, HeaderTitle, Subtitle } from '~/shared/Texts';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin: 28px;
  border-radius: 24px;
  background-color: #030417;
  justify-content: center;
  height: calc(100vh - 140px);
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;
const ErrorPageContainer = styled(FlexRow)`
  ${pageLayout}
  justify-content: space-between;
  align-items: center;
  flex: 1;
  position: relative;
  overflow: hidden;
  z-index: 1;
  gap: 4px;
`;
const ErrorCircle = styled(Circle)`
  background: #4b51e7;
  height: 50%;
  width: 200px;
  border-radius: 50%;
  z-index: 0;
  bottom: -20vh;
  left: 50%;
  position: absolute;
  filter: blur(200px);
`;

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Header />
        <ErrorPageContainer>
          <FlexColumn gap="8">
            <Subtitle>404 Error</Subtitle>
            <HeaderTitle isWhite>Page not found.</HeaderTitle>
            <DescriptionText IsWhite>
              Sorry, the page you are looking for doesn’t exist or has been
              moved.
            </DescriptionText>
            <Button as={'a'} href="/">
              Back to Home Page
            </Button>
            <ErrorCircle />
          </FlexColumn>
        </ErrorPageContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ErrorPage;
