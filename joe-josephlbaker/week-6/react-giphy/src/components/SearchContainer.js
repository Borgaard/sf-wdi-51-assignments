import React, { Component } from "react";

import Search from "./Search";
import Results from "./Results";

import { getGiphyUrl } from "../constants.js";
import axios from "axios";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      input: "",
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    axios
      .get(getGiphyUrl(this.state.input))
      .then(response =>
        this.setState({
          results: response.data
        })
      )
      .catch(error => console.log(error));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      input: this.state.value
    });

    event.preventDefault();
  }

  render() {
    console.log(this.state.results);
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <Results results={this.state.results} />
      </>
    );
  }
}

export default SearchContainer;
