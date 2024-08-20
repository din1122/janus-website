import styled from 'styled-components';
import Button from '~/shared/Button';
import { Divider } from '~/shared/Divider';
import { FlexRow, FlexRowSpaceBetween } from '~/shared/flexes';
import janusLogo from '~/assets/janus.svg';
import { pageLayout } from '~/shared/LayoutStyle';
import { Link, NavLink } from 'react-router-dom';
import useScrollToCTA from './utils/useScrollToCTA';
import SolutionsDropdown from './SolutionsDropdown';
import useIsTabletOrMobile from './utils/useIsTabletOrMobile';
import menu from '~/assets/icons/menu.svg';
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

  ${Divider} {
    margin-top: 48px;
  }
`;

const HeaderLinks = styled(NavLink)`
  color: #f0f0f5;
  padding: 4px 12px;
  border-radius: 4px;
  transition: 0.1s;
  &:hover {
    background: #292a3d;
    transition: 0.1s;
  }
  &:active {
    background: #14151f;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
    color: #292a3d;
    width: 100%;
  }
`;

const JanusLogo = styled.img`
  img {
    width: 120px;
  }
`;

const MenuButton = styled.img`
  width: 40px;
  padding: 4px;
  border-radius: 4px;
  &:hover {
    color: #f0f0f5;
    cursor: pointer;
  }
  &:active {
    background: #292a3d;
    color: white;
    > a {
    }
  }
`;

const MobileNavigationMenu = styled.div`
  position: absolute;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 90px;
  left: 0;
  width: 100%;
  padding: 12px;
`;
const Header = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  console.log(isOpenMenu);
  return (
    <>
      <StyledHeader>
        <FlexRowSpaceBetween style={{ width: '100%' }}>
          {!isTabletOrMobile ? (
            <>
              <FlexRow gap="24">
                <Link to="/" style={{ display: 'flex' }}>
                  <JanusLogo src={janusLogo} alt="janus-logo" />
                </Link>
                <SolutionsDropdown />
                <HeaderLinks to="/about-us">About us</HeaderLinks>
                <HeaderLinks to="/contact-us">Contact us</HeaderLinks>
              </FlexRow>
              <Button as="a" onClick={useScrollToCTA}>
                Contact us
              </Button>
            </>
          ) : (
            <>
              <Link to="/" style={{ display: 'flex' }}>
                <JanusLogo src={janusLogo} />
              </Link>
              <MenuButton
                src={menu}
                width="40%"
                onClick={() => setIsOpenMenu(prev => !prev)}
              />
            </>
          )}
        </FlexRowSpaceBetween>
        <Divider />
      </StyledHeader>
      {isOpenMenu && (
        <MobileNavigationMenu>
          <HeaderLinks
            to="/about-us"
            onClick={() => setIsOpenMenu(prev => !prev)}
          >
            About us
          </HeaderLinks>
          <HeaderLinks
            to="/contact-us"
            onClick={() => setIsOpenMenu(prev => !prev)}
          >
            Contact us
          </HeaderLinks>
        </MobileNavigationMenu>
      )}
    </>
  );
};

export default Header;
