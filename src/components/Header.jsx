import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Evergreen Logo" />
      </div>
      <div>
        <h1>Evergreen</h1>
        <p>Focus to help your plant grow!</p>
      </div>
    </header>
  );
};

export default Header;