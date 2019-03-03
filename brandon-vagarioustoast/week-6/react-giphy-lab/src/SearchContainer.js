import React from "react";
import Search from "./Search";

export default class SearchContainer extends React.Component {
  state = {
    query: ""
  };

  submit = e => {
    e.preventDefault();
    console.log(`Searched ${this.state.query}`);
  };

  onInput = e => {
    let newSearch = e.target.value;
    this.setState({
      query: newSearch
    });
  };

  render() {
    return <Search submit={this.submit} onInput={this.onInput} />;
  }
}
