// Navbar.js
import React from 'react';
import styled from 'styled-components';
import logoImage from '../logo_with_name.svg';

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #fff; /* Change the background color to white */
  color: #333; /* Change the text color to a dark color */
  padding: 10px;
  font-family: 'Roboto', sans-serif;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;

    height: 5.375rem;
    padding: 1rem 4rem;
    flex-direction: row;
    align-items: center;
`;

const NavLogo = styled.div`
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-right: 3rem;

  a {
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
            <img src={logoImage} alt="Logo" />
        </NavLogo>
        <NavLinks>
          <NavLink>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
            <a href="/about">About us</a>
          </NavLink>
          <NavLink>
            <a href="/contact">Product</a>
          </NavLink>
          <NavLink>
            <a href="/contact">Services</a>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
