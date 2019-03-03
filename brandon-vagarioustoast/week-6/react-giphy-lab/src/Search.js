import React from "react";

const Search = props => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input type="text" placeholder="Search Here" onChange={props.onInput} />
        <button>Go</button>
      </form>
    </div>
  );
};

export default Search;
