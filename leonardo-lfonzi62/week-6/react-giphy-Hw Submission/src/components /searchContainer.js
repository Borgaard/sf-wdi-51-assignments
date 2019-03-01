import React, { Component } from 'react';
import Search from './search';
import Results from './results';
import axios from 'axios';

class SearchContainer extends Component {
    state = {
        Query:"",
        response:[]
    }
    
    render() {
        return(
            <Search handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            query={this.state.Query} />

        )
    }
}




export default SearchContainer;