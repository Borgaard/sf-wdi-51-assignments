import React, { Component } from 'react';
import PostsList from './PostsList';
import About from './About';


class MainBlog extends Component {
  render() {
    return (
      <div className="wrap grid-wrapper">
          <PostsList />
          <About />
      </div>
    );
  };
};

export default MainBlog;