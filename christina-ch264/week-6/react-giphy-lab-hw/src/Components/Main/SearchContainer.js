import React, {Component} from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

class SearchContainer extends Component {

    state = {
        query: '',
        resultList: []
    }

// Pseudocode
// 1. Define elements in render() using values from state.
// 2. Capture changes of a form element using onChange() as they happen.
// 3. Update the internal state in event handler.
// 4. New values are saved in state and then the view is updated by a new render().

    giphySearch = () => {
        console.log('axios api looks for:', this.state.query);
        // use axios api
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=RHi6JOuPn9wR4pGJziqoZ3WE27wzW0pz`)
        .then((response) => {
            console.log(response.data.data);
            console.log("Axios then")
            // response.data.img
            this.setState({resultList: response.data.data})
            
        })
        .catch((error) => {
            console.log(error)
            console.log("Axios catch")
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query.length > 0) {
            console.log('yes');
            this.giphySearch();
        } else {
            console.log('no query term')
        }
        // return true;
    }

    handleChange = (e) => {
        console.log('search event, state changed!');
        this.setState({query: e.target.value})
    }


    render () {
        // map loop to create unique results
            let data = this.state.resultList;
        return (
                <div>
                    {/* handle search results */}
                    <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    {/* add prop result to instance Results */}
                    {data.map(result => <Results result={result}/>)}
                </div>
                
        )
    }
}

export default SearchContainer;