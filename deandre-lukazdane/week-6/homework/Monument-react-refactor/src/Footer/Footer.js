import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrap">
          <div class="social-links">
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
          <button type="submit">Subscribe</button>
        </div>

        <p className="copyright">&copy;2016 Sarah Holden</p>
      </footer>
    );
  }
}

export default Footer;
