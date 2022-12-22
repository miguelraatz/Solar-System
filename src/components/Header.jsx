import React, { Component } from 'react';
import Logo from './images/logo.png';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="container-header">
        <img
          src={ Logo }
          alt="logo sistema solar"
          className="logo-header"
        />
      </header>
    );
  }
}

export default Header;
