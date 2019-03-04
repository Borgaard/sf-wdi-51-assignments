import React, { Component } from 'react';

class Search extends Component {
  // Define your Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    // query value that corresponds to a search term
    query: ''
  };

  // function that is triggered whenever the user submits the Search form
  onSubmitSearching = (e) => {
    e.preventDefault();
    alert('searched!!');
  }

  // Define a function that updates your query value in state whenever a change is made to the input field. You can do this using an onInput function on your text box, or by using ref.
  userInput = (e) => {
    console.log(e);
    debugger;
    // inside console: play around with e
    // e.target 
    // => <input type="text" placehoder="search any giphy">
    // e.target.value
    // => "d" // this is the input I put to kick off the debugger
  }

  render() {
    return (
      <div>
        {/* this points to search component, this.function name is the fuction I need to create!!!  indication that I need to create onSubmitSearching */}
        <form onSubmit={this.onSubmitSearching}>
          <label>
            Search: 
            {/* `this` points to the current obj I am in; Search component 
          interesting read on this topic: https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
          */}
            <input type="text" onInput={this.userInput} placeholder="search any giphy" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;

{/* <form method="POST" action="/page">
  <input type="text" name="pageName" />
  <input type="submit" value="Create" />
</form>
* method: The HTTP verb (method) that the browser uses to submit the form.
* action: The path of the HTTP request page that processes the information submitted via the form. */}