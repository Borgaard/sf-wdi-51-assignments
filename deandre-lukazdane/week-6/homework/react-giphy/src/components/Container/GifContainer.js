import React, { Component } from "react";
import GifCard from "../GifCard/GifCard";

class GifContainer extends Component {
  render() {
    return (
      <div>
        <p>This is where the card goes</p>
        <GifCard />
      </div>
    );
  }
}

export default GifContainer;
