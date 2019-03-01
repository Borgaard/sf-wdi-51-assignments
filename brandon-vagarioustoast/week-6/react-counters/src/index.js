import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = {
  counters: 0
};

ReactDOM.render(<App data={data.counters} />, document.getElementById("root"));
