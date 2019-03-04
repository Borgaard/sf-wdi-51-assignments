import React, { Component } from 'react';
import Search from './Search';
// since SearchContainer is parent it needs to import kids results
//  . means current directory's root
import Result from './Results';
// import axios
import axios from 'axios';

// Move all of the business logic related to state for the search into the SearchContainer component. The SearchContainer component should still render the Search component, with any necessary properties
// after moving this logic make sure to update
//  the parent which is Home.js with SearchContainer.js
class SearchContainer extends Component {
  // Define your Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    // query value that corresponds to a search term
    query: '',
    // result is what we get from giphy api call
    //  structure looks like this data: [ {}, {}, {}]
    results: { data: [] },
  };

  // function that is triggered whenever the user submits the Search form
  onSubmitSearching = (e) => {
    e.preventDefault();
    // alert('searched!!');
    // Update submit function so that it now logs the query value in state.
    console.log('user search input= ', this.state.query); // if user input hello as search => in console I see hello
    // here I am only reading the state! no need to save state in here!!
    // url is the same from giphy https://developers.giphy.com/docs/Javascript (View the GIPHY Javascript SDK)
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
  
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        // use my own api key
          api_key:'USeXS2PI5TP0Fvdy2AnCaSsT7HuzSTcL',
      // this.state.query is user input
          q:this.state.query,
          limit: 15
      }
    })  // next is promise once we got the photos res is data obj with { data : [ {}, {}, {} ]} which included giphy url
    .then((res) => {
      debugger;
      this.setState({
        results: res.data
      });
    })
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
        <Result
        giphyimages = {  }
        />
      </div>
    );
  }
}

export default SearchContainer;