import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection
} from '@nextui-org/dropdown';
import { useState } from 'react';
// import insurance from '~/assets/icons/insurances.svg';
import patients from '~/assets/icons/patients.svg';
import providers from '~/assets/icons/providers.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownTriggerElement = styled(DropdownTrigger)<{
  isOpen?: boolean;
  $isblack: boolean;
}>`
  color: ${({ $isblack }) => ($isblack ? '#292a3d' : '#f0f0f5')};
  padding: 4px 12px;
  border-radius: 4px;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background: #292a3d;
    color: #f0f0f5;
    transition: 0.1s;
  }
  /* &:active {
    background: #14151f;
    color: white;
  } */
  ${props =>
    props.isOpen &&
    `
    background: #292A3D;
  `}
`;

const NavigationIcon = styled.img<{ bgcolor: string }>`
  padding: 8px;
  border-radius: 8px;
  background: ${props => props.bgcolor};
`;

const DropdownItemStyled = styled(DropdownItem)`
  padding: 12px;
  & > span {
    font-weight: 500;
  }
`;

const DropdownMenuPopup = styled(DropdownMenu)`
  background: white;
  padding: 8px;
  color: black;
  transform: translate(160px, 0px);
  box-shadow: 0px 0px 4px 0px #d2d3f9;
  width: 415px;
  li > span:nth-child(1) {
    font-size: 12px;
    border-bottom: solid 1px #e0e1eb;
    padding: 0 0px 4px 10px;
    width: 100%;
    display: flex;
    flex: 1;
    color: #a3a4c2;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    &:focus-visible {
      outline: none;
    }
  }
  .title {
    font-weight: 700;
  }
  border-radius: 8px;
  & * > a {
    padding: 12px;
    color: #52537a;
    font-size: 14px;
    &:focus-visible {
      outline: none;
    }
    &[data-hover='true'] {
      background: #f0f0f5;
      border-radius: 4px;
    }
  }
`;

const DropdownHeaderSection = styled(DropdownSection)``;

const SolutionsDropdown = ({ isBlack }: { isBlack: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTriggerElement
        $isblack={isBlack}
        $isOpen={isOpen}
        onMouseEnter={() => {
          setIsOpen(prev => !prev);
        }}
      >
        Solutions
      </DropdownTriggerElement>
      <DropdownMenuPopup
        aria-label="Static Actions"
        onMouseLeave={() => {
          setIsOpen(prev => !prev);
        }}
      >
        <DropdownHeaderSection title={'Janus For'}>
          <DropdownItemStyled
            as={Link}
            to="/providers"
            key="providers"
            startContent={<NavigationIcon src={providers} bgcolor="#EEEFF7" />}
            description="Connect to payer directly, Access full patient histories and improve diagnosis accuracy."
            classNames={{
              title: 'title'
            }}
          >
            <span>Providers</span>
          </DropdownItemStyled>
          <DropdownItemStyled
            to="/patients"
            as={Link}
            key="patients"
            startContent={<NavigationIcon src={patients} bgcolor="#FFF2F4" />}
            description="Access, aggregate, and share all your medical records easily from your phone."
            classNames={{
              title: 'title'
            }}
          >
            <span>Patients</span>
          </DropdownItemStyled>
          {/* <DropdownItemStyled
            startContent={
              <NavigationIcon
                src={insurance}
                bgcolor="#EEF7FF"
                alt={`${insurance}`}
              />
            }
            description="Optimize care plans, direct connect to users."
            to="/insurance-companies"
            as={Link}
            key="insurance"
            classNames={{
              title: 'title'
            }}
          >
            <span>Insurance Companies</span>
          </DropdownItemStyled> */}
        </DropdownHeaderSection>
      </DropdownMenuPopup>
    </Dropdown>
  );
};

export default SolutionsDropdown;
