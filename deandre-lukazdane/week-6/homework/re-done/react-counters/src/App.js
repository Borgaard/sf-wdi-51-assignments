import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h4>{this.props.data.counters}</h4>
      </div>
    );
  }
}

export default App;
