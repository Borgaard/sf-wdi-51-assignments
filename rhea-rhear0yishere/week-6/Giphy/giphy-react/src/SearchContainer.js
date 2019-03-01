import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';


class SearchContainer extends Component {
    state ={
        query: '',
        response: []
    }




  render() {
    return (
      <div >
          <Search/>
          <Results/>
      </div>
    );
  }
}

export default SearchContainer;
