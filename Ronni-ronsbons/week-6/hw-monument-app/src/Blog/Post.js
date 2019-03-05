import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <article>
        <h3>{this.props.date}</h3>
        <h2>{this.props.title}</h2>
        <img src={this.props.image1} alt=""></img>
        <p>{this.props.body1}</p>
        <img src={this.props.image2} alt=""></img>
        <p>{this.props.body2}</p>
      </article>
    );
  };
};

export default Post;