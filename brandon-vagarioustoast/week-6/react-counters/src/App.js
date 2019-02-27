import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    numberOfCounters: this.props.data
  };

  increaseCounters = () => {
    let counters = this.state.numberOfCounters + 1;
    this.setState({
      numberOfCounters: counters
    });
  };

  decreaseCounters = () => {
    let counters = this.state.numberOfCounters - 1;
    this.setState({
      numberOfCounters: counters
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          countOfCounters={this.state.numberOfCounters}
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        <CounterList counter={this.state.numberOfCounters} />
      </div>
    );
  }
}

export default App;
