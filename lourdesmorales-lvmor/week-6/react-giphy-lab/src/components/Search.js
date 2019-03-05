import React from "react";

const Search = props => {
  return (
    <form >
      <input
        onChange={props.handleInput}
        style={{ margin: "1em auto", display: "block" }}
        type="text"
        name="term"
      />{" "}
      &nbsp;
      <button
        onClick={props.getInput}
        style={{ margin: "auto", display: "block" }}
        type="button"
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
