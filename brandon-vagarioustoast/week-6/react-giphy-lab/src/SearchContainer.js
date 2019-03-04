import React from "react";
import Search from "./Search";

export default class SearchContainer extends React.Component {
  state = {
    query: ""
  };

  submit = e => {};

  onInput = e => {
    let newSearch = e.target.value;
    this.setState({
      query: newSearch
    });
  };

  render() {
    return <Search onInput={this.onInput} />;
  }
}
