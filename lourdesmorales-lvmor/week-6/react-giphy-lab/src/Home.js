import React, { Component } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer";
// import HelloWorld from "./HelloWorld";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Giphy Search
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#search">Search</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
