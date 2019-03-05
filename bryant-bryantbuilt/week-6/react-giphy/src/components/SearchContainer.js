import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import Giphy from '../giphy';
import axios from 'axios';


class SearchContainer extends Component {
    state = {
        searchResults: [],
        gifIndex: 0,
        query: null
    }

    searchQuery = (e) => {
        e.preventDefault();
        this.setState({query: e.target.value});
    }

    searchGifs = (e) => {
        e.preventDefault();
        console.log(`Searching gifs: ${this.state.query}`);
        console.log(this.state.searchResults);
        if (this.state.query != null) {
            axios.get(`${Giphy.GIPHY_URL}${this.state.query}&api_key=${Giphy.GIPHY_KEY}`)
            .then(response => {
                this.setState({
                searchResults: response.data.data
                })
            })
            .catch(error => console.log(error))
        }
    }

    render () {
        return (
            <div>
                <Search 
                query={this.state.query}
                searchGifs={this.searchGifs}
                searchQuery={this.searchQuery}
                />
                <Results 
                searchResults={this.state.searchResults}
                />
            </div>
        )
    }
}

export default SearchContainer