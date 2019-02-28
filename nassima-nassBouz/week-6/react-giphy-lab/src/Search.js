import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
        // <form onSubmit={this.handleSubmit}>
         <form onSubmit={this.handleSubmit}>
            <label>
                Name:
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <input type="text"  />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default Search





