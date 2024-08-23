import styled from 'styled-components';
import '~/App.css';
import Header from '~/components/Header';

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
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: auto;
  color: white;
  padding: 90px 0 250px 0;
  h1 {
    font-size: 64px;
    margin: 0;
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    width: 60%;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 80%;
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

const Circle = styled.div`
  background: #4b51e7;
  height: 300px;
  width: 700px;
  border-radius: 50%;
  z-index: 0;
  position: absolute;
  filter: blur(600px);
`;

function InProgressPage() {
  return (
    <>
      <Container>
        <Header />
        <TextWrapper>
          <h1>Good things are on the way</h1>
          <h3>
            Hey! Our site is undergoing a maintenance. please com back later.
            Thank you for your patience
          </h3>
        </TextWrapper>
        <Circle />
      </Container>
    </>
  );
}

export default InProgressPage;
