import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search Here" />
        <button>Go</button>
      </div>
    );
  }
}
