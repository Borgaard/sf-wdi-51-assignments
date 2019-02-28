import React, { Component } from "react";
import Search from "./Search";
import GifCard from "./GifCard";
import axios from "axios";

class GifContainer extends Component {
  state = { query: "", response: [] };
  Search = () => {
    axios
      .get("http://api.giphy.com/v1/gifs/search?q=", {
        params: {
          api_key: "FzDLkPJEINv9h34poZDSRtX2O43mWcxg",
          q: this.state.query
        }
      })
      .then(res => {
        this.setState({
          response: res.data.data
        });
      });
  };
  //Keep in mind that case is sensitive
  render() {
    let gifcard;
    if (this.state.response) {
      gifcard = this.state.response.map(result => {
        return (
          <div>
            <GifCard gifcard={gifcard} key={gifcard.id} />
          </div>
        );
      });
    }
    return (
      <div>
        <Search />
        {gifcard}
        {/* <GifCard /> */}
      </div>
    );
  }
}
export default GifContainer;
