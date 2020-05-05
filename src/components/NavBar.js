import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div style={navStyles}>
      <h1>Survey-tron5000</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
  );
}

export default NavBar;