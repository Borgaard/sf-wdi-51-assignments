import React, { Component } from 'react';
import './blogHeader.css'

class BlogHeader extends Component {
    render() {
        return (
            <header id="blog-header" className="vertical-center">
                <div>
                    <h1><a href="index.html">Monument</a></h1>
                </div>
            </header>
        )
    }
}

export default BlogHeader;