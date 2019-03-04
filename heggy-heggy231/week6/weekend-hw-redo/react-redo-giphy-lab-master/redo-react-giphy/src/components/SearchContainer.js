import React, { Component } from 'react';
import Search from './Search';

// Move all of the business logic related to state for the search into the SearchContainer component. The SearchContainer component should still render the Search component, with any necessary properties
// after moving this logic make sure to update
//  the parent which is Home.js with SearchContainer.js
class SearchContainer extends Component {
  // Define your Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    // query value that corresponds to a search term
    query: ''
  };

  // function that is triggered whenever the user submits the Search form
  onSubmitSearching = (e) => {
    e.preventDefault();
    // alert('searched!!');
    // Update submit function so that it now logs the query value in state.
    console.log('user search input= ', this.state.query); // if user input hello as search => in console I see hello
    // here I am only reading the state! no need to save state in here!!
  }

  // Define a function that updates your query value in state whenever a change is made to the input field. You can do this using an onInput function on your text box, or by using ref.
  userInput = (e) => {
    // console.log(e);
    // debugger;
    // inside console: play around with e
    // e.target 
    // => <input type="text" placehoder="search any giphy">
    // e.target.value
    // => "d" // this is the input I put to kick off the debugger
    var userQuery = e.target.value;
    // console.log('user searched term: ', userQuery);
    this.setState({
      query: userQuery,
    })
  }

  render() {
    return (
      <div>
        {/* passing SearchContainer functions into Search component 
        left side is variable I am passing 
        right side is function I created from this page
        onSubmitSearching = {this.onSubmitSearching}
        */}

        <Search
        onSubmitSearching = {this.onSubmitSearching}
        userInput = {this.userInput}
        />
      </div>
    );
  }
}

export default SearchContainer;