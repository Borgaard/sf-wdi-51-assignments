import React from "react";
import SearchContainer from "./Search";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Giphy Search</h1>
        <SearchContainer />
      </div>
    );
  }
}
