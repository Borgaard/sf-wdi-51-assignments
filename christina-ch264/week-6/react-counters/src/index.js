import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// hard coded number of counters, pass as prop into App.js
const data = {
    counters: 2
};

ReactDOM.render(<App data={data}/>, document.getElementById("root"));
