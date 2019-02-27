import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';
import Counter from './Counter';

class App extends Component {
  state = {
    counters: 0,
  }
  

  increaseCounters = () => {
    // setting the variable Counter equal to the state.counters + 1
    let Counters = this.state.counters + 1;
    // updating the STATE inside the app component to equal the Counter variable
    this.setState({ counters:Counters })
  }

  decreaseCounters = () => {
    // setting the variable Counter equal to this.state.counters -1
    let Counters = this.state.counters - 1;
    // updating the STATE inside the app component to equal the Counter variable
    this.setState({ counters:Counters })
  }

  render() {
   // passing parameters from the app component to the HEADER COMPONENT AND THE COUNTERLIST COMPONENT
   // Definitions of these parameters inside the files
    return (
      <div className="App"> 
        <Header  countersCount={this.state.counters}
          increaseCounters={this.increaseCounters} 
          decreaseCounters={this.decreaseCounters} />
        <div className="container"> 
        <CounterList counters={this.state.counters} />
        </div>
      </div>
    );
  }
}
export default App;