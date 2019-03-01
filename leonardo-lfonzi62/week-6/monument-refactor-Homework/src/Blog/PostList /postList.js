import React, { Component } from 'react';

class PostList extends Component {
    render() {
      return (
        <section>

		<h2>{this.params.title} </h2>
        <div class="grid-wrapper articles">

        </div>
        </section>
      );
    }
  }


  export default PostList;