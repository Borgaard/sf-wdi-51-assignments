import React, { Component } from 'react';
import SearchContainer from './SearchContainer';

class Results extends Component {
  render() {
    // we wil 
    let resultImages = [];
    // this.props.appdata.appimage is 5
    // we know we are getting data: [ {}, {}, {}] from giphy response data
    for (let i = 0; i < this.props.giphyimages.data.length; i++) {
      // push the entire html I wrote inside of Counter.js
      // creating img for each giphy <img src="smiley.gif" alt="Smiley face" height="42" width="42">
      // Define a Results component that will take in a collection of gif objects and render each one's source url as well as a fixed height image. 
      // plan to fix the height inside of css
      // I need to grab this mydata.data[0].images.fixed_height_downsampled.url
      // remember this.props.giphyimages is coming from parent so when I pass from SearchContainer 
      //  name my variable property giphyimages inside of SearchContainer 
        // <Result
        // giphyimages = {}
        // />
      resultImages.push(
        // this.props.giphyimages is an obj from SearchContainer.js which is { data: [] }
        <img 
          src={ this.props.giphyimages.data[i].images.fixed_height.url } 
          className="giphy" />);
    }
    return (
      <div>
        {/* this is javascript resultImages so put inside of curly! */}
        { resultImages }
      </div>
    );
  }
}

export default Results;