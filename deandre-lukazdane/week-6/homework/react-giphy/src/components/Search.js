import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search here..." />
        <button>Submit</button>
      </form>
    );
  }
}

export default Search;
