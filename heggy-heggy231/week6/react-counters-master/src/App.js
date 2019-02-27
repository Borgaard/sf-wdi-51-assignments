import React, { Component } from "react";
import Header from "./Header";
// import CounterList from "./CounterList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* index.js data.counter =5 is coming here */}
        <h4>{this.props.data.counters}</h4>
        {/* <CounterList counters={this.props.data.counters}/> */}
      </div>
    );
  }
}

export default App;
