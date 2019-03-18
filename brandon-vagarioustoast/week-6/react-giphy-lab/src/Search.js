import React from "react";

const search = props => {
  return (
    <div>
      <input type="text" placeholder="Search Here" onChange={props.onInput} />
      <button>Go</button>
    </div>
  );
};

export default search;
