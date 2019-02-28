import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// hard code the data into app counters is 5
const data = {
  counters: 5
}

ReactDOM.render(<App />, document.getElementById("root"));
