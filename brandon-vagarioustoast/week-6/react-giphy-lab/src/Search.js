import React from "react";

export default class Search extends React.Component {
  state = {
    query: ""
  };

  onInput = e => {
    e.preventDefault();
    console.log("Searched");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onInput}>
          <input type="text" placeholder="Search Here" />
          <button>Go</button>
        </form>
      </div>
    );
  }
}
