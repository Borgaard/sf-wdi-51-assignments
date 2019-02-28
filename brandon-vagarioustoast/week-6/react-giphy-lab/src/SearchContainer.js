import React, { Component } from "react";
import Search from "./Search";

export class SearchContainer extends Component {
  state = {
    query: ""
  };

  searchedTerm = e => {
    e.preventDefault();
    console.log(`Searched ${this.state.query}`);
  };

  onInput = e => {
    this.setState({
      query: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Search searchedTerm={this.searchedTerm} onInput={this.onInput} />
      </div>
    );
  }
}

export default SearchContainer;
