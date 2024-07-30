import styled from "styled-components";
import "./App.css";
import JanusLogo from "./assets/janus.svg";

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
const FlexColumn = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: auto;
  h1 {
    font-size: 64px;
    margin: 0;
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    width: 80%;
    text-align: center;
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
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100%);
  margin-bottom: auto;
  padding: 48px;
  img {
    width: 120px;
  }
`;
const Divider = styled.div`
  width: 100%;
  margin-top: 48px;
  height: 1px;
  opacity: 0.3;
  /* border-bottom: 4px solid transparent; */
  background-image: linear-gradient(
    to right,
    rgba(165, 168, 243, 0),
    rgba(165, 168, 243, 1) 33%,
    rgba(165, 168, 243, 0)
  );
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

function App() {
  return (
    <>
      <Container>
        <Header>
          <img src={JanusLogo} />
          <Divider />
        </Header>
        <FlexColumn>
          <h1>Good things are on the way</h1>
          <h3>
            Hey! Our site is undergoing a maintenance. please come back later.
            <br></br>
            Thank you for your patience
          </h3>
        </FlexColumn>
        <Circle />
      </Container>
    </>
  );
}

export default App;
