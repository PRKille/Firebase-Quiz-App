import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  const links = {
    marginLeft: '10px',
    color: '#111111'
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
    <Navbar.Brand style={links}>Survey Queen</Navbar.Brand>
      <Navbar.Toggle area-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" style={links}>Home</Link>
          <Link to="/account" style={links}>Account</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;