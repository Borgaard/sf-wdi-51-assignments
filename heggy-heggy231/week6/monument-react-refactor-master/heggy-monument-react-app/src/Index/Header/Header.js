// import Compenent here! since I am creating component
import React, { Component } from 'react';
// get style for App Component
import './Header.css';

class Header extends Component {
  render () {
    return (
      <div>
        <header className="vertical-center">
          <div>
            <h1><a href="index.html">Monument</a></h1>
            <h2>A Lifestyle Magazine</h2>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;