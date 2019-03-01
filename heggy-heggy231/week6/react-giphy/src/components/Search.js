import React, { Component } from 'react';
// using Babel to compile code
import axios from 'axios';
// // In standard vanilla Javascript
// let axios = require('axios')

class Search extends Component {
  // Search component's initial state. It should have a query value that corresponds to a search term.

  state = {
    query: '',
  }

  // function that is triggered whenever the user submits the Search form
  searching = (e) => {
    e.preventDefault();
    alert('searched!!');
    console.log("e", e);
  }
  // Define a function that updates your query value in state whenever a change is made to the input field. You can do this using an onInput function on your text box, or by using ref.
  userInput = (e) => {
    console.log(e);
    debugger;
    // this.state.query = 
  }
  
  // axios.get('url')
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })

  render() {
    // simple form with a single input and submit button.
    //  inside of return always wrap in one element like div
    return(
      <div>
    {/* inside of form add event listener onSubmit and call searching function */}
        <form onSubmit={this.searching}>
          <label>
            Search: 
            {/* `this` points to the current obj I am in; Search component 
          interesting read on this topic: https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
          */}
            <input onInput={this.userInput} type="text" placeholder="search any giphy" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Search;