import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";

class SearchContainer extends Component {
  state = {
    query: [],
    term: ""
  };

  getInput = () => {
    const input = this.state.term;
    console.log(input);
    axios
      .get(
        "http://api.giphy.com/v1/gifs/search?q=" +
          input +
          "&api_key=MY_KEY&limit=25"
      )
      .then(res => {
        console.log("LOOK", res.data.data);
        //const query = res.data.data;
        //console.log(query);

        let images = [];
        // this loop is used to get image **urls** from api call results
        for (let i = 0; i < res.data.data.length; i++) {
          images.push(res.data.data[i].images.original.url);
        }
        console.log(images);
        this.setState({ query: images });
      });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.getInput();
  }

  render() {
    if (this.state.term === "") {
      return (
        <div>
          <header>
            <br />
            <br />
            <br />
            <br />
            <h1>Giphy Search</h1>
            <h3>The true source for all things giphy</h3>
          </header>
          <Search handleInput={this.handleInput} getInput={this.getInput} />
          {this.state.query ? (
            <p>Number of querries: {this.state.query.length} </p>
          ) : (
            <p>please use the search bar</p>
          )}
          <h3>Search for your favorite gif!</h3>
        </div>
      );
    }
    return (
      <div>
        <header>
          <h1>Giphy Search</h1>
          <h3>The true source for all things giphy</h3>
        </header>
        <Search handleInput={this.handleInput} getInput={this.getInput} />
        {this.state.query ? (
          <p>Number of querries: {this.state.query.length} </p>
        ) : (
          <p>please use the search bar</p>
        )}
        <Results data={this.state.query} />
      </div>
    );
  }
}

export default SearchContainer;
