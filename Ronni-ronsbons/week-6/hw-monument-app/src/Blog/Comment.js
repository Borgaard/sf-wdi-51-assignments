import React, { Component } from 'react';


class Comment extends Component {
  render() {
    return (
      <section className="comment">
        <div className="wrap">
        <h2>Leave a Comment</h2>
        <form>
          <input type="text" placeholder="Name" class="col-half" />
          <input type="email" placeholder="Email" class="col-half" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
      </section>
    );
  };
};

export default Comment;

