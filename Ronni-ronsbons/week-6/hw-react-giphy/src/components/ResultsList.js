import React, { Component } from 'react';
import Results from './Results.js';

class ResultsList extends Component {
  render() {
    let results = this.props.info.map( (result, index) => {
      return (
        <Results key={index} gif={result} />
      );
    });

    return (
      <div className="results-list">
        {/* <h3>(ResultsList)</h3> */}
        {results}
      </div>
    );
  }
}

export default ResultsList;
