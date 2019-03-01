import React, { Component } from 'react';

class Results extends Component {
    render () {
        if (this.props.searchResults != null) {
            let searchResults = this.props.searchResults;
            let gifs = searchResults.map((gif,index) => {
                return (
                <div className="gif-div">
                    <img src={gif.images.fixed_height.url} alt="gif" key={index} />
                </div>
                )
            });

            return (
                <div className="gif-container">
                    {gifs}
                </div>
            )
        }
            return (
                <div>

                </div>
            )
        
    }
}

export default Results