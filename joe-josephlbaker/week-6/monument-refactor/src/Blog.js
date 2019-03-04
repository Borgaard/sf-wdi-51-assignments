import React, { Component } from 'react';

import BlogHeader from './BlogHeader';
import NavBar from './NavBar';
import BlogMain from './BlogMain';
import BlogComment from './BlogComment';
import BlogFooter from './BlogFooter';

import './css/blog.css';


class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <BlogHeader />
        <NavBar />
        <BlogMain />
        <BlogComment />
        <BlogFooter />
      </div>
    );
  }
}

export default Blog;
