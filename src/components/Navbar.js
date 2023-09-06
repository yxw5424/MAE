import React, { useEffect, useState, useRef } from 'react';



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
              <NavLink href="/home/">Home</NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About us
              </NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Product
              </NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Service
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown className='my-NavItem' nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
