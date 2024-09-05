import styled from 'styled-components';
import Button from '~/shared/Button';
import { Divider } from '~/shared/Divider';
import { FlexRow, FlexRowSpaceBetween } from '~/shared/flexes';
// import janusLogo from '~/assets/janus.svg';

import { pageLayout } from '~/shared/LayoutStyle';
import { Link, NavLink } from 'react-router-dom';
import useScrollToCTA from './utils/useScrollToCTA';
import SolutionsDropdown from './SolutionsDropdown';
import useIsTabletOrMobile from './utils/useIsTabletOrMobile';
import menu from '~/assets/icons/menu.svg';
import { useState } from 'react';
import JanusLogo from './JanusLogo.tsx/JanusLogo';

const StyledHeader = styled.div<{ $isblack?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto auto auto;
  padding: 48px 0 0 0;
  z-index: 5;
  ${pageLayout}
  ${Divider} {
    margin-top: 48px;
  }
`;

const HeaderLinks = styled(NavLink)<{ $isblack: boolean }>`
  color: ${({ $isblack }) => ($isblack ? '#292a3d' : '#f0f0f5')};
  padding: 4px 12px;
  border-radius: 4px;
  transition: 0.1s;
  &:hover {
    background: #292a3d;
    color: #f0f0f5;
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
    color: #292a3d;
    width: 100%;
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
  z-index: 99;
`;
const Header = ({ isBlack = false }: { isBlack?: boolean }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  console.log(isBlack);
  return (
    <>
      <StyledHeader $isblack={isBlack}>
        <FlexRowSpaceBetween style={{ width: '100%' }}>
          {!isTabletOrMobile ? (
            <>
              <FlexRow gap="24">
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                  <JanusLogo isblack={isBlack} />
                </Link>
                <SolutionsDropdown isBlack={isBlack} />
                <HeaderLinks $isblack={isBlack} to="/about-us">
                  About us
                </HeaderLinks>
                <HeaderLinks $isblack={isBlack} to="/contact-us">
                  Contact us
                </HeaderLinks>
              </FlexRow>
              <Button dark as="a" onClick={useScrollToCTA}>
                Contact us
              </Button>
            </>
          ) : (
            <>
              <Link to="/" style={{ display: 'flex' }}>
                {/* <JanusLogo src={janusLogo} /> */}
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
            $isblack={isBlack}
            to="/about-us"
            onClick={() => setIsOpenMenu(prev => !prev)}
          >
            About us
          </HeaderLinks>
          {/* <HeaderLinks
            $isblack={isBlack}
            to="/contact-us"
            onClick={() => setIsOpenMenu(prev => !prev)}
          >
            Contact us
          </HeaderLinks> */}
          <HeaderLinks
            $isblack={isBlack}
            to="/patients"
            onClick={() => setIsOpenMenu(prev => !prev)}
          >
            Patients
          </HeaderLinks>
        </MobileNavigationMenu>
      )}
    </>
  );
};

export default Header;
