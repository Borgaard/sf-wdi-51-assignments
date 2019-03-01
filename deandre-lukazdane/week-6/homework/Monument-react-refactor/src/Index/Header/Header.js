import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1>
            <a href="">Monument</a>
          </h1>
          <h2>A Lifestyle Magazine</h2>
        </div>
      </header>
    );
  }
}

export default Header;
