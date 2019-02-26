import React, { Component } from 'react';
import NavBar from '../NavBar';


class Header extends Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1><a href="index.html">Monument</a></h1>
        </div>
        <NavBar />
      </header>
    );
  };
};

export default Header;