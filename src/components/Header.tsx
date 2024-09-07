import styled, { css } from 'styled-components';
import Button from '~/shared/Button';
import { Divider } from '~/shared/Divider';
import { FlexRow, FlexRowSpaceBetween } from '~/shared/flexes';
// import janusLogo from '~/assets/janus.svg';

import { pageLayout } from '~/shared/LayoutStyle';
import { Link, NavLink } from 'react-router-dom';
import handleScrollToCTA from './utils/useScrollToCTA';
import SolutionsDropdown from './SolutionsDropdown';
import useIsTabletOrMobile from './utils/useIsTabletOrMobile';
// import menu from '~/assets/icons/menu.svg';
// import menu from '~/assets/icons/menu-dark.svg';
import { useEffect, useState } from 'react';
import JanusLogo from './JanusLogo.tsx/JanusLogo';

const StyledHeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 24px;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    top: 10px;
  }
`;

const StyledHeader = styled.div<{ $isStickey: boolean; $dark?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto auto auto;
  padding: 48px 0 0 0;
  position: relative;
  z-index: 5;
  transition: 0.3s all;
  border-radius: 32px;
  ${pageLayout}
  @media (max-width: 768px) {
    width: 82vw;
  }
  ${({ $isStickey }) =>
    $isStickey &&
    css`
      transition: 0.3s all;
      background: #fff;
      box-shadow: 0px 5.56px 25.021px 2.78px rgba(210, 211, 249, 0.44);
      padding: 32px;

      ${Divider} {
        opacity: 0;
        margin-top: 0;
      }
      ${HeaderLinks} {
        color: #292a3d;
      }

      @media (max-width: 768px) {
        width: 92vw;
        padding: 12px;
        border-radius: 8px;
      }
    `}
`;

const HeaderLinks = styled(NavLink)<{ $dark: boolean; $isStickey?: boolean }>`
  color: ${({ $dark }) => ($dark ? '#292a3d' : '#f0f0f5')};
  padding: 4px 12px;
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    background: #292a3d;
    color: #f0f0f5;
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    color: #292a3d;
    width: 100%;
  }
`;

const MenuButton = styled.div<{
  $isOpen?: boolean;
  $dark: boolean;
  $isStickey?: boolean;
}>`
  padding: 4px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #292a3d;
  }
  svg > g > path {
    stroke: ${({ $dark }) => ($dark ? '#292a3d' : '#f0f0f5')};
  }

  ${({ $isStickey }) =>
    $isStickey &&
    css`
      svg > g > path {
        stroke: #292a3d;
      }
    `}
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background: #292a3d;
      svg > g > path {
        stroke: #f0f0f5;
      }
    `}
`;

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clip-path="url(#clip0_833_30414)">
        <path
          d="M5.33203 8H26.6654"
          stroke="#3D3E5C"
          stroke-width="2.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33203 16H26.6654"
          stroke="#3D3E5C"
          stroke-width="2.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33203 24H26.6654"
          stroke="#3D3E5C"
          stroke-width="2.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_833_30414">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MobileNavigationMenu = styled.div<{ $isStickey?: boolean }>`
  position: fixed;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 110px;
  left: 0;
  width: 100%;
  padding: 12px;
  box-shadow: 0px 5.56px 25.021px 2.78px rgba(210, 211, 249, 0.44);
  z-index: 999;
  ${({ $isStickey }) =>
    $isStickey &&
    css`
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 8px;
      top: 85px;
      width: 90vw;
    `}
`;
const Header = ({ dark = true }: { dark?: boolean }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = ({ isCTA = false }: { isCTA?: boolean } = {}) => {
    setIsOpenMenu(prev => !prev);
    if (isCTA) {
      handleScrollToCTA();
    }
  };

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader $isStickey={isSticky} $dark={dark}>
          <FlexRowSpaceBetween style={{ width: '100%' }}>
            {!isTabletOrMobile ? (
              <>
                <FlexRow gap="24">
                  <Link
                    to="/"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <JanusLogo isblack={dark || isSticky} />
                  </Link>
                  <SolutionsDropdown isBlack={dark || isSticky} />
                  <HeaderLinks $dark={dark} to="/about-us">
                    About us
                  </HeaderLinks>
                  <HeaderLinks $dark={dark} to="/contact-us">
                    Contact us
                  </HeaderLinks>
                </FlexRow>
                <Button dark={dark} as="a" onClick={() => handleScrollToCTA}>
                  Request a Demo
                </Button>
              </>
            ) : (
              <>
                <Link to="/" style={{ display: 'flex' }}>
                  <JanusLogo isblack={dark || isSticky} />
                </Link>

                <MenuButton
                  $isOpen={isOpenMenu}
                  $dark={dark}
                  $isStickey={isSticky}
                  onClick={() => handleMenuClick()}
                >
                  <MenuIcon />
                </MenuButton>
              </>
            )}
          </FlexRowSpaceBetween>
        </StyledHeader>
        <Divider $isStickey={isSticky} />
      </StyledHeaderWrapper>
      {isOpenMenu && (
        <MobileNavigationMenu $isStickey={isSticky}>
          <HeaderLinks
            $dark={dark}
            to="/about-us"
            onClick={() => handleMenuClick}
          >
            About us
          </HeaderLinks>

          <HeaderLinks
            $dark={dark}
            to="/patients"
            onClick={() => handleMenuClick}
          >
            For Patients
          </HeaderLinks>
          <HeaderLinks
            $dark={dark}
            to="/providers"
            onClick={() => handleMenuClick}
          >
            For Providers
          </HeaderLinks>
          <Button
            dark
            as="a"
            onClick={() => handleMenuClick({ isCTA: true })}
            style={{ width: '100%', textAlign: 'center' }}
          >
            Request a Demo
          </Button>
        </MobileNavigationMenu>
      )}
    </>
  );
};

export default Header;
