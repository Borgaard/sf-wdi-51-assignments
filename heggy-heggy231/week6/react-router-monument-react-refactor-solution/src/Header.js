import React, { Component } from 'react';
import './App.css';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1>
            <a href="index.html">Monument</a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
