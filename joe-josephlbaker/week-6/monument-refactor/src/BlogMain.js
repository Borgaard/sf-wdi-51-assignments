import React, { Component } from 'react';

import BlogArticle from './BlogArticle';
import BlogAside from './BlogAside';

import './css/blog.css';


class BlogMain extends Component {
  render() {
    return (
      <div class="wrap grid-wrapper">
        <BlogArticle />
        <BlogAside />
      </div>
    )
  }
}

export default BlogMain;
