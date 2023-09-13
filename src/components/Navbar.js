import React, { useState, useEffect } from 'react';


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
  const [toggleActive, setToggleActive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleActive(false); // Close Navbar on larger screens
      } else {
        setToggleActive(true)
      }
    };

    // Add an event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function toggle() {
    if (toggleActive) {
    setIsOpen(!isOpen)
    }
  };
  return (
    <Navbar   expand="md" className="my-navbar fixed-top">
      <NavbarBrand className="my-logo" to="/">
        <img src={LogoSVG} alt="Logo"/> 
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto my-NavItemContainer"  navbar>
            <NavItem className='my-NavItem'>
              <NavLink onClick={toggle}>
                <Link to='/' className='text-no-decro'>
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='my-NavItem'>
              {/* <NavLink  as={Link} href="/MAE/about">
                About us
              </NavLink> */}
              <NavLink onClick={toggle} >
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
                  <NavLink onClick={toggle}>
                    <Link to='/meteringmodule' className='text-no-decro'>
                      Metering Module
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                  <Link to='/seperationmodule' className='text-no-decro'>
                    Seperation Module
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                  <Link to='/watertreatmentgmodule' className='text-no-decro'>
                  Water Treatment
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                  <Link to='/truckloading' className='text-no-decro'>
                  Truck Loading
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                  <Link to='/additiveblending' className='text-no-decro'>
                  Additive Blending
                  </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
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
                  <NavLink onClick={toggle}>
                    <Link to='/maintenance' className='text-no-decro'>
                      Maintenance
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                    <Link to='/sparepartsmanagement' className='text-no-decro'>
                      Spare Parts Management
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                    <Link to='/meteringcondition' className='text-no-decro'>
                      Metering Condition
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                    <Link to='/calibration' className='text-no-decro'>
                      Calibration
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={toggle}>
                    <Link to='/installation' className='text-no-decro'>
                      Installation
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className='my-NavItem'>
              <NavLink onClick={toggle}>
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
