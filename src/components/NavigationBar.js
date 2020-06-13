import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'

const TopNavbar = styled( Navbar )`
font-size: large;
`

const NavLink = styled( Link )`
color: var(--dark);
a {
  color: var(--dark);
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: var(--dark);
}

`

const Brand = styled( Navbar.Brand )`
margin-left: 15px;
font-size: 1.2em;
@media(max-width: 576px) {
 margin-top: 5px;
 margin-left: auto;
 margin-right: auto;
}
padding: 5px 0 5px 0;
`

const NavItems = styled( Nav )`
margin-top: 5px;
padding-left: 10px;
`

const NavItem = styled( Nav.Link )`
margin-bottom: 5px;
padding: 2px;
`

const Navigation = () => (
  <TopNavbar expand="sm" sticky="bottom" bg="primary">
    <Brand><NavLink to="/">Saihajpreet Singh</NavLink></Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <NavItems className="ml-auto">
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
      </NavItems>
    </Navbar.Collapse>
  </TopNavbar>
)

export default Navigation
