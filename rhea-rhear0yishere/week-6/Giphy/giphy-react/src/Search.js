import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div >
        <form>
          <input type="text" placeholder="search" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Search;
