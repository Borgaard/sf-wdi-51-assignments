import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Results from "./Results";

class SearchContainer extends Component {
  state = {
    query: "",
    response: []
  };

  search = () => {
    axios
      .get("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "hbanKxYFVAFdYoBZPEKihtN7jfR8fjFS",
          q: this.state.query
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          response: res.data.data
        });
      })
      .catch(err => console.error(err));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      this.search();
    }
  };

  onInput = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    let results;
    this.state.response
      ? (results = this.state.response.map((result, index) => {
          return (
            <div>
              <Results result={result} key={index} />
            </div>
          );
        }))
      : null;
    return (
      <div>
        <Search onKeyUp={this.onInput} />
        {results}
      </div>
    );
  }
}

export default SearchContainer;
