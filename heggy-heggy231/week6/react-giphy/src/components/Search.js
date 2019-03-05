import React, { Component } from 'react';

// step by step instruction: https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab
class Search extends Component {

  
  // axios.get('url')
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })

  render() {
    debugger;
    // simple form with a single input and submit button.
    //  inside of return always wrap in one element like div
    return(
      <div>
    {/* inside of form add event listener onSubmit and call searching function */}
        <form onSubmit={this.props.searchingSubmit}>
          <label>
            Search: 
            {/* `this` points to the current obj I am in; Search component 
          interesting read on this topic: https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
          */}
            <input onInput={this.props.userInput} type="text" placeholder="search any giphy" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Search;