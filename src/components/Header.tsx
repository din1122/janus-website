import styled from 'styled-components';
import Button from '~/shared/Button';
import { Divider } from '~/shared/Divider';
import { FlexRow, FlexRowSpaceBetween } from '~/shared/flexes';
import JanusLogo from '~/assets/janus.svg';
import { pageLayout } from '~/shared/LayoutStyle';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';
import { useState } from 'react';

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

const HeaderLinks = styled(Link)``;

const DropdownItemStyled = styled(DropdownItem)`
  padding: 12px;
  background: black;
`;

const DropdownMenuPopup = styled(DropdownMenu)`
  background: white;
  padding: 12px;
  color: black;
  transform: translate(67px, 0px);
  & > ul {
    display: flex;
    flex-direction: column;
    &:focus-visible {
      outline: none;
    }
  }
  border-radius: 8px;
  & * > a {
    padding: 12px;
    color: #52537a;
    font-size: 14px;
    &:focus-visible {
      outline: none;
    }
    &:hover {
      /* outline: 1px solid black; */
      background: #f0f0f5;
      border-radius: 4px;
    }
  }
`;

const Header = () => {
  // const [isOpen, setIsOpen] = useState(true);
  return (
    <StyledHeader>
      <FlexRowSpaceBetween style={{ width: '100%' }}>
        <FlexRow gap="24">
          <Link to="/">
            <img src={JanusLogo} />
          </Link>
          {/* <Dropdown isOpen={isOpen}>
            <DropdownTrigger>
              <span
                onMouseEnter={() => {
                  setIsOpen(prev => !prev);
                }}
              >
                Solutions
              </span>
            </DropdownTrigger>
            <DropdownMenuPopup
              aria-label="Static Actions"
              onMouseLeave={() => {
                setIsOpen(prev => !prev);
              }}
            >
              <DropdownItemStyled as={Link} to="/providers" key="providers">
                For Providers
              </DropdownItemStyled>
              <DropdownItemStyled to="/patients" as={Link} key="patients">
                For Patients
              </DropdownItemStyled>
              <DropdownItemStyled to="/insurance" as={Link} key="insurance">
                For Insurance companies
              </DropdownItemStyled>
            </DropdownMenuPopup>
          </Dropdown> */}

          {/* <HeaderLinks to="/about-us">
            <span>About us</span>
          </HeaderLinks> */}
        </FlexRow>

        <Button as="a" href="#CTA-section">
          Contact us
        </Button>
      </FlexRowSpaceBetween>
      <Divider />
    </StyledHeader>
  );
};

export default Header;
