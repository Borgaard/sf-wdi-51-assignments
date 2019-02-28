import React, { Component } from "react";

class Search extends Component {
  state = {
    query: "",
    newQueryValue: ""
  };

  inputQuery = event => {
    event.preventDefault();
    console.log("typing inside input");
    this.setState({query:event.target.value})
  };

  searchQuery = event => {
    event.preventDefault();
    console.log("searched!");
    this.query =event.nativeEvent.text;
  };

  render() {
    return (
      // <h1>hey</h1>
      <form>
        <input
          type="text"
          name="query"
          value={this.state.newQueryValue}
          onInput={this.inputQuery}
        />
        <button className={"button"} onClick={this.searchQuery}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
