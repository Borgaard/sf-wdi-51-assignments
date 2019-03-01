import React, { Component } from 'react';
// using Babel to compile code
import axios from 'axios';
// // In standard vanilla Javascript
// let axios = require('axios')

// step by step instruction: https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab
class Search extends Component {
  // Search component's initial state. It should have a query value that corresponds to a search term.

  state = {
    query: '',
  }

  // function that is triggered whenever the user submits the Search form
  
  searchingSubmit = (e) => {
    e.preventDefault();
    alert('searched!!');
    // Update submit function so that it now logs the query value in state.
    console.log(this.state.query);

    // here I am only reading the state! no need to save state in here!!
  }
  // Define a function that updates your query value in state whenever a change is made to the input field. You can do this using an onInput function on your text box, or by using ref.
  userInput = (e) => {
    console.log(e);
    // debugger;
    // e.target.value fetch the value of user search term!
    let query = e.target.value;

    // save the change to state and query gets updated on top 
    this.setState({
      query
    });
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
        <form onSubmit={this.searchingSubmit}>
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