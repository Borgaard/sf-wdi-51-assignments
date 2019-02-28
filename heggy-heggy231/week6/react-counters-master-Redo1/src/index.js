import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// hard code the data into app counters is 5
const data = {
  counters: 5
}

// pass data is just a variable (I can change it anything I want!) into App
//   remember wrap it again with one more {  }
//   this says I am writing in JS! { {counters: 5} }
ReactDOM.render(<App data = { {counters: 5} }/>, document.getElementById("root"));
