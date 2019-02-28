import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.searchedTerm} onInput={this.props.onInput}>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default Search;
