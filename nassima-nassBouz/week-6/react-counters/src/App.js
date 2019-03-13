import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList"
//import Counter from "./Counter"
class App extends Component {
 
   state = {
      counters:0
    }
 
  increaseCounters = () =>{
    let counters =  this.state.counters++;
    this.setState({counters});
  }
  
  decreaseCounters = () =>{
   //check first if the number of counter is greater than 0 to substract
    let counters =  this.state.counters;
    if (counters > 0){
      counters--;
      this.setState({counters});
    } else {
      this.setState({counters});
    }
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