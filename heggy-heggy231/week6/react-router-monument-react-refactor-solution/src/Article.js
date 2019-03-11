import React, { Component } from 'react';
import './App.css';
import './style.css';

class Articles extends Component {
  render() {
    return (
      <div>
        <img src={this.props.article.image} alt={this.props.image} />
        <p>{this.props.article.paragraph}</p>
      </div>
    );
  }
}

export default Articles;
