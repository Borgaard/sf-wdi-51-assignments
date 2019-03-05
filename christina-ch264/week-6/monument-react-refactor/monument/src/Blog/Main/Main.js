

import React, {Component} from 'react';
import About from './About/About';
import Comment from './Comment/Comment';
import PostList from './PostsList/PostList';
import './Main.css';



class Main extends Component {
    render() {
        return (
            <div>
                <About/>
                <PostList/>
                <Comment/>
            </div>
        )
    }
}

export default Main;