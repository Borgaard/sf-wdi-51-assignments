import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p> { this.props.data.counters } </p>
      </div>
    );
  }
}

// remember to export making it public
export default App;