import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';


class App extends Component {

  state = {
    counters: 5
  }

  increaseCounters = () => {
    const counters = this.state.counters + 1;
    console.log("increasing click");
    this.setState ({
        counters
    });
  }

  decreaseCounters = () => {
    const counters = this.state.counters - 1;
    console.log("decreasing click");
    this.setState ({
        counters
    });
  }

  render() {
    return (
      <div className="App">
        {/* pass functions to header as props, this is inverse data flow */}
        <Header 
        countersState = {this.state.counters}
        increaseCounters = {this.increaseCounters}
        decreaseCounters = {this.decreaseCounters}
        />
        {/* <h4>{this.props.data.counters}</h4> */}
        {/* we pass the state as props to counterlist */}
        <CounterList 
        counter={this.state.counters} 
        />
      </div>
    );
  }
}

export default App;