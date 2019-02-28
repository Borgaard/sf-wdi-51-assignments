import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';

class App extends Component {
  state = {
    counters: 0
  }

  increaseCounters = () => {
    let counters = this.state.counters + 1;
    this.setState({
      counters
    })
  }
  
  decreaseCounters = () => {
    let counters = this.state.counters -1;
    this.setState({
      counters
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <CounterList 
        counter={this.state.counters}
        increaseCounters={this.increaseCounters}
        decreaseCounters={this.decreaseCounters}
        />
      </div>
    );
  }
}

export default App;