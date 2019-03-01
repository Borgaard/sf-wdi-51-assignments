import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Giphy"
          onKeyUp={this.props.onInput}
        />
      </div>
    );
  }
}

export default Search;
