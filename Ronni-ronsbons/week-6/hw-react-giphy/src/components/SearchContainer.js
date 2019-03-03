import React, { Component } from 'react';
import Search from './Search.js';
import ResultsList from './ResultsList.js';
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
    this.setState({
      query: event.target.value,
    });
    this.search();
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

  // only update component if new input value differs from current)
  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.state.searchResults.length === 0 && this.state.query === nextState.query) {
      return false;
    }
    return true;
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.query !== this.state.query) {
      this.search();
    };
  };

  render() {
    return (
      <div>
        <Search input={this.handleInput} submit={this.handleSubmit} placeholder={this.state.searchValue} />
        <ResultsList info={this.state.searchResults} />
      </div>
    )
  };
};

export default SearchContainer;
