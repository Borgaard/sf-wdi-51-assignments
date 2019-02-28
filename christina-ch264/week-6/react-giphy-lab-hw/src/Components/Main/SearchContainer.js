import React, {Component} from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

class SearchContainer extends Component {

    state = {
        query: '',
        resultList: []
    }

    // handleInput = (e) => {
    //     e.preventDefault();
    //     console.log("Submit")
    // }

// Pseudocode
// 1. Define elements in render() using values from state.
// 2. Capture changes of a form element using onChange() as they happen.
// 3. Update the internal state in event handler.
// 4. New values are saved in state and then the view is updated by a new render().



    giphySearch = () => {
        console.log('axios api goes here')
        // use axios api
        axios.get('https://api.giphy.com/v1/gifs/search?', {
            params: {
                api_key:"Gf2zWMUcvwe2Ot0FzFTFeG2BddE9xTrF",
                q: this.state.query
            }
        })
        .then((response) => {
            console.log(response.data)
            // response.data.img
        })
        .catch((error) => {
            console.log(error)
        })
    }


    hasSearchTerm = () => {
        if (this.state.query.length > 0) {
            console.log('yes');
            this.giphysearch();
        } 
        // return true;
    }

    handleChange = (e) => {
        console.log('search event, state changed!');
        this.setState({query: e.target.value})
    }

    render () {
        console.log(this.state);
        return (
                <div>
                    {/* handle search results */}
                    <Search handleChange={this.handleChange}/>
                </div>
                
        )
    }
}

export default SearchContainer;