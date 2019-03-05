import React, { Component } from "react";

//var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
// handleChange = () => {
//   console.log(this);
// };
//const Search = props => {
class Search extends Component {
  constructor() {
    super();
    this.state = { term: "" };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search here..."
          onChange={event => this.onInputChange(event.target.value)}
        />
        {/* <button type="submit">Submit</button> */}
      </div>
    );
  }
}

export default Search;
