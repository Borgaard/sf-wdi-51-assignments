import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  // Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    query: '',
  }

  axios.get('url')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

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