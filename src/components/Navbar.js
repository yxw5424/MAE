import React, { useState } from 'react';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import '../custom.css';
import LogoSVG from "../logo_with_name.svg";

const AppNavbar =() => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar   expand="md" className="my-navbar fixed-top">
      <NavbarBrand className="my-logo" to="/">
        <img src={LogoSVG} alt="Logo"/> 
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto my-NavItemContainer"  navbar>
            <NavItem className='my-NavItem'>
              <NavLink href="/MAE">Home</NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              <NavLink  href="/about">
                About us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className='my-NavItem' nav inNavbar>
              <DropdownToggle nav caret>
                Prodcuts
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                   Metering Module
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Seperation Module
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Water Treatment
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Truck Loading
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Additive Blending
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Online Calibration
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className='my-NavItem' nav inNavbar>
              <DropdownToggle nav caret>
                Serevices
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                   Maintenance
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Spare Parts Management
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Metering Condition
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Calibration
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                  Installation
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className='my-NavItem'>
              <NavLink  href="/about">
                Contact
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
