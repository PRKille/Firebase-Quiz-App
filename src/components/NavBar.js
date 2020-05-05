import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  const links = {
    marginLeft: '10px'
  }
  return (
    <div style={navStyles}>
      <h1>Survey-tron5000</h1>
      <div>
        <Link to="/" style={links}>Home</Link>
        <Link to="/account" style={links}>Account</Link>
      </div>
    </div>
  );
}

export default NavBar;