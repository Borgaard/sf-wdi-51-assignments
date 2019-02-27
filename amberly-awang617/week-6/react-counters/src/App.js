import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList'

class App extends Component {
  state = {
    counters: 0
  }

  render() {
    return (
      <div className="App">
        <Header increaseCounter={this.increaseCounter} decreaseCounter = {this.decreaseCounter}/>
        <CounterList counters={this.state.counters} />
      </div>
    );
  }

  increaseCounter = () => {
    let counters = this.state.counters + 1
    this.setState({counters})
  }

  decreaseCounter = () => {
    let counters = this.state.counters
    if (counters > 0) {
      counters -= 1
    } else {
      counters = null
    }
    this.setState({counters})
  }
}

export default App;