import React, { Component } from 'react';
import './App.css';

 class Search extends Component {
  render() {
    return (
      <div className="form">
        <form action="/" method="get" id="form1">
          <input className="input" type="text" name="searchBox" placeholder="It's giphy time!" />
        </form>
        <button className="submit" type="submit" value="Submit">Submit</button>
      </div>
    )
  }
}
export default Search