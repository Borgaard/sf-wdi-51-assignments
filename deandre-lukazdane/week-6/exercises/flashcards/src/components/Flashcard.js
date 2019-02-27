import React, { Component } from "react";
import Definition from "./Definition";

class Flashcard extends Component {
  render() {
    return (
      <div className="card">
        <h4>{this.props.detail.word}</h4>
      </div>
    );
  }
}

export default Flashcard;
