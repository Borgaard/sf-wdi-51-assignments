import React, { Component } from 'react';

import './css/blog.css';

class BlogIssues extends Component {
  render() {
    return (
      <ul>
        <li><a href="">{this.props.issues.issue}</a></li>
      </ul>
    );
  }
}

export default BlogIssues;
