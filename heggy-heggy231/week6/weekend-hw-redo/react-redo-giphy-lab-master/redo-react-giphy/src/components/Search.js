import React, { Component } from 'react';

// Search component so that it only renders a UI. It should use properties passed into the Search component.
class Search extends Component {

  render() {
    // now I fixed the flow Home.js knows SearchContainer is right below it.
    // view what this.props have
    console.log(this.props);
    // debugger;

    return (
      <div>
        {/* this points to search component, this.function name is the fuction I need to create!!!  indication that I need to create onSubmitSearching */}
        <form onSubmit={this.props.onSubmitSearching}>
          <label>
            Search: 
            {/* `this` points to the current obj I am in; Search component 
          interesting read on this topic: https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
          */}
            <input type="text" onInput={this.props.userInput} placeholder="search any giphy" />
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