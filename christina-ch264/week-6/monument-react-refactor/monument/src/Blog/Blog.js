import React, {Component} from 'react';
import Navbar from './Nav/Navbar';
import Header from './Header/Header';
// import About from './Main/About/About';
// import Comment from './Main/Comment/Comment';
// import Issues from './Main/Issues/Issues';
// import PostList from './Main/PostsList/PostList';
import Main from './Main/Main';



class Blog extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                {/* <About/>
                <PostList/>
                <Comment/> */}
                {/* <Issues/> */}
                <Main/>
            </div>
        )
    }
}

export default Blog;