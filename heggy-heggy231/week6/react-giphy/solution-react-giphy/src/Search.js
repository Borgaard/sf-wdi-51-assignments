import React, { Component } from 'react';

class Search extends Component {
  // state goe here
  state = {
    query: ''
  }
   submit () {
    // EventTarget set this to be a query
  }
  render() {
    return (
      // create a form
      <input type="text" placeholder= />
      // inside input yextbox  call on onInpu
      <form onSubmit={this.submit}></form>
      // define function
    )
  }
}
export default Search;