import React, { Component } from 'react';

class Search extends Component {


    render () {
        return (
            <div>
                <form onSubmit={this.props.searchGifs}>
                    <input type="text" name="query" onInput={this.props.searchQuery}/>
                    <button type="submit" name="searchSubmit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search