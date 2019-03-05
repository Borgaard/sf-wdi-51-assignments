import React, { Component } from 'react';
import '../css/blog.css';
import Header from './Header';
import MainBlog from './MainBlog';
import Comment from './Comment';

class Blog extends Component {
  render() {
    return (
      <div className="blog-page">
        <Header />
        <MainBlog />
        <Comment />
      </div>
    );
  };
};

export default Blog;