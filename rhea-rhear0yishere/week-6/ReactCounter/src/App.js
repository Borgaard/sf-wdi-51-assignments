import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CounterList/>

        
      </div>
    );
  }
}


export default App