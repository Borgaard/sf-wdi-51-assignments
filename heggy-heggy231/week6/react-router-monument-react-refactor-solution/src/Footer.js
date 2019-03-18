import React, { Component } from 'react';
import './App.css';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <a href="">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
          <input type="text" placeholder="Email Address" />
          <button type="submit">Keep in Touch</button>
        </div>

        <p className="copyright">&copy;2016 Sarah Holden</p>
      </footer>
    );
  }
}

export default Footer;
