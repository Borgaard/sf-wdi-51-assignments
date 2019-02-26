import React, {Component} from 'react';
import Main from './Main/Main'
import Header from './Header/Header'
import Comment from './Comment/Comment';
import NavBar2 from './NavBar/NavBar2';


class Blog extends Component {
    render() {
      return (
        <div>
        <NavBar2 />
        <Header />
        <Main />
        <Comment />
        </div>
      );
    }
  }
  

export default Blog;