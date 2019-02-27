import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList"
//import Counter from "./Counter"
class App extends Component {
  constructor(){
    super();
    this.state = {
      counters:0
    }
  }
  increaseCounters = () =>{
    let counters =  this.state.counters++;
    this.setState({counters});
  }
  
  decreaseCounters = () =>{
    let counters =  this.state.counters - 1;
    this.setState({counters});
  }

  render() {
    return (
      <div className="App">
        <Header
        CountersCount = {this.state.counters}
        increaseCounters={this.increaseCounters} 
        decreaseCounters={this.decreaseCounters} />

        <CounterList counter={this.state.counters}/>
      </div>
    );
  }
}

export default App;