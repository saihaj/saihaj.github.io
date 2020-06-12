import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'

const TopNavbar = styled( Navbar )`
font-size: large;
a {
   color: black;
   text-decoration: none;
   background-color: transparent;
 }
 a:hover {
   color: #bbbbbb;
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
    <Brand><Link to="/">Saihajpreet Singh</Link></Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <NavItems className="ml-auto">
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
      </NavItems>
    </Navbar.Collapse>
  </TopNavbar>
)

export default Navigation
