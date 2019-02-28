import React, { Component } from 'react';

class Search extends Component {
  // Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    query: '',
  }

  render() {
    return(
      <div>

      <input type="text" placeholder="search" />

      <input type="submit" value="Submit" />
      </div>
    );
  }

}

export default Search;