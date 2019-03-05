import React, { Component } from 'react';
import '../css/landing.css';
import NavBar from '../NavBar';
import Main from './Main';


class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Main />
      </div>
    );
  };
};

export default Landing;