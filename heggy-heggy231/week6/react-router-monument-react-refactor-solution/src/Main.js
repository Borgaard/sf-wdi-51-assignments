import React, { Component } from 'react';
import './App.css';
import './style.css';

import Articles from './Articles';
import Aside from './Aside';

class Main extends Component {
  render() {
    return (
      <div className="wrap grid-wrapper">
        <Articles />
        <Aside />
      </div>
    );
  }
}

export default Main;
