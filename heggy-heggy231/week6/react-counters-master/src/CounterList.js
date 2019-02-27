import React, { Component } from "react";
import Counter from "./Counter";
// import App from "./App";

class ContainerList extends Component {
  render() {

    // let comments = this.state.commentList.map((comment, index) => (
    //   // Props are indivisidul we are mapping over creating an array
    //   // map returns a new array >> the reseult when you see it on the DOM
    //   // <Comment key="0" "message": "Some shaddy internet comment.">
    //   // <Comment key="1" "message": "Some shaddy internet comment.">
    //   <Comment message={comment} key={index}/>
    // ));


    let counters = [];
    // this.props.counters is from index.js data.counters =5  > App.js
    for( let index = 0; index < this.props.counters; index++ ) {
      // counters = [<Item />, <Item />, <Item />, ....];
      counters.push(<Counter />);
    }
    return <div className="Counter-row">{counters}</div>
  }
}

export default ContainerList;