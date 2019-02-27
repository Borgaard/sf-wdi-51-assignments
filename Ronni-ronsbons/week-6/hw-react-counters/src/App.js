import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList.js';


class App extends Component {
  // define number of counters in state, because we want it to change with the +/- buttons
  state = {
    counters: 5,
  };

  // setting up increase and decrease number of counter functions here to pass them as properties to Header to be used in event listener
  increaseCounters = (event) => {
    event.preventDefault();
    let increasedCounters = this.state.counters + 1;

    this.setState({
      counters: increasedCounters,
    });
  };

  decreaseCounters = (event) => {
    event.preventDefault();
    let decreasedCounters = this.state.counters - 1;

    this.setState({
      counters: decreasedCounters,
    });
  };

  render() {
    return (
      <div className="App">
        {/* passing functions in as properties so that state.counters can be accessed/changed from the Header component */}
        <Header increase={this.increaseCounters} decrease={this.decreaseCounters} />
        {/* <p>The number of counters is {this.state.counters}</p> */}
        {/* passing starting number of counters as a prop so that CounterList will display that many on the page upon rendering */}
        <CounterList counter={this.state.counters} />
      </div>
    );
  }
};

export default App;
