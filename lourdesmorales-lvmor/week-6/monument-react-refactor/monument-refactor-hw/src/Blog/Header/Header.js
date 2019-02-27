import React, { Component } from "react";
import "./Header.css";

class header extends Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1>
            <a href="http://localhost:3000/">Monument</a>
          </h1>
        </div>
      </header>
    );
  }
}

export default header;
