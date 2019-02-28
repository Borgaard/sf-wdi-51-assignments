import React, { Component } from "react";

export class Search extends Component {
  state = {
    query: ""
  };

  search = e => {
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
        <form onSubmit={this.search} onInput={this.onInput}>
          <label>
            Search:
            <input type="text" />
          </label>
          <input type="submit" value="Go" />
        </form>
      </div>
    );
  }
}

export default Search;
