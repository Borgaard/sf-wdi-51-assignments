import React, { Component } from 'react';
import './App.css';
import './style.css';

class CommentForm extends Component {
  render() {
    return (
      <section className="comment">
        <div className="wrap">
          <h2>Leave a Comment</h2>
          <form>
            <input type="text" placeholder="Name" className="col-half" />
            <input type="email" placeholder="Email" className="col-half" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Comment" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default CommentForm;
