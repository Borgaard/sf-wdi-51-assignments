import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";


class App extends Component {
  state = {
    mainCounter: 0
  }

  increaseCounter = () => {
    let newCount = this.state.mainCounter + 1;
    this.setState ({
      mainCounter:newCount
    })
  }

  decreaseCounter = () => {
    let newCount = this.state.mainCounter - 1;
    this.setState ({
      mainCounter:newCount
    })
  }

  render() {
    return (
      <div className="App">

        <Header />
        <h2>{this.state.mainCounter}</h2>
        <button className="appButton" onClick = {this.increaseCounter}>+</button>
        <button className="appButton" onClick = {this.decreaseCounter}>-</button>
        <CounterList  data = {this.state.mainCounter} />
        

      </div>
    );
  }
}

export default App;