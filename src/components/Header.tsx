import styled from "styled-components";
import { Button } from "~/shared/Button";
import { Divider } from "~/shared/Divider";
import { FlexRowSpaceBetween } from "~/shared/flexes";
import JanusLogo from "~/assets/janus.svg";
import { pageLayout } from "~/shared/LayoutStyle";
import { Link } from "react-router-dom";
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto auto auto;
  padding: 48px 0 0 0;
  ${pageLayout}
  img {
    width: 120px;
  }
  ${Divider} {
    margin-top: 48px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <FlexRowSpaceBetween style={{ width: "100%" }}>
        <Link to="/">
          <img src={JanusLogo} />
        </Link>
        <Button>Contact us</Button>
      </FlexRowSpaceBetween>
      <Divider />
    </StyledHeader>
  );
};

export default Header;
