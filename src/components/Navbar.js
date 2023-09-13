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
} from 'reactstrap';
import { Link } from "react-router-dom";
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
              <NavLink>
                <Link to='/' className='text-no-decro'>
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              {/* <NavLink  as={Link} href="/MAE/about">
                About us
              </NavLink> */}
              <NavLink >
                <Link to='/about' className='text-no-decro'>
                  About us
                </Link>
              </NavLink>

            </NavItem>
            <UncontrolledDropdown className='my-NavItem' nav inNavbar>
              <DropdownToggle nav caret>
                Prodcuts
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink >
                    <Link to='/meteringmodule' className='text-no-decro'>
                      Metering Module
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                  <Link to='/seperationmodule' className='text-no-decro'>
                    Seperation Module
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                  <Link to='/watertreatmentgmodule' className='text-no-decro'>
                  Water Treatment
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                  <Link to='/truckloading' className='text-no-decro'>
                  Truck Loading
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                  <Link to='/additiveblending' className='text-no-decro'>
                  Additive Blending
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                  <Link to='/onlinecalibration' className='text-no-decro'>
                  Online Calibration
                  </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className='my-NavItem' nav inNavbar>
              <DropdownToggle nav caret>
                Serevices
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink >
                    <Link to='/maintenance' className='text-no-decro'>
                      Maintenance
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                    <Link to='/sparepartsmanagement' className='text-no-decro'>
                      Spare Parts Management
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                    <Link to='/meteringcondition' className='text-no-decro'>
                      Metering Condition
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                    <Link to='/calibration' className='text-no-decro'>
                      Calibration
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink >
                    <Link to='/installation' className='text-no-decro'>
                      Installation
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className='my-NavItem'>
              <NavLink>
               <Link to='/contact' className='text-no-decro'>
                 Contact
                </Link>
                </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
