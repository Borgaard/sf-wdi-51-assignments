// searchContainer holds all the logic
import React, { Component } from 'react';
import Search from './Search';
// using Babel to compile code
import axios from 'axios';
// // In standard vanilla Javascript
// let axios = require('axios')

// step by step instruction: https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab

class React extends Component {
  // Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    query: '',
  }
  // Define a function that updates your query value in state whenever a change is made to the input field. You can do this using an onInput function on your text box, or by using ref.
  userInput = (e) => {
    console.log(e);
    // debugger;
    // e.target.value fetch the value of user search term!
    // let query = e.target.value;

    // save the change to state and query gets updated on top 
    this.setState({
      // user input event target prop .val
      query: e.target.value
    });
  }
  // function that is triggered whenever the user submits the Search form
  searchingSubmit = (e) => {
    e.preventDefault();
    alert('searched!!');
    // Update submit function so that it now logs the query value in state.
    console.log(this.state.query)
    // here I am only reading the state! no need to save state in here!!
  }
  render() {
    return (
      <div>
        <Search
          searchingSubmit = {this.searchingSubmit}
          userInput = {this.userInput}
        />
        {/* how does search know I want this userInput to go to input element in search.js? */}
      </div>
    )
  }
}

export default SearchContainer;