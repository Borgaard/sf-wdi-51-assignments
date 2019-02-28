import React, {Component} from 'react';
import Search from './Search';

class SearchContainer extends Component {

    state = {
        query: ''
    }

    // handleInput = (e) => {
    //     e.preventDefault();
    //     console.log("Submit")
    // }

    handleChange = (e) => {
        console.log('searched!');
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