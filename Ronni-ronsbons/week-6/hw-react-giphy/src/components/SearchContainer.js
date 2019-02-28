import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import axios from 'axios';
import { giphyUrl } from '../constants.js';
import { giphyKey } from '../constants.js';

class SearchContainer extends Component {
  state = {
    query: '',
    searchValue: '',
    searchSubmitted: false,
    searchResults: [],
  };

  // on submit of search form
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('searched!');
    // [] how do i prevent search from submitting if it's blank?
    if(this.state.query.length === 0) {
      console.log('no search term');
    } else {
      this.setState({
        // [] how to reset search value to blank?
        searchValue: '',
        searchSubmitted: true,
      });
      // call search function axios call
      // [] is this the right place to call the function?
      this.search();
    };
    // [] how to clear the page when new search is submitted?
  };

  handleInput = (event) => {
    event.preventDefault();
    console.log('input changed');
    this.setState({
      query: event.target.value,
    });
    // console.log(this.state.query);
  };

  search = () => {
    axios.get(giphyUrl, {
      params: {
        api_key: giphyKey,
        q: this.state.query,
      }
    })
    .then( (response) => {
      // console.log(response);
      this.setState({
        searchResults: response.data.data,
      });
      // here searchResults has the data
      // console.log(this.state.searchResults);
    });
  };

  render() {
    let results = '';
    if(this.state.searchSubmitted === true && this.state.searchResults) {
      // [] this.state.searchResults is empty here, so why is this proceeding?
      // [] also how do i get the searchResults with the axios response?
      results = this.state.searchResults.map( (result, index) => {
        return (
          <div>
            <Results result={result} key={index}/>
          </div>
        );  
      })
    } else {
      return (
        <div>
          <Search input={this.handleInput} submit={this.handleSubmit} placeholder={this.state.searchValue} />
          {results}
        </div>
      )
    };
  };
}

export default SearchContainer;
