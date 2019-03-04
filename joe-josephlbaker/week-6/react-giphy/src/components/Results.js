import React, { Component } from "react";

class Results extends Component {
  render() {
    let resultsList = getResultsList(this.props.results);

    return (
      <>
        <h1>Results:</h1>
        <div id="results">{resultsList}</div>
      </>
    );
  }
}
//How dis work?
function getResultsList(results) {
  if (results && results.data) {
    results.data.map(result => {
      let img = document.createElement("IMG");
      let url = result.images.preview_gif.url;
      let resultsList = document.getElementById("results");
      img.setAttribute("src", url);
      console.log("Result", result);
      return resultsList.appendChild(img);
    });
  }
  return;
}

export default Results;
