import React, { Component } from 'react'
import PostList from './PostList'

 class Main extends Component {
  render() {
    return (
  <div class="wrap grid-wrapper">
    <section>
		    <PostList />
    </section>
  </div>
    )
  }
}
export default Main