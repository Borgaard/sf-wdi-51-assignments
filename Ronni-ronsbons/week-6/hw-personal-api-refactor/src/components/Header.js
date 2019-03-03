import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/api"}>API Documentation</Link></li>
          <li><Link to={"/profile"}>My Profile</Link></li>
          <li><Link to={"/destinations"}>Places I've Been</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;