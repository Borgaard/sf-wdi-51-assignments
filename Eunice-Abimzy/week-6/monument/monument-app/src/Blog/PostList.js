import React, { Component } from 'react'
import Post from './Post'

 class PostList extends Component {
  render() {
    return (
    	<article>
        <h3>11/23/2016</h3>
				<h2>A Visual Guide to the Southwest</h2>
        <Post />
			</article>
    )
  }
}
export default PostList