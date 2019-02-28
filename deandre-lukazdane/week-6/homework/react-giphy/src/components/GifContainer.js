import React, { Component } from "react";
import Search from "./Search";
import GifCard from "./GifCard";

class GifContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <GifCard />
      </div>
    );
  }
}
export default GifContainer;
