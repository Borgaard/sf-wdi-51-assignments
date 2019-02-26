import React, { Component } from 'react';

class Article extends Component {
  render() {
    console.log(this.props)
    return (
      <article className="col-third">
        <img src={this.props.image} />
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
          <button>Read More</button>
        </div>
      </article>
    );
  };
};

export default Article;